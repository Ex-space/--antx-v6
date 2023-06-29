export const greenNode1 = {
  id: "greenNode1",
  x: 244,
  y: 128,
  width: 22,
  height: 21,
  shape: 'html',
  html: `
          <div class="mushroom">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode3 = {
  id: "greenNode3",
  x: 1552,
  y: 153 ,
  width: 22,
  height: 22,
  shape: 'html',
  html: `
            <div class="graycircle">
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
export const greenNode4 = {
  id: "greenNode4",
  x: 1552.5,
  y: 227,
  width: 21,
  height: 21,
  shape: 'html',
  html: `
          <div class="graymushroom">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode5 = {
  id: "greenNode5 ",
  x: 1702.5,
  y: 270,
  width: 21,
  height: 21,
  shape: 'html',
  html: `
          <div class="graymushroom">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode6 = {
  id: "greenNode6",
  x: 1461,
  y: 304,
  width: 23,
  height: 22,
  shape: 'html',
  html: `
          <div class="mushroom">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode7 = {
  id: "greenNode7",
  x: 1300,
  y: 327,
  width: 23,
  height: 21,
  shape: 'html',
  html: `
          <div class="mushroom2">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode8 = {
  id: "greenNode8",
  x: 1312,
  y: 261,
  width: 23,
  height: 24,
  shape: 'html',
  html: `
          <div class="graymushroom1">
            <div></div>
            <div></div>
          </div>
          `,
};
export const greenNode9 = {
  id: "greenNode9",
  x: 1301,
  y: 350,
  width: 21,
  height: 10,
  attrs: {
    body: {
      fill: "#00f800",
    },
    label: {
      text: "S",
      fontSize: "8",
    },
  },
};
export const greenNode10 = {
  id: "greenNode10",
  x: 1462,
  y: 292,
  width: 21,
  height: 10,
  attrs: {
    body: {
      fill: "#00f800",
    },
    label: {
      text: "S",
      fontSize: "8",
    },
  },
};
export const greenNode11 = {
  id: "greenNode11",
  x: 1580,
  y: 150,
  width: 18,
  height: 12,
  attrs: {
    body: {
      fill: "#fff",
    },
  },
};