<template>
    <div class="avatar" style="width: 100px;height: 100px;margin-left: auto;margin-right: auto;padding: 10px;">
        <img :src="avatar" alt="User Avatar" width="100%" style="border-radius: 50%;" />
    </div>
    <div class="table-container" style="margin: 100px;">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="时间" width="250" />
            <el-table-column prop="name" label="姓名" width="250" />
            <el-table-column prop="group" label="组别" width="250" />
            <el-table-column prop="state" label="状态" width="250" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { userStore } from '@/Store/user/user';
import { userSettingStore } from '@/Store/setting/setting';
interface SignUpDataType {
    name: string,
    gender: string,
    college: string,
    class: string,
    group: string,
    telephone: string,
    qq: string,
    interest: string,
    know: string,
    want: string,
    experience: string,
    date: string,
    imgUrls: string[],
    state: string
}
const avatar = ref('');
const setting = userSettingStore();
const user = userStore();
// avatar.value = "http://q.qlogo.cn/headimg_dl?dst_uin=" + user.userdata.account + "&spec=640&img_type=jpg" // Replace with actual avatar URL
avatar.value = "http://q.qlogo.cn/headimg_dl?dst_uin=" + user.userdata.account + "&spec=640&img_type=jpg" // Replace with actual avatar URL

const tableData = ref<SignUpDataType[]>([]);
tableData.value = user.signUpList.map(item => {
    // 查找对应的组别对象
    const groupOption = setting.WebSettings.groupOptions.find(opt => opt.value == item.group);
    // 替换 group 字段为名字（label），找不到则保留原值
    return {
        ...item,
        group: groupOption ? groupOption.label : item.group
    };
});

</script>

<style scoped>
</style>