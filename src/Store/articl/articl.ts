import { defineStore } from 'pinia'
import { ref } from 'vue'

export const articleStore = defineStore('article', ()=>{
    const tableData = ref([
        {name: '步兵机器人', decl: '步兵机器人是最基本的战斗单位，适合近距离作战。',index: 0},
        {name: '无人机', decl: '无人机是一种空中作战单位，具有较高的机动性。',index: 1},
        {name: '飞镖', decl: '飞镖是一种投掷武器，适合远程攻击。',index: 2},
        {name: '侦查机器人', decl: '侦查机器人用于侦查敌情，具有隐蔽性。',index: 3},
        {name: '英雄', decl: '英雄单位具有特殊能力，是战斗中的关键。',index: 4},
    ]);

    return {
        tableData
    }
});
