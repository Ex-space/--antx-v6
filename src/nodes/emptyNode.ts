export const emptyNode1 = {
  x: 843,
  width: 36,
  height: 21,
  shape: 'html',
  html: `
          <div class="emptyNode">
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
  x: 939,
  width: 36,
  height: 21,
  shape: 'html',
  html: `
          <div class="emptyNodeWarn">
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