export const metalNode1 = {
  x: 420,
  width: 15,
  height: 78,
  shape: 'html',
  html: `
            <div class="metalNode">
              <span>X1701A</span>
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
export const metalNode3 = {
  x: 1578,
  width: 94,
  height: 15,
  shape: 'html',
  html: `
            <div class="outmetalNodeWarn">
              <div class="metalNode2">
                <span>X1711A</span>
              </div>
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
export const metalNode4 = {
  x: 1578,
  width: 94,
  height: 15,
  shape: 'html',
  html: `
            <div class="outmetalNode1">
              <div class="metalNode2">
                <span>X1733A</span>
              </div>
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

