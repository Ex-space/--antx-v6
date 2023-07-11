//无箭头绿色虚线
export const safeEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#00f800",
      strokeDasharray: 3,
      targetMarker: {
        tagName: "path",
        fill: "#00f800", // 使用自定义填充色
        d: "M 2 0 -3 0 Z",
      },
    },
  },
};
