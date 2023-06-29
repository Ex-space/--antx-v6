export const smallDashEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeDasharray: 3,
      targetMarker: {
        tagName: "path",
        fill: "#515151", // 使用自定义填充色
        d: "M 8 -4 0 0 8 4 Z",
      },
    },
  },
};
