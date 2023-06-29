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
onMounted(() => {
  //定义画布
  const container = document.getElementById("container");
  const graph = new Graph(getCanvasOPT(container!));
  //定义渲染数据
  const data = {
    nodes: [
      shadowRectNode1,
      shadowRectNode2,
      shadowRectNode5,
      shadowRectNode6,
      shadowRectNode7,
      shadowRectNode8,
      shadowRectNode9,
      shadowRectNode10,
      metalNode1,
      metalNode3,
      metalNode4,
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
      greenCircleNode1,
      greenCircleNode3,
      emptyNode1,
      emptyNode2,
      littleBlackNode1,
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
      dataNode1,
      dataNode2,
      dataNode3,
      dataNode4,
      signNode1,
      signNode2,
      signNode3,
      signNode4,
      signNode5,
      signNode6,
      signNode7,
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
    ],
    edges: [
      //黑头黄身箭头组
      {
        id: "yHbBEdge1",
        source: "shadowRectNode8",
        target: [1563, 177],
        ...yHbBEdge,
      },
      {
        id: "yHbBEdge2",
        source: "shadowRectNode9",
        target: [1563, 249],
        vertices: [{ x: 1794, y: 249 }],
        ...yHbBEdge,
      },
      {
        id: "yHbBEdge3",
        source: "shadowRectNode9",
        target: [1713, 291],
        vertices: [{ x: 1794, y: 291 }],
        ...yHbBEdge,
      },
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
        source: "shadowRectNode1",
        target: [255, 150],
        ...greenEdge,
      },
      {
        id: "greenEdge3",
        source: "transparentNode22",
        target: [1311, 326.5],
        ...greenEdge,
      },
      {
        id: "greenEdge4",
        source: "metalNode4",
        target: [1473, 326.5],
        ...greenEdge,
      },
      //黑色实线箭头组
      {
        id: "blackFillEdge1",
        source: "metalNode3",
        target: [1311, 273],
        ...blackFillEdge,
      },
      //双向箭头(一绿一黑组)
      {
        id: "bidireGreenEdge1",
        source: "metalNode1",
        target: [255, 150],
        vertices: [{ x: 350, y: 150 }],
        ...bidireGreenEdge,
      },
      //小黄色实线箭头组
      {
        id: "yellowStrokeEdge1",
        source: "shadowRectNode2",
        target: [363, 240],
        ...yellowStrokeEdge,
      },
      //双向箭头(一黄一镂空)组
      {
        id: "bidirectionalEdge1",
        source: [363, 240],
        target: [416, 240],
        ...bidirectionalEdge,
      },
      //双向箭头(一黄一黑)组
      {
        id: "YABEdge1",
        source: [1563, 177],
        target: [1317, 177],
        ...YABEdge,
      },
      {
        id: "YABEdge2",
        source: [1563, 249],
        target: [1317, 249],
        ...YABEdge,
      },
      {
        id: "YABEdge3",
        source: [1713, 291],
        target: "metalNode4",
        ...YABEdge,
      },
      //无箭头虚线组
      {
        id: "naDashEdge1",
        source: "transparentNode5",
        target: {
          cell: "greenCircleNode1",
          anchor: {
            name: "bottom",
          },
        },
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge3",
        source: [315, 240],
        target: [465, 129],
        vertices: [{ x: 315, y: 129 }],
        ...naDashEdge,
      },
      {
        id: "naDashEdge4",
        source: {
          cell: "transparentNode13",
          anchor: {
            name: "top",
            args: {
              dx: -10,
            },
          },
        },
        target: "shadowRectNode6",
        vertices: [{ x: 684, y: 249 }],
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge5",
        source: {
          cell: "transparentNode13",
          anchor: {
            name: "top",
            args: {
              dx: 10,
            },
          },
        },
        target: "transparentNode15",
        vertices: [{ x: 711, y: 232 }],
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge6",
        source: "transparentNode14",
        target: "shadowRectNode5",
        ...naDashEdge,
      },
      {
        id: "naDashEdge7",
        source: "transparentNode21",
        target: [903, 326.5],
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge8",
        source: "transparentNode16",
        target: "emptyNode1",
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge9",
        source: "transparentNode17",
        target: "emptyNode2",
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge10",
        source: {
          cell: "transparentNode22",
          anchor: {
            name: "top",
            args: {
              dx: -10,
            },
          },
        },
        target: "transparentNode18",
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge11",
        source: {
          cell: "transparentNode22",
          anchor: {
            name: "top",
            args: {
              dx: 3,
            },
          },
        },
        target: "transparentNode19",
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge12",
        source: {
          cell: "transparentNode22",
          anchor: {
            name: "top",
            args: {
              dx: 10,
            },
          },
        },
        target: "transparentNode20",
        router: "manhattan",
        ...naDashEdge,
      },
      {
        id: "naDashEdge13",
        source: {
          cell: "transparentNode26",
          anchor: {
            name: "top",
          },
        },
        target: [1677, 178],
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge14",
        source: {
          cell: "transparentNode27",
          anchor: {
            name: "top",
          },
        },
        target: [1435, 178],
        router: "er",
        ...naDashEdge,
      },
      {
        id: "naDashEdge15",
        source: {
          cell: "transparentNode3",
          anchor: {
            name: "bottom",
          },
        },
        target: [427.5, 327],
        router: "oneSide",
        ...naDashEdge,
      },
      //小箭头虚线组
      {
        id: "smallDashEdge1",
        source: [465, 172],
        target: "greenCircleNode1",
        ...smallDashEdge,
      },
      {
        id: "smallDashEdge3",
        source: [465, 278],
        target: {
          cell: "greenCircleNode3",
          anchor: {
            name: "right",
            args: {
              dx: -17,
            },
          },
        },
        router: "manhattan",
        ...smallDashEdge,
      },
      {
        id: "smallDashEdge4",
        source: "transparentNode13",
        target: {
          cell: "transparentNode14",
          anchor: {
            name: "bottom",
            args: {
              dx: -34.5,
            },
          },
        },
        ...smallDashEdge,
      },
      {
        id: "smallDashEdge5",
        source: {
          cell: "transparentNode24",
          anchor: {
            name: "right",
            args: {
              dx: -39,
            },
          },
        },
        target: {
          cell: "greenNode3",
        },
        router: "manhattan",
        ...smallDashEdge,
      },
      {
        id: "smallDashEdge6",
        source: {
          cell: "textNode6",
          anchor: {
            name: "right",
          },
        },
        target: {
          cell: "transparentNode24",
          anchor: {
            name: "top",
            args: {
              dx: -30,
            },
          },
        },
        ...smallDashEdge,
      },
      {
        id: "smallDashEdge7",
        source: {
          cell: "transparentNode17",
          anchor: {
            name: "top",
          },
        },
        target: {
          cell: "transparentNode24",
          anchor: {
            name: "left",
            args: {
              dy: 16,
            },
          },
        },
        // router: "manhattan",
        ...smallDashEdge,
      },
      //黑色镂空实线箭头组
      {
        id: "blackEdge1",
        source: "transparentNode13",
        target: [427.5, 327],
        ...blackEdge,
      },
      {
        id: "blackEdge2",
        source: "metalNode1",
        target: [427.5, 327],
        ...blackEdge,
      },
      //小黑箭头实线组
      {
        id: "smallBlackEdge1",
        source: "shadowRectNode5",
        target: "transparentNode7",
        router: "er",
        ...smallBlackEdge,
      },
      {
        id: "smallBlackEdge2",
        source: "shadowRectNode6",
        target: "transparentNode8",
        router: "er",
        ...smallBlackEdge,
      },
      {
        id: "smallBlackEdge3",
        source: "metalNode3",
        target: "shadowRectNode7",
        ...smallBlackEdge,
      },
      {
        id: "smallBlackEdge4",
        source: "metalNode4",
        target: "shadowRectNode10",
        ...smallBlackEdge,
      },
      //无箭头实线组
      {
        id: "naEdge1",
        source: "emptyNode1",
        target: "transparentNode13",
        router: "er",
        ...naEdge,
      },
      {
        id: "naEdge2",
        source: "emptyNode1",
        target: "emptyNode2",
        router: "er",
        ...naEdge,
      },
      {
        id: "naEdge3",
        source: "emptyNode2",
        target: "transparentNode22",
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
.metalNode2 {
  width: 100%;
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
</style>
