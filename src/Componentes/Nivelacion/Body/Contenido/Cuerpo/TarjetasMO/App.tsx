import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  addEdge,
  Controls,
  ReactFlowInstance,
  Connection,
  Edge,
  Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css"; // Importación de los estilos
import NodeComponent from "./Node";

type Question = {
  question: string;
  options: string[];
  correct: string;
  explain: string;
  image: string;
};

interface AppProps {
  conten: [string, [string, string, string, string], string, string, string][];
  seleccionarPregunta: () => void;
}

const App: React.FC<AppProps> = ({ conten, seleccionarPregunta }) => {
  const questions: Question[] = conten.map((c) => ({
    question: c[0],
    options: c[1],
    correct: c[2],
    explain: c[3],
    image: c[4],
  }));

  const generateInitialNodes = () => {
    const selectedQuestion = questions[0];
    const nodes: Node[] = [
      {
        id: "1",
        type: "question",
        position: { x: 15, y: 15 },
        data: {
          question: selectedQuestion.question,
          image: selectedQuestion.image,
        },
      },
      {
        id: "2",
        type: "option",
        position: { x: 600, y: 15 },
        data: { option: selectedQuestion.options[0] },
      },
      {
        id: "3",
        type: "option",
        position: { x: 600, y: 143 },
        data: { option: selectedQuestion.options[1] },
      },
      {
        id: "4",
        type: "option",
        position: { x: 600, y: 271 },
        data: { option: selectedQuestion.options[2] },
      },
      {
        id: "5",
        type: "option",
        position: { x: 600, y: 400 },
        data: { option: selectedQuestion.options[3] },
      },
    ];
    return {
      nodes,
      correct: selectedQuestion.correct,
      explain: selectedQuestion.explain,
    };
  };

  const [{ nodes, correct, explain }, setInitialState] = useState(
    generateInitialNodes()
  );
  const [edges, setEdges] = useState<Edge[]>([]);
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);

  useEffect(() => {
    setInitialState(generateInitialNodes());
    setEdges([]);
  }, [conten]);

  useEffect(() => {
    if (reactFlowInstance.current) {
      reactFlowInstance.current.fitView();
    }
  }, [reactFlowInstance.current]);

  const onConnect = useCallback(
    (params: Connection) => {
      const existingConnection = edges.find((edge) => edge.source === "1");
      if (existingConnection) return;

      setEdges((eds) => addEdge(params, eds));

      if (params.source === "1") {
        const selectedOption = nodes.find((node) => node.id === params.target)
          ?.data.option;
        console.log(selectedOption.props.value);
        if (selectedOption.props.value === correct) {
          setInitialState((prevState) => ({
            nodes: prevState.nodes.concat({
              id: "6",
              type: "result",
              position: { x: 15, y: 230 },
              data: {
                result: `Correcto. La respuesta correcta es la : ${correct}`,
              },
            }),
            correct: prevState.correct,
            explain: prevState.explain,
          }));
        } else {
          setInitialState((prevState) => ({
            nodes: prevState.nodes.concat({
              id: "6",
              type: "result",
              position: { x: 15, y: 230 },
              data: {
                result: `Incorrecto. La respuesta correcta es la : ${correct} `,
                explain,
              },
            }),
            correct: prevState.correct,
            explain: prevState.explain,
          }));
        }
      }
    },
    [edges, nodes, correct, explain]
  );

  const handleReset = () => {
    setEdges([]);
    seleccionarPregunta();
    if (reactFlowInstance.current) {
      reactFlowInstance.current.fitView();
    }
  };

  return (
    <div className="w-9/10 h-9/10 flex flex-wrap justify-center bg-fondoPrincipal border-x-1 border-texto/40">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={{
          question: NodeComponent,
          option: NodeComponent,
          result: NodeComponent,
        }}
        onInit={(instance) => {
          reactFlowInstance.current = instance;
          instance.fitView();
        }}
      >
        <Controls className="text-enfasis" />
      </ReactFlow>
      <button
        className="border-2 border-texto p-1 rounded-2xl px-2 hover:bg-gradient-to-b from-white from-15% via-white via-75% to-naranjaO to-95% hover:text-[#0e0036] hover:border-enfasis hover:border-2"
        onClick={handleReset}
      >
        Actualizar
      </button>
    </div>
  );
};

export default App;
