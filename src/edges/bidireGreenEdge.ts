//双向箭头
export const bidireGreenEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#656565",
      strokeWidth: 3,
      sourceMarker: {
        tagName: "path",
        fill: "#333", // 使用自定义填充色
        stroke: "#333",
        strokeWidth: 2,
        d: "M 7 -3 0 0 7 3 Z",
      },
      targetMarker: {
        tagName: "path",
        fill: "#00f800", // 使用自定义填充色
        stroke: "#515151", // 使用自定义边框色
        strokeWidth: 2,
        d: "M 12 -7 0 0 12 7 Z",
      },
    },
  },
};
