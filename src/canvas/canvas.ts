export const getCanvasOPT = (container: HTMLElement) => {
  return {
    container: container, // 画布容器
    width: container.offsetWidth, // 画布宽
    height: container.offsetHeight, // 画布高
    background: {
      color: "#c0c0c0",
    },
    snapline: true, // 对齐线
    autoResize: true,
    panning: true,
    mousewheel: true,
    connecting: {
      router: "orth",
      //设置线只能垂直或者水平
      snap: true, // 自动吸附
      allowBlank: false, //是否允许连接到画布空白位置的点
      allowMulti: false, //是否允许在相同的起始节点和终止之间创建多条边
      allowLoop: false, //是否允许创建循环连线，即边的起始节点和终止节点为同一节点
      highlight: true, //拖动边时，是否高亮显示所有可用的节点
      panning: {
        enabled: true,
      },
      mousewheel: {
        enabled: true, // 支持滚动放大缩小
      },
    },
  };
};
