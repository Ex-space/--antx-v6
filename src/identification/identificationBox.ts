import { Graph, Cell } from '@antv/x6';
// 标识框
const Box = {
    shape: "edge",
    attrs: {
      line: {
        stroke: "red",
        targetMarker: {
          tagName: "path",
          fill: "red", // 使用自定义填充色
        },
      },
    },
  };
export class IdentificationProcessor {
  private graph: Graph;
  private centerCell:Cell;
  private selectedCell: Cell;
  private top_sign:any;
  private bottom_sign:any;
  private left_sign:any;
  private right_sign:any;
  constructor(graph: Graph, centerCell: Cell, selectedCell: Cell) {
    this.graph = graph;
    this.centerCell = centerCell;
    this.selectedCell = selectedCell;
  }
  public addIdentification(): void {
    if (this.selectedCell) {
      this.graph.positionCell(this.centerCell, 'center');
      const position = this.selectedCell.getProp<{ x: number; y: number }>('position');
      console.log('position', position);
      const size = this.selectedCell.getProp<{ width: number; height: number }>('size');
      console.log('size', size);
      const delta = 60;
      this.graph.zoomTo(0.8);
      this.top_sign = this.graph.addEdge({
        id: "top-sign",
        source: [position.x-delta-1, position.y-delta],
        router: "er",
        target: [position.x+size.width+delta+3, position.y-delta],
        ...Box,
      })
      this.bottom_sign = this.graph.addEdge({
        id: "bottom-sign",
        source: [position.x-delta-1, position.y+size.height+delta],
        router: "er",
        target: [position.x+size.width+delta+3, position.y+size.height+delta],
        ...Box,
      })
      this.left_sign = this.graph.addEdge({
        id: "left-sign",
        source: [position.x-delta, position.y-delta],
        router: "er",
        target: [position.x-delta, position.y+size.height+delta+3],
        ...Box,
      })
      this.right_sign = this.graph.addEdge({
        id: "right-sign",
        source: [position.x+size.width+delta, position.y-delta],
        router: "er",
        target: [position.x+size.width+delta, position.y+size.height+delta+3],
        ...Box,
      })
      console.log('标识框已经生成');
      
    }
  }
  public removeIdentification() :void {
    this.graph.removeCell(this.top_sign)
    this.graph.removeCell(this.bottom_sign)
    this.graph.removeCell(this.left_sign)
    this.graph.removeCell(this.right_sign)
    console.log('标识框已经销毁');
  }
}
