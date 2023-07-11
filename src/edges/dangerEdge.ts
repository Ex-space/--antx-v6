//无箭头红色虚线
export const dangerEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "red",
      strokeDasharray: 3,
      targetMarker: {
        tagName: "path",
        fill: "red", // 使用自定义填充色
        d: "M 2 0 -3 0 Z",
      },
    },
  },
};
