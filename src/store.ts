import { Cell, Graph } from '@antv/x6';
import { defineStore } from 'pinia';
import { IdentificationProcessor } from './identification/identificationBox'
import { useRouter } from 'vue-router'

export const useGraphStore = defineStore('graph', {
  state: () => ({
    graph: null as Graph | null,
    targrtNode: null as Cell | null, //emptyNodeA1
    centerNode: null as Cell | null,
    Box: null as IdentificationProcessor | null,
    $router:useRouter(),
    mounted:false,
    nodeNumber: 2,
    //角阀
    anglevalveNodeFront : null as unknown as Cell,
    anglevalveNodeBehind : null as unknown as Cell,
    anglevalveNodeFrontB : null as unknown as Cell,
    anglevalveNodeBehindB : null as unknown as Cell,
    anglevalveNodeFrontC : null as unknown as Cell,
    anglevalveNodeBehindC : null as unknown as Cell,
    anglevalveNodeFrontD : null as unknown as Cell,
    anglevalveNodeBehindD : null as unknown as Cell,
    anglevalveNodeFrontE : null as unknown as Cell,
    anglevalveNodeBehindE : null as unknown as Cell,
    anglevalveNodeFrontF : null as unknown as Cell,
    anglevalveNodeBehindF : null as unknown as Cell,
    //中间两个
    emptyNodeA1 : null as unknown as Cell, //emptyNodeA1
    emptyNodeA2 : null as unknown as Cell,
    emptyNodeB1 : null as unknown as Cell,
    emptyNodeB2 : null as unknown as Cell,
    emptyNodeC1 : null as unknown as Cell,
    emptyNodeC2 : null as unknown as Cell,
    emptyNodeD1 : null as unknown as Cell,
    emptyNodeD2 : null as unknown as Cell,
    emptyNodeE1 : null as unknown as Cell,
    emptyNodeE2 : null as unknown as Cell,
    emptyNodeF1 : null as unknown as Cell,
    emptyNodeF2 : null as unknown as Cell,
    //后面两个
    metalNodeA3 : null as unknown as Cell,
    metalNodeA4 : null as unknown as Cell,
    metalNodeB3 : null as unknown as Cell,
    metalNodeB4 : null as unknown as Cell,
    metalNodeC3 : null as unknown as Cell,
    metalNodeC4 : null as unknown as Cell,
    metalNodeD3 : null as unknown as Cell,
    metalNodeD4 : null as unknown as Cell,
    metalNodeE3 : null as unknown as Cell,
    metalNodeE4 : null as unknown as Cell,
    metalNodeF3 : null as unknown as Cell,
    metalNodeF4 : null as unknown as Cell,
  }),
  actions: {
    handleMarkBox() {
        this.$router.push('/diagram')
        let timer: ReturnType<typeof setTimeout> | null = null;
        const checkMounted = () =>{
          if (this.mounted) {
            this.Mark()
            if(!timer) clearTimeout(timer!)
          } else timer = setTimeout(checkMounted, 0)
        }
        checkMounted()
    },
    Mark() {
      this.Box = new IdentificationProcessor(this.graph as Graph, this.centerNode as Cell, this.targrtNode as Cell)
      this.Box.addIdentification()
      console.log('执行');
    },
    removeAndReturn() {
      this.Box!.removeIdentification()
      this.$router.push('/musicList')
    },
    selectNode(center:number, node:number) {
      //选取中心点
      
      if (center%6==1) {
        //A列
        this.centerNode = this.emptyNodeA2
      } else if (center%6==2) {
        this.centerNode = this.emptyNodeB2
      } else if (center%6==3) {
        this.centerNode = this.emptyNodeC2
      } else if (center%6==4) {
        this.centerNode = this.emptyNodeD2
      } else if (center%6==5) {
        this.centerNode = this.emptyNodeE2
      } else if (center%6==0) {
        this.centerNode = this.emptyNodeF2
      }
      //选取目标点
      const nodeMapping: { [key: number]: any } = {
        1: this.metalNodeA3,
        2: this.metalNodeB3,
        3: this.metalNodeC3,
        4: this.metalNodeD3,
        5: this.metalNodeE3,
        6: this.metalNodeF3,
        7: this.metalNodeA4,
        8: this.metalNodeB4,
        9: this.metalNodeC4,
        10: this.metalNodeD4,
        11: this.metalNodeE4,
        12: this.metalNodeF4,
        13: this.emptyNodeA2,
        14: this.emptyNodeB2,
        15: this.emptyNodeC2,
        16: this.emptyNodeD2,
        17: this.emptyNodeE2,
        18: this.emptyNodeF2,
        19: this.emptyNodeA1,
        20: this.emptyNodeB1,
        21: this.emptyNodeC1,
        22: this.emptyNodeD1,
        23: this.emptyNodeE1,
        24: this.emptyNodeF1,
        25: this.anglevalveNodeBehind,
        26: this.anglevalveNodeBehindB,
        27: this.anglevalveNodeBehindC,
        28: this.anglevalveNodeBehindD,
        29: this.anglevalveNodeBehindE,
        30: this.anglevalveNodeBehindF,
        31: this.metalNodeA3,
        32: this.metalNodeB3,
        33: this.metalNodeC3,
        34: this.metalNodeD3,
        35: this.metalNodeE3,
        36: this.metalNodeF3,
        37: this.metalNodeA4,
        38: this.metalNodeB4,
        39: this.metalNodeC4,
        40: this.metalNodeD4,
        41: this.metalNodeE4,
        42: this.metalNodeF4,
        43: this.emptyNodeA2,
        44: this.emptyNodeB2,
        45: this.emptyNodeC2,
        46: this.emptyNodeD2,
        47: this.emptyNodeE2,
        48: this.emptyNodeF2,
        49: this.emptyNodeA1,
        50: this.emptyNodeB1,
        51: this.emptyNodeC1,
        52: this.emptyNodeD1,
        53: this.emptyNodeE1,
        54: this.emptyNodeF1,
        55: this.anglevalveNodeFront,
        56: this.anglevalveNodeFrontB,
        57: this.anglevalveNodeFrontC,
        58: this.anglevalveNodeFrontD,
        59: this.anglevalveNodeFrontE,
        60: this.anglevalveNodeFrontF,
      };
      if (node in nodeMapping) {
        this.targrtNode = nodeMapping[node];
      } else {
        console.log('该节点不在选取范围内', node);
      }
    },
    handleGenerate (center:number, node:number) {
      this.selectNode(center, node)
      console.log('node1:', node);
      
      this.nodeNumber = node
      console.log('node2:', node);
      console.log('点位已经选取', '当前nodenumber', this.nodeNumber);
      this.handleMarkBox()
      
    }

  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'nodeNumber',
        storage: localStorage,
        paths: ['nodeNumber'] 
      },
    ],
  },
});
