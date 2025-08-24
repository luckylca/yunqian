import { defineStore } from 'pinia'
import { ref } from 'vue'

export const articleStore = defineStore('article', ()=>{
    const tableData = ref([
        {name: '步兵', decl: '步兵是最基本的战斗单位，适合近距离作战。',index: 0},
        {name: '无人机', decl: '无人机是一种空中作战单位，具有高度优势。',index: 1},
        {name: '飞镖', decl: '飞镖是一种投掷武器，适合远程攻击。',index: 2},
        {name: '哨兵', decl: '哨兵用于侦查敌情，具有隐蔽性。',index: 3},
        {name: '英雄', decl: '英雄单位具有特殊能力，是战斗中的关键。',index: 4},
        {name: '工程机器人', decl: '工程机器人是一种辅助单位，负责兑矿和维修。',index: 5},
        {name: '雷达', decl: '雷达是一种侦查单位，构建整体地图，获取增益。',index: 6},
    ]);
    return {
        tableData,
    }
});
