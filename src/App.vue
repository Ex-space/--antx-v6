<script setup lang="ts">
import { Graph } from "@antv/x6";
import "@antv/x6-vue-shape";
import { handleResize } from "./utils/handleResize";
import { onMounted } from "vue";
import { blackEdge } from "./edges/blackEdge.ts";
import { yellowStrokeEdge } from "./edges/yellowStrokeEdge.ts";
import { greenEdge } from "./edges/greenEdge.ts";
import {
  transparentNode1,
  transparentNode3,
  transparentNode5,
  transparentNode7,
  transparentNode8,
  transparentNode11,
  transparentNode13,
  transparentNode14,
  transparentNode15,
  transparentNode16,
  transparentNode17,
  transparentNode18,
  transparentNode19,
  transparentNode20,
  transparentNode21,
  transparentNode22,
  transparentNode23,
  transparentNode24,
  transparentNode25,
  transparentNode26,
  transparentNode27,
  transparentNode28,
  transparentNode29,
  transparentNode30,
  transparentNode31,
} from "./nodes/transparentNode";
import {
  shadowRectNode1,
  shadowRectNode2,
  shadowRectNode5,
  shadowRectNode6,
  shadowRectNode7,
  shadowRectNode8,
  shadowRectNode9,
  shadowRectNode10,
} from "./nodes/shadowRectNode";
import { emptyNode1, emptyNode2 } from "./nodes/emptyNode";
import { getCanvasOPT } from "./canvas/canvas.ts";
import { metalNode1, metalNode3, metalNode4 } from "./nodes/metalNode";
import {
  greenNode1,
  greenNode3,
  greenNode4,
  greenNode5,
  greenNode6,
  greenNode7,
  greenNode8,
  greenNode9,
  greenNode10,
  greenNode11,
} from "./nodes/greenNode";
import { naEdge } from "./edges/naEdge";
import { smallDashEdge } from "./edges/smallDashEdge";
import { naDashEdge } from "./edges/naDashEdge";
import { bidirectionalEdge } from "./edges/bidirectionalEdge";
import { smallBlackEdge } from "./edges/smallBlackEdge";
import { bidireGreenEdge } from "./edges/bidireGreenEdge";
import { littleBlackNode1 } from "./nodes/littleBlackNode";
import {
  textNode1,
  textNode3,
  textNode5,
  textNode6,
  textNode7,
  textNode8,
  textNode9,
  textNode10,
  textNode11,
  textNode12,
  textNode13,
  textNode14,
  textNode15,
  textNode16,
  textNode17,
  textNode18,
  textNode19,
  textNode20,
  textNode21,
  textNode22,
  textNode23,
  textNode24,
  textNode25,
  textNode26,
  textNode27,
  textNode28,
  textNode29,
  textNode30,
  textNode31,
  textNode32,
  textNode33,
  textNode34,
  textNode35,
  textNode36,
  textNode37,
  textNode38,
  textNode39,
  textNode40,
} from "./nodes/textNode";
import { allGreenEdge } from "./edges/allGreenEdge";
import { allBlackEdge } from "./edges/allBlackEdge";
import { blackFillEdge } from "./edges/blackFillEdge";
import { yHbBEdge } from "./edges/yHbBEdge";
import { YABEdge } from "./edges/YABEdge";
import { greenCircleNode1, greenCircleNode3 } from "./nodes/greenCircleNode";
import { dataNode1, dataNode2, dataNode3, dataNode4 } from "./nodes/dataNode";
import {
  signNode1,
  signNode2,
  signNode3,
  signNode4,
  signNode5,
  signNode6,
  signNode7,
} from "./nodes/signNode";
import {
  bottomNode,
  bottomNode1,
  bottomNode2,
  bottomNode3,
  bottomNode4,
  bottomNode5,
  bottomNode6,
  bottomNode7,
  bottomNode8,
  bottomNode9,
  bottomNode10,
  bottomNode11,
  bottomNode12,
  bottomNode13,
} from "./nodes/bottomNode";
import { 
  anglevalveNode1,
  anglevalveNode2,
} from "./nodes/anglevalveNode"
onMounted(() => {
  //定义画布
  const container = document.getElementById("container");
  const graph = new Graph(getCanvasOPT(container!));
  //定义渲染数据
  const data = {
    nodes: [
      {
        id: "shadowRectNodeA1",
        y: 132,
        ...shadowRectNode1,
      },
      // {
      //   id: "shadowRectNodeB1",
      //   y: 462,
      //   ...shadowRectNode1,
      // },
      // {
      //   id: "shadowRectNodeC1",
      //   y: 792,
      //   ...shadowRectNode1,
      // },
      /////////////////////////
      // {
      //   id: "shadowRectNodeA2",
      //   y: 222,
      //   ...shadowRectNode2,
      // },
      // {
      //   id: "shadowRectNodeB2",
      //   y: 552,
      //   ...shadowRectNode2,
      // },
      // {
      //   id: "shadowRectNodeC2",
      //   y: 882,
      //   ...shadowRectNode2,
      // },
      /////////////////////////
      // {
      //   id: "shadowRectNodeA5",
      //   y: 143,
      //   ...shadowRectNode5,
      // },
      // {
      //   id: "shadowRectNodeB5",
      //   y: 473,
      //   ...shadowRectNode5,
      // },
      // {
      //   id: "shadowRectNodeC5",
      //   y: 803,
      //   ...shadowRectNode5,
      // },
      /////////////////////////
      // {
      //   id: "shadowRectNodeA6",
      //   y: 236,
      //   ...shadowRectNode6,
      // },
      // {
      //   id: "shadowRectNodeB6",
      //   y: 566,
      //   ...shadowRectNode6,
      // },
      // {
      //   id: "shadowRectNodeC6",
      //   y: 896,
      //   ...shadowRectNode6,
      // },
      /////////////////////////
      {
        id: "shadowRectNodeA7",
        y: 88.5,
        ...shadowRectNode7,
      },
      // {
      //   id: "shadowRectNodeB7",
      //   y: 418.5,
      //   ...shadowRectNode7,
      // },
      // {
      //   id: "shadowRectNodeC7",
      //   y: 748.5,
      //   ...shadowRectNode7,
      // },
      /////////////////////////
      // {
      //   id: "shadowRectNodeA8",
      //   y: 159,
      //   ...shadowRectNode8,
      // },
      // {
      //   id: "shadowRectNodeB8",
      //   y: 489,
      //   ...shadowRectNode8,
      // },
      // {
      //   id: "shadowRectNodeC8",
      //   y: 819,
      //   ...shadowRectNode8,
      // },
      /////////////////////////
      // {
      //   id: "shadowRectNodeA9",
      //   y: 246,
      //   ...shadowRectNode9,
      // },
      // {
      //   id: "shadowRectNodeB9",
      //   y: 576,
      //   ...shadowRectNode9,
      // },
      // {
      //   id: "shadowRectNodeC9",
      //   y: 906,
      //   ...shadowRectNode10,
      // },
      /////////////////////////
      {
        id: "shadowRectNodeA10",
        y: 308.5,
        ...shadowRectNode10,
      },
      // {
      //   id: "shadowRectNodeB10",
      //   y: 638.5,
      //   ...shadowRectNode10,
      // },
      // {
      //   id: "shadowRectNodeC10",
      //   y: 968.5,
      //   ...shadowRectNode10,
      // },
      /////////////////////////
      {
        id: "metalNodeA1",
        y: 198,
        ...metalNode1,
      },
      // {
      //   id: "metalNodeB1",
      //   y: 528,
      //   ...metalNode1,
      // },
      // {
      //   id: "metalNodeC1",
      //   y: 858,
      //   ...metalNode1,
      // },
      /////////////////////////
      {
        id: "metalNodeA3",
        y: 99,
        ...metalNode3,
      },
      // {
      //   id: "metalNodeB3",
      //   y: 429,
      //   ...metalNode3,
      // },
      // {
      //   id: "metalNodeC3",
      //   y: 759,
      //   ...metalNode3,
      // },
      /////////////////////////
      {
        id: "metalNodeA4",
        y: 319,
        ...metalNode4,
      },
      // {
      //   id: "metalNodeB4",
      //   y: 649,
      //   ...metalNode4,
      // },
      // {
      //   id: "metalNodeC4",
      //   y: 979,
      //   ...metalNode4,
      // },
      /////////////////////////
      {
        id: "greenNodeA1",
        y: 128,
        ...greenNode1,
      },
      // {
      //   id: "greenNodeB1",
      //   y: 458,
      //   ...greenNode1,
      // },
      // {
      //   id: "greenNodeC1",
      //   y: 788,
      //   ...greenNode1,
      // },
      /////////////////////////
      // {
      //   id: "greenNodeA3",
      //   y: 153,
      //   ...greenNode3,
      // },
      // {
      //   id: "greenNodeB3",
      //   y: 483,
      //   ...greenNode3,
      // },
      // {
      //   id: "greenNodeC3",
      //   y: 813,
      //   ...greenNode3,
      // },
      /////////////////////////
      // {
      //   id: "greenNodeA4",
      //   y: 227,
      //   ...greenNode4,
      // },
      // {
      //   id: "greenNodeB4",
      //   y: 557,
      //   ...greenNode4,
      // },
      // {
      //   id: "greenNodeC4",
      //   y: 887,
      //   ...greenNode4,
      // },
      /////////////////////////
      // {
      //   id: "greenNodeA5",
      //   y: 270,
      //   ...greenNode5,
      // },
      // {
      //   id: "greenNodeB5",
      //   y: 600,
      //   ...greenNode5,
      // },
      // {
      //   id: "greenNodeC5",
      //   y: 930,
      //   ...greenNode5,
      // },
      /////////////////////////
      {
        id: "greenNodeA6",
        y: 304,
        ...greenNode6,
      },
      // {
      //   id: "greenNodeB6",
      //   y: 634,
      //   ...greenNode6,
      // },
      // {
      //   id: "greenNodeC6",
      //   y: 964,
      //   ...greenNode6,
      // },
      /////////////////////////
      {
        id: "greenNodeA7",
        y: 327,
        ...greenNode7,
      },
      // {
      //   id: "greenNodeB7",
      //   y: 657,
      //   ...greenNode7,
      // },
      // {
      //   id: "greenNodeC7",
      //   y: 987,
      //   ...greenNode7,
      // },
      /////////////////////////
      {
        id: "greenNodeA8",
        y: 261,
        ...greenNode8,
      },
      // {
      //   id: "greenNodeB8",
      //   y: 591,
      //   ...greenNode8,
      // },
      // {
      //   id: "greenNodeC8",
      //   y: 921,
      //   ...greenNode8,
      // },
      /////////////////////////
      {
        id: "greenNodeA9",
        y: 350,
        ...greenNode9,
      },
      // {
      //   id: "greenNodeB9",
      //   y: 680,
      //   ...greenNode9,
      // },
      // {
      //   id: "greenNodeC9",
      //   y: 1010,
      //   ...greenNode9,
      // },
      /////////////////////////
      {
        id: "greenNodeA10",
        y: 292,
        ...greenNode10,
      },
      // {
      //   id: "greenNodeB10",
      //   y: 622,
      //   ...greenNode10,
      // },
      // {
      //   id: "greenNodeC10",
      //   y: 952,
      //   ...greenNode10,
      // },
      /////////////////////////
      // {
      //   id: "greenNodeA11",
      //   y: 150,
      //   ...greenNode11,
      // },
      // {
      //   id: "greenNodeB11",
      //   y: 480,
      //   ...greenNode11,
      // },
      // {
      //   id: "greenNodeC11",
      //   y: 810,
      //   ...greenNode11,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA1",
      //   y: 345,
      //   ...transparentNode1,
      // },
      // {
      //   id: "transparentNodeB1",
      //   y: 675,
      //   ...transparentNode1,
      // },
      // {
      //   id: "transparentNodeC1",
      //   y: 1005,
      //   ...transparentNode1,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA3",
      //   y: 345,
      //   ...transparentNode3,
      // },
      // {
      //   id: "transparentNodeB3",
      //   y: 675,
      //   ...transparentNode3,
      // },
      // {
      //   id: "transparentNodeC3",
      //   y: 1005,
      //   ...transparentNode3,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA5",
      //   y: 273,
      //   ...transparentNode5,
      // },
      // {
      //   id: "transparentNodeB5",
      //   y: 603,
      //   ...transparentNode5,
      // },
      // {
      //   id: "transparentNodeC5",
      //   y: 933,
      //   ...transparentNode5,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA7",
      //   y: 123,
      //   ...transparentNode7,
      // },
      // {
      //   id: "transparentNodeB7",
      //   y: 453,
      //   ...transparentNode7,
      // },
      // {
      //   id: "transparentNodeC7",
      //   y: 783,
      //   ...transparentNode7,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA8",
      //   y: 216,
      //   ...transparentNode8,
      // },
      // {
      //   id: "transparentNodeB8",
      //   y: 546,
      //   ...transparentNode8,
      // },
      // {
      //   id: "transparentNodeC8",
      //   y: 876,
      //   ...transparentNode8,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA11",
      //   y: 81,
      //   ...transparentNode11,
      // },
      // {
      //   id: "transparentNodeB11",
      //   y: 411,
      //   ...transparentNode11,
      // },
      // {
      //   id: "transparentNodeC11",
      //   y: 741,
      //   ...transparentNode11,
      // },
      /////////////////////////
      {
        id: "transparentNodeA13",
        y: 309,
        ...transparentNode13,
      },
      // {
      //   id: "transparentNodeB13",
      //   y: 639,
      //   ...transparentNode13,
      // },
      // {
      //   id: "transparentNodeC13",
      //   y: 969,
      //   ...transparentNode13,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA14",
      //   y: 123,
      //   ...transparentNode14,
      // },
      // {
      //   id: "transparentNodeB14",
      //   y: 453,
      //   ...transparentNode14,
      // },
      // {
      //   id: "transparentNodeC14",
      //   y: 783,
      //   ...transparentNode14,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA15",
      //   y: 246,
      //   ...transparentNode15,
      // },
      // {
      //   id: "transparentNodeB15",
      //   y: 576,
      //   ...transparentNode15,
      // },
      // {
      //   id: "transparentNodeC15",
      //   y: 906,
      //   ...transparentNode15,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA16",
      //   y: 246,
      //   ...transparentNode16,
      // },
      // {
      //   id: "transparentNodeB16",
      //   y: 576,
      //   ...transparentNode16,
      // },
      // {
      //   id: "transparentNodeC16",
      //   y: 906,
      //   ...transparentNode16,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA17",
      //   y: 246,
      //   ...transparentNode17,
      // },
      // {
      //   id: "transparentNodeB17",
      //   y: 576,
      //   ...transparentNode17,
      // },
      // {
      //   id: "transparentNodeC17",
      //   y: 906,
      //   ...transparentNode17,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA18",
      //   y: 246,
      //   ...transparentNode18,
      // },
      // {
      //   id: "transparentNodeB18",
      //   y: 576,
      //   ...transparentNode18,
      // },
      // {
      //   id: "transparentNodeC18",
      //   y: 906,
      //   ...transparentNode18,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA19",
      //   y: 246,
      //   ...transparentNode19,
      // },
      // {
      //   id: "transparentNodeB19",
      //   y: 576,
      //   ...transparentNode19,
      // },
      // {
      //   id: "transparentNodeC19",
      //   y: 906,
      //   ...transparentNode19,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA20",
      //   y: 246,
      //   ...transparentNode20,
      // },
      // {
      //   id: "transparentNodeB20",
      //   y: 576,
      //   ...transparentNode20,
      // },
      // {
      //   id: "transparentNodeC20",
      //   y: 906,
      //   ...transparentNode20,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA21",
      //   y: 360,
      //   ...transparentNode21,
      // },
      // {
      //   id: "transparentNodeB21",
      //   y: 690,
      //   ...transparentNode21,
      // },
      // {
      //   id: "transparentNodeC21",
      //   y: 1020,
      //   ...transparentNode21,
      // },
      /////////////////////////
      {
        id: "transparentNodeA22",
        y: 308.5,
        ...transparentNode22,
      },
      // {
      //   id: "transparentNodeB22",
      //   y: 638.5,
      //   ...transparentNode22,
      // },
      // {
      //   id: "transparentNodeC22",
      //   y: 968.5,
      //   ...transparentNode22,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA23",
      //   y: 165,
      //   ...transparentNode23,
      // },
      // {
      //   id: "transparentNodeB23",
      //   y: 495,
      //   ...transparentNode23,
      // },
      // {
      //   id: "transparentNodeC23",
      //   y: 825,
      //   ...transparentNode23,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA24",
      //   y: 165,
      //   ...transparentNode24,
      // },
      // {
      //   id: "transparentNodeB24",
      //   y: 495,
      //   ...transparentNode24,
      // },
      // {
      //   id: "transparentNodeC24",
      //   y: 825,
      //   ...transparentNode24,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA25",
      //   y: 189,
      //   ...transparentNode25,
      // },
      // {
      //   id: "transparentNodeB25",
      //   y: 519,
      //   ...transparentNode25,
      // },
      // {
      //   id: "transparentNodeC25",
      //   y: 849,
      //   ...transparentNode25,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA26",
      //   y: 189,
      //   ...transparentNode26,
      // },
      // {
      //   id: "transparentNodeB26",
      //   y: 519,
      //   ...transparentNode26,
      // },
      // {
      //   id: "transparentNodeC26",
      //   y: 849,
      //   ...transparentNode26,
      // },
      /////////////////////////
      // {
      //   id: "transparentNodeA27",
      //   y: 189,
      //   ...transparentNode27,
      // },
      // {
      //   id: "transparentNodeB27",
      //   y: 519,
      //   ...transparentNode27,
      // },
      // {
      //   id: "transparentNodeC27",
      //   y: 849,
      //   ...transparentNode27,
      // },
      /////////////////////////
      // transparentNode28,
      // transparentNode29,
      // transparentNode30,
      // transparentNode31,
      /////////////////////////
      // {
      //   id: "greenCircleNodeA1",
      //   y: 214,
      //   ...greenCircleNode1,
      // },
      // {
      //   id: "greenCircleNodeB1",
      //   y: 544,
      //   ...greenCircleNode1,
      // },
      // {
      //   id: "greenCircleNodeC1",
      //   y: 874,
      //   ...greenCircleNode1,
      // },
      /////////////////////////
      {
        id: "greenCircleNodeA3",
        y: 315,
        ...greenCircleNode3,
      },
      // {
      //   id: "greenCircleNodeB3",
      //   y: 645,
      //   ...greenCircleNode3,
      // },
      // {
      //   id: "greenCircleNodeC3",
      //   y: 975,
      //   ...greenCircleNode3,
      // },
      /////////////////////////
      {
        id: "emptyNodeA1",
        y: 316,
        ...emptyNode1,
      },
      // {
      //   id: "emptyNodeB1",
      //   y: 646,
      //   ...emptyNode1,
      // },
      // {
      //   id: "emptyNodeC1",
      //   y: 976,
      //   ...emptyNode1,
      // },
      /////////////////////////
      {
        id: "emptyNodeA2",
        y: 316,
        ...emptyNode2,
      },
      // {
      //   id: "emptyNodeB2",
      //   y: 646,
      //   ...emptyNode2,
      // },
      // {
      //   id: "emptyNodeC2",
      //   y: 976,
      //   ...emptyNode2,
      // },
      /////////////////////////
      // {
      //   id: "littleBlackNodeA1",
      //   y: 302,
      //   ...littleBlackNode1,
      // },
      // {
      //   id: "littleBlackNodeB1",
      //   y: 632,
      //   ...littleBlackNode1,
      // },
      // {
      //   id: "littleBlackNodeC1",
      //   y: 962,
      //   ...littleBlackNode1,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA1",
      //   y: 158,
      //   ...textNode1,
      // },
      // {
      //   id: "textNodeB1",
      //   y: 488,
      //   ...textNode1,
      // },
      // {
      //   id: "textNodeC1",
      //   y: 818,
      //   ...textNode1,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA3",
      //   y: 174,
      //   ...textNode3,
      // },
      // {
      //   id: "textNodeB3",
      //   y: 504,
      //   ...textNode3,
      // },
      // {
      //   id: "textNodeC3",
      //   y: 834,
      //   ...textNode3,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA5",
      //   y: 240,
      //   ...textNode5,
      // },
      // {
      //   id: "textNodeB5",
      //   y: 570,
      //   ...textNode5,
      // },
      // {
      //   id: "textNodeC5",
      //   y: 900,
      //   ...textNode5,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA6",
      //   y: 120,
      //   ...textNode6,
      // },
      // {
      //   id: "textNodeB6",
      //   y: 450,
      //   ...textNode6,
      // },
      // {
      //   id: "textNodeC6",
      //   y: 780,
      //   ...textNode6,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA7",
      //   y: 340,
      //   ...textNode7,
      // },
      // {
      //   id: "textNodeB7",
      //   y: 670,
      //   ...textNode7,
      // },
      // {
      //   id: "textNodeC7",
      //   y: 1000,
      //   ...textNode7,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA8",
      //   y: 355,
      //   ...textNode8,
      // },
      // {
      //   id: "textNodeB8",
      //   y: 685,
      //   ...textNode8,
      // },
      // {
      //   id: "textNodeC8",
      //   y: 1015,
      //   ...textNode8,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA9",
      //   y: 318,
      //   ...textNode9,
      // },
      // {
      //   id: "textNodeB9",
      //   y: 648,
      //   ...textNode9,
      // },
      // {
      //   id: "textNodeC9",
      //   y: 978,
      //   ...textNode9,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA10",
      //   y: 210,
      //   ...textNode10,
      // },
      // {
      //   id: "textNodeB10",
      //   y: 540,
      //   ...textNode10,
      // },
      // {
      //   id: "textNodeC10",
      //   y: 870,
      //   ...textNode10,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA11",
      //   y: 334,
      //   ...textNode11,
      // },
      // {
      //   id: "textNodeB11",
      //   y: 664,
      //   ...textNode11,
      // },
      // {
      //   id: "textNodeC11",
      //   y: 994,
      //   ...textNode11,
      // },
      /////////////////////////
      {
        id: "textNodeA12",
        y: 338,
        ...textNode12,
      },
      // {
      //   id: "textNodeB12",
      //   y: 668,
      //   ...textNode12,
      // },
      // {
      //   id: "textNodeC12",
      //   y: 998,
      //   ...textNode12,
      // },
      /////////////////////////
      {
        id: "textNodeA13",
        y: 338,
        ...textNode13,
      },
      // {
      //   id: "textNodeB13",
      //   y: 668,
      //   ...textNode13,
      // },
      // {
      //   id: "textNodeC13",
      //   y: 998,
      //   ...textNode13,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA14",
      //   y: 165,
      //   ...textNode14,
      // },
      // {
      //   id: "textNodeB14",
      //   y: 495,
      //   ...textNode14,
      // },
      // {
      //   id: "textNodeC14",
      //   y: 825,
      //   ...textNode14,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA15",
      //   y: 180,
      //   ...textNode15,
      // },
      // {
      //   id: "textNodeB15",
      //   y: 510,
      //   ...textNode15,
      // },
      // {
      //   id: "textNodeC15",
      //   y: 840,
      //   ...textNode15,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA16",
      //   y: 335,
      //   ...textNode16,
      // },
      // {
      //   id: "textNodeB16",
      //   y: 665,
      //   ...textNode16,
      // },
      // {
      //   id: "textNodeC16",
      //   y: 995,
      //   ...textNode16,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA17",
      //   y: 265,
      //   ...textNode17,
      // },
      // {
      //   id: "textNodeB17",
      //   y: 595,
      //   ...textNode17,
      // },
      // {
      //   id: "textNodeC17",
      //   y: 925,
      //   ...textNode17,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA18",
      //   y: 362,
      //   ...textNode18,
      // },
      // {
      //   id: "textNodeB18",
      //   y: 692,
      //   ...textNode18,
      // },
      // {
      //   id: "textNodeC18",
      //   y: 1022,
      //   ...textNode18,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA19",
      //   y: 298,
      //   ...textNode19,
      // },
      // {
      //   id: "textNodeB19",
      //   y: 628,
      //   ...textNode19,
      // },
      // {
      //   id: "textNodeC19",
      //   y: 958,
      //   ...textNode19,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA20",
      //   y: 256,
      //   ...textNode20,
      // },
      // {
      //   id: "textNodeB20",
      //   y: 586,
      //   ...textNode20,
      // },
      // {
      //   id: "textNodeC20",
      //   y: 916,
      //   ...textNode20,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA21",
      //   y: 184,
      //   ...textNode21,
      // },
      // {
      //   id: "textNodeB21",
      //   y: 514,
      //   ...textNode21,
      // },
      // {
      //   id: "textNodeC21",
      //   y: 844,
      //   ...textNode21,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA22",
      //   y: 310,
      //   ...textNode22,
      // },
      // {
      //   id: "textNodeB22",
      //   y: 640,
      //   ...textNode22,
      // },
      // {
      //   id: "textNodeC22",
      //   y: 970,
      //   ...textNode22,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA23",
      //   y: 270,
      //   ...textNode23,
      // },
      // {
      //   id: "textNodeB23",
      //   y: 600,
      //   ...textNode23,
      // },
      // {
      //   id: "textNodeC23",
      //   y: 930,
      //   ...textNode23,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA24",
      //   y: 198,
      //   ...textNode24,
      // },
      // {
      //   id: "textNodeB24",
      //   y: 528,
      //   ...textNode24,
      // },
      // {
      //   id: "textNodeC24",
      //   y: 858,
      //   ...textNode24,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA25",
      //   y: 346,
      //   ...textNode25,
      // },
      // {
      //   id: "textNodeB25",
      //   y: 676,
      //   ...textNode25,
      // },
      // {
      //   id: "textNodeC25",
      //   y: 1006,
      //   ...textNode25,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA26",
      //   y: 276,
      //   ...textNode26,
      // },
      // {
      //   id: "textNodeB26",
      //   y: 606,
      //   ...textNode26,
      // },
      // {
      //   id: "textNodeC26",
      //   y: 936,
      //   ...textNode26,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA27",
      //   y: 376,
      //   ...textNode27,
      // },
      // {
      //   id: "textNodeB27",
      //   y: 706,
      //   ...textNode27,
      // },
      // {
      //   id: "textNodeC27",
      //   y: 1036,
      //   ...textNode27,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA28",
      //   y: 152,
      //   ...textNode28,
      // },
      // {
      //   id: "textNodeB28",
      //   y: 482,
      //   ...textNode28,
      // },
      // {
      //   id: "textNodeC28",
      //   y: 812,
      //   ...textNode28,
      // },
      /////////////////////////
      // {
      //   id: "textNodeA29",
      //   y: 165,
      //   ...textNode29,
      // },
      // {
      //   id: "textNodeB29",
      //   y: 495,
      //   ...textNode20,
      // },
      // {
      //   id: "textNodeC29",
      //   y: 825,
      //   ...textNode20,
      // },
      /////////////////////////
      // textNode30,
      // textNode31,
      // textNode32,
      // textNode33,
      // textNode34,
      // textNode35,
      // textNode36,
      // textNode37,
      // textNode38,
      // textNode39,
      // textNode40,
      /////////////////////////
      // {
      //   id: "dataNodeA1",
      //   y: 254,
      //   ...dataNode1,
      // },
      // {
      //   id: "dataNodeB1",
      //   y: 584,
      //   ...dataNode1,
      // },
      // {
      //   id: "dataNodeC1",
      //   y: 914,
      //   ...dataNode1,
      // },
      /////////////////////////
      // {
      //   id: "dataNodeA2",
      //   y: 354,
      //   ...dataNode2,
      // },
      // {
      //   id: "dataNodeB2",
      //   y: 684,
      //   ...dataNode2,
      // },
      // {
      //   id: "dataNodeC2",
      //   y: 1014,
      //   ...dataNode2,
      // },
      /////////////////////////
      // {
      //   id: "dataNodeA3",
      //   y: 354,
      //   ...dataNode3,
      // },
      // {
      //   id: "dataNodeB3",
      //   y: 684,
      //   ...dataNode3,
      // },
      // {
      //   id: "dataNodeC3",
      //   y: 1014,
      //   ...dataNode3,
      // },
      /////////////////////////
      // {
      //   id: "dataNodeA4",
      //   y: 296,
      //   ...dataNode4,
      // },
      // {
      //   id: "dataNodeB4",
      //   y: 626,
      //   ...dataNode4,
      // },
      // {
      //   id: "dataNodeC4",
      //   y: 956,
      //   ...dataNode4,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA1",
      //   y: 292,
      //   ...signNode1,
      // },
      // {
      //   id: "signNodeB1",
      //   y: 622,
      //   ...signNode1,
      // },
      // {
      //   id: "signNodeC1",
      //   y: 952,
      //   ...signNode1,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA2",
      //   y: 348,
      //   ...signNode2,
      // },
      // {
      //   id: "signNodeB2",
      //   y: 678,
      //   ...signNode2,
      // },
      // {
      //   id: "signNodeC2",
      //   y: 1008,
      //   ...signNode2,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA3",
      //   y: 290,
      //   ...signNode3,
      // },
      // {
      //   id: "signNodeB3",
      //   y: 620,
      //   ...signNode3,
      // },
      // {
      //   id: "signNodeC3",
      //   y: 950,
      //   ...signNode3,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA4",
      //   y: 150,
      //   ...signNode4,
      // },
      // {
      //   id: "signNodeB4",
      //   y: 480,
      //   ...signNode4,
      // },
      // {
      //   id: "signNodeC4",
      //   y: 810,
      //   ...signNode4,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA5",
      //   y: 264,
      //   ...signNode5,
      // },
      // {
      //   id: "signNodeB5",
      //   y: 594,
      //   ...signNode5,
      // },
      // {
      //   id: "signNodeC5",
      //   y: 924,
      //   ...signNode5,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA6",
      //   y: 216,
      //   ...signNode6,
      // },
      // {
      //   id: "signNodeB6",
      //   y: 546,
      //   ...signNode6,
      // },
      // {
      //   id: "signNodeC6",
      //   y: 876,
      //   ...signNode6,
      // },
      /////////////////////////
      // {
      //   id: "signNodeA7",
      //   y: 140,
      //   ...signNode7,
      // },
      // {
      //   id: "signNodeB7",
      //   y: 470,
      //   ...signNode7,
      // },
      // {
      //   id: "signNodeC7",
      //   y: 800,
      //   ...signNode7,
      // },
      /////////////////////////
      // bottomNode,
      // bottomNode1,
      // bottomNode2,
      // bottomNode3,
      // bottomNode4,
      // bottomNode5,
      // bottomNode6,
      // bottomNode7,
      // bottomNode8,
      // bottomNode9,
      // bottomNode10,
      // bottomNode11,
      // bottomNode12,
      // bottomNode13,
      anglevalveNode1,
      anglevalveNode2,
    ],
    edges: [
      // //黑头黄身箭头组
      // {
      //   id: "yHbBEdge1",
      //   source: "shadowRectNode8",
      //   target: [1563, 177],
      //   ...yHbBEdge,
      // },
      // {
      //   id: "yHbBEdge2",
      //   source: "shadowRectNode9",
      //   target: [1563, 249],
      //   vertices: [{ x: 1794, y: 249 }],
      //   ...yHbBEdge,
      // },
      // {
      //   id: "yHbBEdge3",
      //   source: "shadowRectNode9",
      //   target: [1713, 291],
      //   vertices: [{ x: 1794, y: 291 }],
      //   ...yHbBEdge,
      // },
      //双向黑色箭头组
      {
        id: "allBlackEdge1",
        source: [1311, 326.5],
        target: [1311, 273],
        ...allBlackEdge,
      },
      //双向绿色箭头组
      {
        id: "allGreenEdge1",
        source: [1311, 326.5],
        target: [1473, 326.5],
        ...allGreenEdge,
      },
      //绿色实线箭头组
      {
        id: "greenEdge1",
        source: "shadowRectNodeA1",
        target: [255, 150],
        ...greenEdge,
      },
      {
        id: "greenEdge3",
        source: "transparentNodeA22",
        target: [1311, 326.5],
        ...greenEdge,
      },
      {
        id: "greenEdge4",
        source: "metalNodeA4",
        target: [1473, 326.5],
        ...greenEdge,
      },
      //黑色实线箭头组
      {
        id: "blackFillEdge1",
        source: "metalNodeA3",
        target: [1311, 273],
        ...blackFillEdge,
      },
      //双向箭头(一绿一黑组)
      {
        id: "bidireGreenEdge1",
        source: "metalNodeA1",
        target: [255, 150],
        vertices: [{ x: 350, y: 150 }],
        ...bidireGreenEdge,
      },
      // //小黄色实线箭头组
      // {
      //   id: "yellowStrokeEdge1",
      //   source: "shadowRectNode2",
      //   target: [363, 240],
      //   ...yellowStrokeEdge,
      // },
      //双向箭头(一黄一镂空)组
      // {
      //   id: "bidirectionalEdge1",
      //   source: [363, 240],
      //   target: [416, 240],
      //   ...bidirectionalEdge,
      // },
      // // 双向箭头(一黄一黑)组
      // {
      //   id: "YABEdge1",
      //   source: [1563, 177],
      //   target: [1317, 177],
      //   ...YABEdge,
      // },
      // {
      //   id: "YABEdge2",
      //   source: [1563, 249],
      //   target: [1317, 249],
      //   ...YABEdge,
      // },
      // {
      //   id: "YABEdge3",
      //   source: [1713, 291],
      //   target: "metalNodeA4",
      //   ...YABEdge,
      // },
      // //无箭头虚线组
      // {
      //   id: "naDashEdge1",
      //   source: "transparentNodeA5",
      //   target: {
      //     cell: "greenCircleNodeA1",
      //     anchor: {
      //       name: "bottom",
      //     },
      //   },
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge3",
      //   source: [315, 240],
      //   target: [465, 129],
      //   vertices: [{ x: 315, y: 129 }],
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge4",
      //   source: {
      //     cell: "transparentNodeA13",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: -10,
      //       },
      //     },
      //   },
      //   target: "shadowRectNode6",
      //   vertices: [{ x: 684, y: 249 }],
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge5",
      //   source: {
      //     cell: "transparentNodeA13",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: 10,
      //       },
      //     },
      //   },
      //   target: "transparentNodeA15",
      //   vertices: [{ x: 711, y: 232 }],
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge6",
      //   source: "transparentNodeA14",
      //   target: "shadowRectNode5",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge7",
      //   source: "transparentNodeA21",
      //   target: [903, 326.5],
      //   router: "er",
      //   ...naDashEdge,
      // },
      {
        id: "naDashEdge8",
        source: [861, 280],
        target: "emptyNodeA1",
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge9",
        source: [957, 280],
        target: "emptyNodeA2",
        router: "er",
        ...naDashEdge,
      },
      // {
      //   id: "naDashEdge10",
      //   source: {
      //     cell: "transparentNodeA22",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: -10,
      //       },
      //     },
      //   },
      //   target: "transparentNodeA18",
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge11",
      //   source: {
      //     cell: "transparentNodeA22",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: 3,
      //       },
      //     },
      //   },
      //   target: "transparentNodeA19",
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge12",
      //   source: {
      //     cell: "transparentNodeA22",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: 10,
      //       },
      //     },
      //   },
      //   target: "transparentNodeA20",
      //   router: "manhattan",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge13",
      //   source: {
      //     cell: "transparentNodeA26",
      //     anchor: {
      //       name: "top",
      //     },
      //   },
      //   target: [1677, 178],
      //   router: "er",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge14",
      //   source: {
      //     cell: "transparentNodeA27",
      //     anchor: {
      //       name: "top",
      //     },
      //   },
      //   target: [1435, 178],
      //   router: "er",
      //   ...naDashEdge,
      // },
      // {
      //   id: "naDashEdge15",
      //   source: {
      //     cell: "transparentNodeA3",
      //     anchor: {
      //       name: "bottom",
      //     },
      //   },
      //   target: [427.5, 327],
      //   router: "oneSide",
      //   ...naDashEdge,
      // },
      // //小箭头虚线组
      // {
      //   id: "smallDashEdge1",
      //   source: [465, 172],
      //   target: "greenCircleNodeA1",
      //   ...smallDashEdge,
      // },
      // {
      //   id: "smallDashEdge3",
      //   source: [465, 278],
      //   target: {
      //     cell: "greenCircleNodeA3",
      //     anchor: {
      //       name: "right",
      //       args: {
      //         dx: -17,
      //       },
      //     },
      //   },
      //   router: "manhattan",
      //   ...smallDashEdge,
      // },
      // {
      //   id: "smallDashEdge4",
      //   source: "transparentNodeA13",
      //   target: {
      //     cell: "transparentNodeA14",
      //     anchor: {
      //       name: "bottom",
      //       args: {
      //         dx: -34.5,
      //       },
      //     },
      //   },
      //   ...smallDashEdge,
      // },
      // {
      //   id: "smallDashEdge5",
      //   source: {
      //     cell: "transparentNodeA24",
      //     anchor: {
      //       name: "right",
      //       args: {
      //         dx: -39,
      //       },
      //     },
      //   },
      //   target: {
      //     cell: "greenNodeA3",
      //   },
      //   router: "manhattan",
      //   ...smallDashEdge,
      // },
      // {
      //   id: "smallDashEdge6",
      //   source: {
      //     cell: "textNode6",
      //     anchor: {
      //       name: "right",
      //     },
      //   },
      //   target: {
      //     cell: "transparentNodeA24",
      //     anchor: {
      //       name: "top",
      //       args: {
      //         dx: -30,
      //       },
      //     },
      //   },
      //   ...smallDashEdge,
      // },
      // {
      //   id: "smallDashEdge7",
      //   source: {
      //     cell: "transparentNodeA17",
      //     anchor: {
      //       name: "top",
      //     },
      //   },
      //   target: {
      //     cell: "transparentNodeA24",
      //     anchor: {
      //       name: "left",
      //       args: {
      //         dy: 16,
      //       },
      //     },
      //   },
      //   // router: "manhattan",
      //   ...smallDashEdge,
      // },
      //黑色镂空实线箭头组
      {
        id: "blackEdge1",
        source: "transparentNodeA13",
        target: [427.5, 327],
        ...blackEdge,
      },
      {
        id: "blackEdge2",
        source: "metalNodeA1",
        target: [427.5, 327],
        ...blackEdge,
      },
      //小黑箭头实线组
      // {
      //   id: "smallBlackEdge1",
      //   source: "shadowRectNode5",
      //   target: "transparentNodeA7",
      //   router: "er",
      //   ...smallBlackEdge,
      // },
      // {
      //   id: "smallBlackEdge2",
      //   source: "shadowRectNode6",
      //   target: "transparentNodeA8",
      //   router: "er",
      //   ...smallBlackEdge,
      // },
      {
        id: "smallBlackEdge3",
        source: "metalNodeA3",
        target: "shadowRectNodeA7",
        ...smallBlackEdge,
      },
      {
        id: "smallBlackEdge4",
        source: "metalNodeA4",
        target: "shadowRectNodeA10",
        ...smallBlackEdge,
      },
      //无箭头实线组
      {
        id: "naEdge1",
        source: "emptyNodeA1",
        target: "transparentNodeA13",
        router: "er",
        ...naEdge,
      },
      {
        id: "naEdge2",
        source: "emptyNodeA1",
        target: "emptyNodeA2",
        router: "er",
        ...naEdge,
      },
      {
        id: "naEdge3",
        source: "emptyNodeA2",
        target: "transparentNodeA22",
        router: "er",
        ...naEdge,
      },
    ],
  };
  (graph as Graph).fromJSON(data as any);
  graph.zoomTo(0.72);
  handleResize(graph, document.documentElement as HTMLElement); //画布居中
  window.addEventListener("resize", () => {
    handleResize(graph, document.documentElement as HTMLElement);
  });
});
</script>

<template>
  <div id="container"></div>
</template>

<style lang="less">
#container {
  position: absolute;
  left: 0;
  top: 0;
}
.shadowRectNode {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border: 3px solid #646464;
  border-top-color: #f2f2f2;
  border-left-color: #f2f2f2;
  background-color: #d4d0c8;
}

// .shadowRectNode {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 15px;
//   background: repeating-linear-gradient(45deg,#fff 0px 2px,transparent 2px 4px);
// }



.shadowRectNode1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border: 3px solid #646464;
  border-top-color: #f2f2f2;
  border-left-color: #f2f2f2;
  background-color: #d4d0c8;
}
.metalNode {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  background: linear-gradient(to right, #969696, #f2f2f2, #969696);
}
.metalNode span {
  transform: rotate(270deg);
  -ms-transform: rotate(270deg); /* IE 9 */
  -moz-transform: rotate(270deg); /* Firefox */
  -webkit-transform: rotate(270deg); /* Safari or Chrome */
  -o-transform: rotate(270deg); /* Opera */
}
.outmetalNode1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
.outmetalNodeWarn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  background: repeating-linear-gradient(45deg,red 0px 1px,transparent 1px 2px);
}
.metalNode2 {
  width: 78px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  background: linear-gradient(#969696, #f2f2f2, #969696);
}
.textNode1 {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
.greencircle {
  width: 100%;
  height: 100%;
}
.greencircle > :nth-child(1) {
  width: 100%;
  height: 50%;
  border-radius: 11px 11px 0 0;
  background-color: #00f800;
  border: 2px solid black;
}
.greencircle > :nth-child(2) {
  height: 14px;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.graycircle {
  width: 100%;
  height: 100%;
}
.graycircle > :nth-child(1) {
  width: 100%;
  height: 50%;
  border-radius: 11px 11px 0 0;
  background-color: #696969;
  border: 2px solid black;
}
.graycircle > :nth-child(2) {
  height: 14px;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.greencircle2 {
  width: 100%;
  height: 100%;
  display: flex;
}
.greencircle2 > :nth-child(1) {
  width: 50%;
  height: 100%;
  border-radius: 11px 0 0 11px;
  background-color: #00f800;
  border: 2px solid black;
}
.greencircle2 > :nth-child(2) {
  height: 2px;
  width: 11px;
  margin: auto 0;
  background-color: black;
}

.dataNode {
  font-size: 12px;
  color: #f2f2f2;
}
.dataNode span {
  color: #00f800;
  margin-left: 4px;
}
.dataNode1 {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
.dataNode1 span {
  background-color: #cbccce;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 6px;
  margin-right: 6px;
}
.lineNode {
  width: 100%;
  height: 100%;
  background-color: black;
}
.textNode2 {
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: aliceblue;
}
.transparentNode {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.transparentNode span {
  line-height: 105%;
  display: flex;
  justify-content: space-between;
}
.transparentNode div {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 105%;
}
.transparentNode span > :nth-child(2) {
  color: blue;
}
.transparentNode1 {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.transparentNode1 span {
  display: flex;
  justify-content: space-evenly;
}
.transparentNode1 div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.transparentNode1 span > :nth-child(1) {
  color: blue;
}
.transparentNode2 {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.transparentNode2 span {
  line-height: 105%;
  display: flex;
  justify-content: space-evenly;
}
.transparentNode2 div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.transparentNode2 span > :nth-child(1) {
  color: red;
}
.transparentNode3 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
}
.transparentNode3 > :nth-child(1) {
  color: blue;
}
.transparentNode4 {
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.transparentNode4 span {
  display: flex;
  justify-content: space-between;
}
.transparentNode4 > :nth-child(2) {
  display: flex;
  justify-content: space-evenly;
}
.transparentNode4 > :nth-child(1) > :nth-child(2) {
  color: #efd325;
}
.transparentNode4 > :nth-child(2) > :nth-child(1) {
  color: blue;
}
.transparentNode5 {
  display: flex;
  flex-direction: column;
}
.transparentNode5 div {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textNode3 {
  width: 100%;
  height: 100%;
  border: 2px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.textNode3 span {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}
.textNode3 span div {
  width: 63px;
  text-align: center;
}
.textNode3 span > :nth-child(1) {
  background: #00f800;
  border-right: 2px solid #f2f2f2;
}
// .textNode3 span>:nth-child(2) {
//   background: red;
// }
.textNode4 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.textNode4 > :nth-child(2) {
  color: blue;
}
.textNode5 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.signNode {
  width: 100%;
  height: 100%;
  border: 2px solid #909090;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.signNode span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
  // border: 1px solid red;
  font-size: 12px;
}
.mushroom {
  height: 100%;
  width: 100%;
}
.mushroom > :nth-child(1) {
  height: 50%;
  background-color: #00f800;
  border: 2px solid black;
}
.mushroom > :nth-child(2) {
  height: 50%;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.graymushroom {
  height: 100%;
  width: 100%;
}
.graymushroom > :nth-child(1) {
  height: 50%;
  background-color: #696969;
  border: 2px solid black;
}
.graymushroom > :nth-child(2) {
  height: 50%;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.graymushroom1 {
  height: 100%;
  width: 100%;
  transform: rotate(90deg);
}
.graymushroom1 > :nth-child(1) {
  height: 50%;
  background-color: #696969;
  border: 2px solid black;
}
.graymushroom1 > :nth-child(2) {
  height: 50%;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.mushroom2 {
  height: 100%;
  width: 100%;
}
.mushroom2 > :nth-child(1) {
  height: 50%;
  width: 2px;
  margin: 0 auto;
  background-color: black;
}
.mushroom2 > :nth-child(2) {
  height: 50%;
  background-color: #00f800;
  border: 2px solid black;
}
.bottomNode {
  width: 100%;
  height: 100%;
  background-color: #d4d0c8;
  border: 3px solid #646464;
  border-top-color: #f2f2f2;
  border-left-color: #f2f2f2;
}
.bottomNode .superstratum {
  width: 99.9%;
  height: 45px;
  margin-top: 2px;
  margin-left: 0.1%;
  border-top: 2px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  border-bottom: 0px;
  display: flex;
  flex-direction: column;
}
.superstratum > :nth-child(1) {
  width: 100%;
  height: 50%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
}
.superstratum > :nth-child(1) div {
  margin: 0 6px;
}
.superstratum > :nth-child(2) {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.superstratum > :nth-child(2) > :nth-child(1) {
  font-weight: bold;
  margin-left: 6px;
  margin-right: 102px;
}
.superstratum > :nth-child(2) > :nth-child(2) {
  width: 230px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
}
.superstratum > :nth-child(2) > :nth-child(3) {
  width: 230px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
}
.superstratum > :nth-child(2) > :nth-child(4) {
  width: 188px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
  background-color: red;
  margin-left: 45px;
  font-weight: bold;
}
.superstratum > :nth-child(2) > :nth-child(5) {
  width: 188px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
  background-color: #00ffff;
  font-weight: bold;
}
.superstratum > :nth-child(2) > :nth-child(6) {
  width: 188px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
  background-color: #00ff00;
  font-weight: bold;
}
.superstratum > :nth-child(2) > :nth-child(7) {
  width: 188px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
}
.superstratum > :nth-child(2) > :nth-child(8) {
  width: 228px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
  margin-left: 44px;
}
.superstratum > :nth-child(2) > :nth-child(9) {
  width: 188px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
}
.superstratum > :nth-child(2) > :nth-child(10) {
  width: 185px;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #646464;
  border-bottom-color: #f2f2f2;
  border-right-color: #f2f2f2;
}
.bottomNode1 {
  width: 100%;
  height: 100%;
  background-color: #b4b4b4;
  border: 2px solid #646464;
  border-top-color: #f2f2f2;
  border-left-color: #f2f2f2;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
}
.bottomNode2 {
  width: 100%;
  height: 100%;
  background-color: #d4d0c8;
  border: 2px solid #646464;
  border-top-color: #f2f2f2;
  border-left-color: #f2f2f2;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
}
.emptyNode {
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;
}
.emptyNode div {
  width: 24px;
  height: 100%;
  border: 1px solid black;
}
.emptyNodeWarn {
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(45deg,red 0px 1px,transparent 1px 2px);
}
.emptyNodeWarn div {
  width: 24px;
  height: 100%;
  border: 1px solid black;
  background-color: #c0c0c0;
}
.anglevalveNode {
  width: 100%;
  height: 100%;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
</style>
