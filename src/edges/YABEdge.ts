//双向一头黑一头黄箭头
export const YABEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#b8a129",
      sourceMarker: {
        tagName: "path",
        fill: "#696969", // 使用自定义填充色
        stroke: "#515151", // 使用自定义边框色
        strokeWidth: 2,
        d: "M 12 -7 0 0 12 7 Z",
      },
      targetMarker: {
        tagName: "path",
        fill: "#fed602", // 使用自定义填充色
        stroke: "#fed602", // 使用自定义边框色
        strokeWidth: 2,
        d: "M 7 -3 0 0 7 3 Z",
      },
    },
  },
};
