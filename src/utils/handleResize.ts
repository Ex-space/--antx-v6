import { Graph } from "@antv/x6";

export const handleResize = (graph: Graph, container: HTMLElement) => {
  if (!graph) return;
  let height = container!.offsetHeight;
  let width = container!.offsetWidth;
  if (!width || !height) return;
  graph.resize(width, height); // 接受两个参数（改变的宽度，高度）
  graph.centerContent();//每次调用函数让图中心居中
};
