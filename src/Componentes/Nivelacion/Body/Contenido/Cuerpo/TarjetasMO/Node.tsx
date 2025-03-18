import React from "react";
import { Background, Handle, Position } from "@xyflow/react";

const Node = ({ id, type, data, isConnectable }) => {
  return (
    <div className="text-pretty text-texto bg-fondoPrincipal text-xl">
      {type === "question" && (
        <div className="rounded-2xl h-2/5 flex items-center   border-1 border-texto p-1   w-100 max-h-50 ">
          <div className=" flex flex-wrap w-75 max-h-40 overflow-y-auto text-left">
            {data.question}
          </div>
          <div>
            {data.image && (
              <img
                className="w-50 h-50 rounded-xl hover:scale-150 transition duration-300 ease-in-out p-2"
                src={data.image}
                alt="Question related"
              />
            )}
          </div>
          <Handle
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#ff4500",
              border: "solid 1px black",
            }}
            type="source"
            position={Position.Right}
          />
        </div>
      )}

      {type === "option" && (
        <div className=" border-solid border-1 border-texto p-1 ml-2 rounded-xl flex w-75 max-h-25 overflow-y-auto ">
          <div className="flex flex-wrap  ">{data.option}</div>
          <Handle
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#ff4500",
              border: "solid 1px black",
            }}
            type="target"
            position={Position.Left}
          />
        </div>
      )}

      {type === "result" && (
        <div className=" border-solid border-1 border-texto p-1 rounded-xl flex flex-wrap w-100">
          <div className="w-100 max-h-50 overflow-y-auto">
            <div>{data.result}</div>
            <div>{data.explain}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Node;
