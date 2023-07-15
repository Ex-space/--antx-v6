import { Markup } from "@antv/x6";
import { reactive, ref } from "vue";
export const emptyNode1 = {
  x: 838,
  width: 46,
  height: 30,
  shape: 'html',
  html: `
          <div class="emptyNodeSafe">
            <div></div>
          </div>
          `,
  attrs: {
    // 一定要给边框宽度加上>0的值,否则节点将不能连线
    body: {
      stroke: 'transparent',
      strokeWidth: 1, // 边框的粗细
      magnet: true, // 节点是否可以连线
    }
  },
};
export const emptyNode2 = {
  x: 934,
  width: 46,
  height: 30,
  shape: 'html',
  html: `
          <div class="emptyNodeWarnFB">
            <div></div>
            <div></div>
            <div></div>
          </div>
          `,
  attrs: {
    // 一定要给边框宽度加上>0的值,否则节点将不能连线
    body: {
      stroke: 'transparent',
      strokeWidth: 1, // 边框的粗细
      magnet: true, // 节点是否可以连线
    }
  },
};