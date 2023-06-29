//无箭头实线
export const naEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeWidth: 3,
      targetMarker: {
        tagName: "path",
        fill: "#515151",
        strokeWidth:3, // 使用自定义填充色
        d:'M 2 0 -3 0 Z'
      },
    },
  },
};
