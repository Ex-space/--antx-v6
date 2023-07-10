export const anglevalveNode1 = {
    id: "anglevalveNode1",
    x: 500,
    y: 270,
    width: 24,
    height: 24,
    shape: "html",
    html: `
            <div class="anglevalveNode"></div>
            `,
    attrs: {
        // 一定要给边框宽度加上>0的值,否则节点将不能连线
        body: {
            stroke: "transparent",
            strokeWidth: 1, // 边框的粗细
            magnet: true, // 节点是否可以连线
        },
    },
};
export const anglevalveNode2 = {
    id: "anglevalveNode2",
    x: 600,
    y: 270,
    width: 24,
    height: 24,
    shape: "html",
    html: `
            <div class="anglevalveNode"></div>
            `,
    attrs: {
        // 一定要给边框宽度加上>0的值,否则节点将不能连线
        body: {
            stroke: "transparent",
            strokeWidth: 1, // 边框的粗细
            magnet: true, // 节点是否可以连线
        },
    },
};