import React, { createContext, useState } from "react";
export const ContextoFisica101 = createContext();
export const Datos = ({ children }) => {
  const listaTemas = [
    "Generalidades",
    "Cinemática y Dinámica",
    "Trabajo y Energía",
    "Conservación de la Cantidad de Movimiento Lineal",
    "Oscilaciones con uno y dos grados de libertad",
    "Dinámica de Rígidos y Conservación del Momento Angular",
    "Mecánica de Fluidos y Transferencia de Calor",
  ];
  const listaTemasAbreviados = [
    "Gen.",
    "CyD",
    "TyE",
    "CML",
    "Osci.",
    "DRyCMA",
    "MFyTC",
  ];
  const listaMiniaturas = [
    [["https://img.youtube.com/vi/3KZ8Azbu_5U/0.jpg", "Clase 1"]],
    [
      ["https://img.youtube.com/vi/qZaP0oainsY/0.jpg", "Clase 2"],
      ["https://img.youtube.com/vi/ZB_G8wdzDyk/0.jpg", "Clase 3"],
      ["https://img.youtube.com/vi/C38hP4WCoXo/0.jpg", "Clase 4"],
      ["https://img.youtube.com/vi/yyByESx0u7A/0.jpg", "Clase 5"],
      ["https://img.youtube.com/vi/K9LFLOmD42I/0.jpg", "Clase 6"],
      ["https://img.youtube.com/vi/IGahMm2FZTQ/0.jpg", "Clase 7"],
      ["https://img.youtube.com/vi/sYBKgltcfWU/0.jpg", "Clase 8"],
    ],
    [
      ["https://img.youtube.com/vi/WAAV4bV_QMc/0.jpg", "Clase 9"],
      ["https://img.youtube.com/vi/XTd-zYZeT2E/0.jpg", "Clase 10"],
      ["https://img.youtube.com/vi/cfM3j4lmOwE/0.jpg", "Clase 11"],
      ["https://img.youtube.com/vi/DSOG3ZGvTEQ/0.jpg", "Clase 12"],
    ],
    [
      ["https://img.youtube.com/vi/HcoGANS6TI4/0.jpg", "Clase 13"],
      ["https://img.youtube.com/vi/QYok8_aLLE8/0.jpg", "Clase 14"],
      ["https://img.youtube.com/vi/-Ik7gCLlXoc/0.jpg", "Clase 15"],
      ["https://img.youtube.com/vi/eTAH4xGi_QE/0.jpg", "Clase 16"],
      ["https://img.youtube.com/vi/5j_t9xnw6hk/0.jpg", "Clase 17"],
    ],
    [
      ["https://img.youtube.com/vi/bruNwBX2jgI/0.jpg", "Clase 18"],
      ["https://img.youtube.com/vi/UkSgld4uugk/0.jpg", "Clase 19"],
      ["https://img.youtube.com/vi/0OIYEFsRtNk/0.jpg", "Clase 20"],
      ["https://img.youtube.com/vi/pOyM7VMcaus/0.jpg", "Clase 21"],
      ["https://img.youtube.com/vi/l7GghkbHNGA/0.jpg", "Clase 22"],
    ],
    [
      ["https://img.youtube.com/vi/An58-rCv6Jo/0.jpg", "Clase 23"],
      ["https://img.youtube.com/vi/dTIuRvyFgbU/0.jpg", "Clase 24"],
      ["https://img.youtube.com/vi/afmzSh7E88Y/0.jpg", "Clase 25"],
      ["https://img.youtube.com/vi/g46-k1SMp2Y/0.jpg", "Clase 26"],
      ["https://img.youtube.com/vi/KnHs_yg6lAM/0.jpg", "Clase 27"],
      ["https://img.youtube.com/vi/8XYrmULcNNc/0.jpg", "Clase 28"],
    ],
    [],
  ];
  const listaMiniaturasA = [
    [],
    [
      ["https://img.youtube.com/vi/PRD9XYH5gZo/0.jpg", "Clase 1a"],
      ["https://img.youtube.com/vi/Gdy1OfEuB_I/0.jpg", "Clase 2a"],
      ["https://img.youtube.com/vi/umByqC58oYg/0.jpg", "Clase 3a"],
      ["https://img.youtube.com/vi/KRCvlQqjinE/0.jpg", "Clase 4a"],
      ["https://img.youtube.com/vi/k2Usjbat718/0.jpg", "Clase 5a"],
    ],
    [
      ["https://img.youtube.com/vi/LteCFCM-S74/0.jpg", "Clase 1a"],
      ["https://img.youtube.com/vi/P4nCsuyAJVY/0.jpg", "Clase 2a"],
      ["https://img.youtube.com/vi/gLeQKEUe1dQ/0.jpg", "Clase 3a"],
      ["https://img.youtube.com/vi/n4BRdKubwdc/0.jpg", "Clase 4a"],
      ["https://img.youtube.com/vi/dTdIcdeFSmc/0.jpg", "Clase 5a"],
    ],
    [
      ["https://img.youtube.com/vi/ahZwer4Mqyc/0.jpg", "Clase 1a"],
      ["https://img.youtube.com/vi/--ZDzANrG1I/0.jpg", "Clase 2a"],
      ["https://img.youtube.com/vi/xX2Lx3PdgA4/0.jpg", "Clase 3a"],
      ["https://img.youtube.com/vi/bmyAFz7t0MU/0.jpg", "Clase 4a"],
      ["https://img.youtube.com/vi/v6sh8cy2rX4/0.jpg", "Clase 5a"],
    ],
    [
      ["https://img.youtube.com/vi/CykxL0LKJ_s/0.jpg", "Clase 1a"],
      ["https://img.youtube.com/vi/NWqyKFFjBCg/0.jpg", "Clase 2a"],
      ["https://img.youtube.com/vi/jh585YK22Zw/0.jpg", "Clase 3a"],
      ["https://img.youtube.com/vi/8vlTEq1Sb40/0.jpg", "Clase 4a"],
      ["https://img.youtube.com/vi/swZMQNL1R8s/0.jpg", "Clase 5a"],
    ],
    [
      ["https://img.youtube.com/vi/kJH_pUxPnIs/0.jpg", "Clase 1a"],
      ["https://img.youtube.com/vi/Lvm5OpAus-U/0.jpg", "Clase 2a"],
      ["https://img.youtube.com/vi/3I8CyVW2ngA/0.jpg", "Clase 3a"],
      ["https://img.youtube.com/vi/LVsQaNswW9A/0.jpg", "Clase 4a"],
      ["https://img.youtube.com/vi/mMGvCtItKhg/0.jpg", "Clase 5a"],
    ],
    [],
  ];
  const listaMiniaturasB = [
    [],
    [
      ["https://img.youtube.com/vi/Vv9mWR9DIFA/0.jpg", "Clase 1b"],
      ["https://img.youtube.com/vi/ZGvgp_OHsM0/0.jpg", "Clase 2b"],
      ["https://img.youtube.com/vi/pKchTrSjjwE/0.jpg", "Clase 3b"],
      ["https://img.youtube.com/vi/S-PbM6sohos/0.jpg", "Clase 4b"],
      ["https://img.youtube.com/vi/KfWnvs4-D6s/0.jpg", "Clase 5b"],
    ],
    [
      ["https://img.youtube.com/vi/NwTaE3IwAOI/0.jpg", "Clase 1b"],
      ["https://img.youtube.com/vi/bxy8-fkm6tI/0.jpg", "Clase 2b"],
      ["https://img.youtube.com/vi/ZLn3wyQIGyE/0.jpg", "Clase 3b"],
      ["https://img.youtube.com/vi/rDDFsaak0Mw/0.jpg", "Clase 4b"],
      ["https://img.youtube.com/vi/focHGsumD3g/0.jpg", "Clase 5b"],
    ],
    [
      ["https://img.youtube.com/vi/yN1f6EPIya0/0.jpg", "Clase 1b"],
      ["https://img.youtube.com/vi/HNrP-YnymO0/0.jpg", "Clase 2b"],
      ["https://img.youtube.com/vi/iliY3W33W-M/0.jpg", "Clase 3b"],
      ["https://img.youtube.com/vi/gY18K4_1wnI/0.jpg", "Clase 4b"],
      ["https://img.youtube.com/vi/3wH7j2Ax0XI/0.jpg", "Clase 5b"],
    ],
    [
      ["https://img.youtube.com/vi/rKg_YBfseNU/0.jpg", "Clase 1b"],
      ["https://img.youtube.com/vi/5Hd05CvzE3s/0.jpg", "Clase 2b"],
      ["https://img.youtube.com/vi/TuP95RYdK8Q/0.jpg", "Clase 3b"],
      ["https://img.youtube.com/vi/UnqiQvEzNbc/0.jpg", "Clase 4b"],
      ["https://img.youtube.com/vi/70T0yvo67Mk/0.jpg", "Clase 5b"],
    ],
    [
      ["https://img.youtube.com/vi/7eC9JpTwRuM/0.jpg", "Clase 1b"],
      ["https://img.youtube.com/vi/10ia6E1zw_0/0.jpg", "Clase 2b"],
      ["https://img.youtube.com/vi/IUMCxBKV2Nc/0.jpg", "Clase 3b"],
      ["https://img.youtube.com/vi/xSIMKik96ro/0.jpg", "Clase 4b"],
      ["https://img.youtube.com/vi/tIFpsj1o5Sg/0.jpg", "Clase 5b"],
    ],
    [],
  ];
  const listaVideos = [
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/3KZ8Azbu_5U"
          title="2019 Clase 01 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/qZaP0oainsY"
          title="2019 Clase 02 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        ,
        "Clase 2",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/ZB_G8wdzDyk"
          title="2019 Clase 03 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/C38hP4WCoXo"
          title="2019 Clase 04 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/yyByESx0u7A"
          title="2019 Clase 05 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/K9LFLOmD42I"
          title="2019 Clase 06 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 6",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/IGahMm2FZTQ"
          title="2019 Clase 07 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 7",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/sYBKgltcfWU"
          title="2019 Clase 08 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 8",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/WAAV4bV_QMc"
          title="2019 Clase 09 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 9",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/XTd-zYZeT2E"
          title="2019 Clase 10 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 10",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/cfM3j4lmOwE"
          title="2019 Clase 11 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 11",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/DSOG3ZGvTEQ"
          title="19 Clase 12 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 12",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/HcoGANS6TI4"
          title="19 Clase 13 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 13",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/QYok8_aLLE8"
          title="19 Clase 14 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 14",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/-Ik7gCLlXoc"
          title="19 Clase 15 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 15",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/eTAH4xGi_QE"
          title="19 Clase 16 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 16",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/5j_t9xnw6hk"
          title="19 Clase 17 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 17",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/bruNwBX2jgI"
          title="19 Clase 18 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 18",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/UkSgld4uugk"
          title="19 Clase 19 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 19",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/0OIYEFsRtNk"
          title="19 Clase 20 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 20",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/pOyM7VMcaus"
          title="19 Clase 21 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 21",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/l7GghkbHNGA"
          title="19 Clase 22 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 22",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/An58-rCv6Jo"
          title="19 Clase 23 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 23",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/dTIuRvyFgbU"
          title="19 Clase 24 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 24",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/afmzSh7E88Y"
          title="19 Clase 25 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 25",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/g46-k1SMp2Y"
          title="19 Clase 26 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 26",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/KnHs_yg6lAM"
          title="19 Clase 27 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 27",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/8XYrmULcNNc"
          title="19 Clase 28 Física 101"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 28",
      ],
    ],
    [],
  ];
  const listaVideosA = [
    [],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/PRD9XYH5gZo"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/Gdy1OfEuB_I"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/umByqC58oYg"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/KRCvlQqjinE"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/k2Usjbat718"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5a",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/LteCFCM-S74"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/P4nCsuyAJVY"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/gLeQKEUe1dQ"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/n4BRdKubwdc"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/dTdIcdeFSmc"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5a",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/ahZwer4Mqyc"
          title="Física 101: Práctico Momento Lineal, Ejercicio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/--ZDzANrG1I"
          title="Física 101: Práctico Momento Lineal, Ejercicio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/xX2Lx3PdgA4"
          title="Física 101: Práctico Momento Lineal, Ejercicio 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/bmyAFz7t0MU"
          title="Física 101: Práctico Momento Lineal, Ejercicio 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/v6sh8cy2rX4"
          title="Física 101: Práctico Momento Lineal, Ejercicio 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5a",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/CykxL0LKJ_s"
          title="Física 101: Práctico Oscilaciones, Ejercicio 11"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/NWqyKFFjBCg"
          title="Física 101: Práctico Oscilaciones, Ejercicio 12"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/jh585YK22Zw"
          title="Física 101: Práctico Oscilaciones, Ejercicio 13"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/8vlTEq1Sb40"
          title="Física 101: Práctico Oscilaciones, Ejercicio 15"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/swZMQNL1R8s"
          title="Física 101: Práctico Oscilaciones, Ejercicio 19"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5a",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/kJH_pUxPnIs"
          title="Física 101: Práctico Rígidos, Ejercicio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/Lvm5OpAus-U"
          title="Física 101: Práctico Rígidos, Ejercicio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/3I8CyVW2ngA"
          title="Física 101: Práctico Rígidos, Ejercicio 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/LVsQaNswW9A"
          title="Física 101: Práctico Rígidos, Ejercicio 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4a",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/mMGvCtItKhg"
          title="Física 101: Práctico Rígidos, Ejercicio 10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5a",
      ],
    ],
    [],
  ];
  const listaVideosB = [
    [],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/Vv9mWR9DIFA"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 6"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/ZGvgp_OHsM0"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/pKchTrSjjwE"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/S-PbM6sohos"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 9"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/KfWnvs4-D6s"
          title="Física 101: Práctico Cinemática y Dinámica, Ejercicio 10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5b",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/NwTaE3IwAOI"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 6"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/bxy8-fkm6tI"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/ZLn3wyQIGyE"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/rDDFsaak0Mw"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 9"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/focHGsumD3g"
          title="Física 101: Práctico Trabajo y Energía, Ejercicio 10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5b",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/yN1f6EPIya0"
          title="Física 101: Práctico Momento Lineal, Ejercicio 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/HNrP-YnymO0"
          title="Física 101: Práctico Momento Lineal, Ejercicio 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/iliY3W33W-M"
          title="Física 101: Práctico Momento Lineal, Ejercicio 8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/gY18K4_1wnI"
          title="Física 101: Práctico Momento Lineal, Ejercicio 10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/3wH7j2Ax0XI"
          title="Física 101: Práctico Momento Lineal, Ejercicio 7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5b",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/rKg_YBfseNU"
          title="Física 101: Práctico Oscilaciones, ejercicio 14"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/5Hd05CvzE3s"
          title="Física 101: Practico Oscilaciones, ejercicio 16"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/TuP95RYdK8Q"
          title="Física 101: Práctico Oscilaciones, ejercicio 17"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/UnqiQvEzNbc"
          title="Física 101: Práctico Oscilaciones, ejercicio 18"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/70T0yvo67Mk"
          title="Física 101: Práctico Oscilaciones, ejercicio 20"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5b",
      ],
    ],
    [
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/7eC9JpTwRuM"
          title="Física 101: Práctico Rígidos, Ejercicio 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 1b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/10ia6E1zw_0"
          title="Física 101: Práctico Rígidos, Ejercicio  6"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 2b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/IUMCxBKV2Nc"
          title="Física 101: Práctico Rígidos, Ejercicio  7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 3b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/xSIMKik96ro"
          title="Física 101: Práctico Rígidos, Ejercicio  8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 4b",
      ],
      [
        <iframe
          // width="60%"
          // height="100%"
          className="rounded-2xl w-full h-full"
          src="https://www.youtube.com/embed/tIFpsj1o5Sg"
          title="Física 101: Práctico Rígidos, Ejercicio 9"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
        "Clase 5b",
      ],
    ],
    [],
  ];
  const [tema, setTema] = useState(listaTemas[0]);
  const [indiceTema, setIndiceTema] = useState(0);
  const [videoActivo, setVideoActivo] = useState(listaVideos[0][0][0]);
  return (
    <ContextoFisica101.Provider
      value={{
        listaTemas,
        listaTemasAbreviados,
        listaMiniaturas,
        listaMiniaturasA,
        listaMiniaturasB,
        tema,
        setTema,
        indiceTema,
        setIndiceTema,
        listaVideos,
        listaVideosA,
        listaVideosB,
        videoActivo,
        setVideoActivo,
      }}
    >
      {children}
    </ContextoFisica101.Provider>
  );
};
