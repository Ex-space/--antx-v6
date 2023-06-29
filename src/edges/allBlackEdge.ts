//双向都黑色的箭头
export const allBlackEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeWidth: 3,
      sourceMarker: {
        tagName: "path",
        fill: "#696969", // 使用自定义填充色
        stroke: "#515151", // 使用自定义边框色
        strokeWidth: 2,
        d: "M 12 -7 0 0 12 7 Z",
      },
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
