export const greenCircleNode1 = {
  id: "greenCircleNode1",
  x: 352,
  y: 214,
  width: 22,
  height: 22,
  shape: 'html',
  html: `
            <div class="greencircle">
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
export const greenCircleNode3 = {
  id: "greenCircleNode3",
  x: 405,
  y: 315,
  width: 22,
  height: 22,
  shape: 'html',
  html: `
            <div class="greencircle2">
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
