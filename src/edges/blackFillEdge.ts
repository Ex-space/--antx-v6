export const blackFillEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeWidth: 3,
      targetMarker: {
        tagName: "path",
        fill: "#696969", // 使用自定义填充色
        stroke: "#515151", // 使用自定义边框色
        strokeWidth: 2,
        d: "M 12 -7 0 0 12 7 Z",
      },
    },
  },
};
