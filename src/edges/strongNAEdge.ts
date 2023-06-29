//粗体实线
export const strongNAEdge = {
  shape: "edge",
  attrs: {
    line: {
      stroke: "#515151",
      strokeWidth: 3,
      targetMarker: {
        tagName: "path",
        fill: "#515151", // 使用自定义填充色
        d: "M0 0",
      },
    },
  },
};
