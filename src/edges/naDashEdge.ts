//无箭头虚线
export const naDashEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeDasharray: 3,
      targetMarker: {
        tagName: "path",
        fill: "#515151", // 使用自定义填充色
        d: "M 2 0 -3 0 Z",
      },
    },
  },
};
