<template>
<div class="container">
    <div class="nameContainer">
        <div class="name">姓名</div>
        <el-input v-model="form.name" placeholder="请输入姓名" style="width: 100px;height: 40px;"></el-input>
    </div>
    <div class="genderContainer">
        <div class="gender">性别</div>
        <el-radio-group v-model="form.gender" class="ml-4">
            <el-radio value="1" size="large">男</el-radio>
            <el-radio value="0" size="large">女</el-radio>
        </el-radio-group>
    </div>
    <div class="collegeContainer">
        <div class="college">学院</div>
        <el-select
            v-model="form.college"
            placeholder="Select"
            size="large"
            style="width: 240px"
        >
            <el-option
                v-for="item in collegeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
    <div class="classContainer">
        <div class="class">班级</div>
        <el-input v-model="form.class" placeholder="请输入班级" style="width: 200px;height: 40px;" maxlength="20"></el-input>
    </div>
    <div class="groupContainer">
        <div class="group">组别</div>
        <el-select
            v-model="form.group"
            placeholder="Select"
            size="large"
            style="width: 240px"
        >
            <el-option
                v-for="item in groupOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
    <div class="telephoneContainer">
        <div class="telephone">电话</div>
        <el-input v-model="form.telephone" placeholder="请输入电话" type="number" maxlength="11" style="width: 200px;height: 40px;"></el-input>
    </div>
    <div class="qqContainer">
        <div class="qq">QQ</div>
        <el-input v-model="form.qq" placeholder="请输入QQ" type="number" maxlength="10" style="width: 200px;height: 40px;"></el-input>
    </div>
    <div class="interestContainer">
        <div class="interest">兴趣</div>
        <el-input v-model="form.interest" placeholder="请输入兴趣" type="textarea" :rows="4"></el-input>
    </div>
    <div class="knowContainer">
        <div class="know">对RM已有的认识</div>
        <el-input v-model="form.know" placeholder="对该比赛有何看法" type="textarea" :rows="4"></el-input>
    </div>
    <div class="wantContainer">
        <div class="want">工作设想</div>
        <el-input v-model="form.want" placeholder="希望在比赛中有何收获" type="textarea" :rows="4"></el-input>
    </div>
    <div class="experienceContainer">
        <div class="experience">实践经验</div>
        <el-input v-model="form.experience" placeholder="有无竞赛经历、动手能力、编程基础等" type="textarea" :rows="4"></el-input>
    </div>
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
    >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
        <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
        </div>
        </template>
    </el-upload>
    <el-button type="primary" style="width: 100px;margin:auto">提交</el-button>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { userSettingStore } from '@/Store/setting/setting';
// import { onMounted } from 'vue';
const form = ref({
    name: '',
    gender: '',
    college: '',
    class: '',
    group: '',
    telephone: '',
    qq: '',
    interest: '',
    know: '',
    want: '',
    experience: ''
});
const collegeOptions = ref([
    { value: '0', label: '计算机学院' },
    { value: '1', label: '电气工程学院' },
    { value: '2', label: '机械工程学院' },
    { value: '3', label: '土木工程学院' },
    { value: '4', label: '经济管理学院' }
]);
const groupOptions = ref([
    { value: '0', label: '电控组' },
    { value: '1', label: '视觉组' },
    { value: '2', label: '机械组' },
    { value: '3', label: '硬件组' },
    { value: '4', label: '宣传组' }
]);

</script>

<style lang="scss" scoped> 
.container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 20vw;
    padding-right: 20vw;
}
.nameContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .name {
        width: 170px;
    }
}
.genderContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .gender {
        width: 180px;
    }
}
.collegeContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .college {
        width: 170px;
    }
}
.classContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .class {
        width: 170px;
    }
}

.groupContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .group {
        width: 170px;
    }
}
.telephoneContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .telephone {
        width: 170px;
    }
}
.qqContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .qq {
        width: 170px;
    }
}
.interestContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .interest {
        width: 200px;
    }
}
.knowContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .know {
        width: 200px;
    }
}
.wantContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .want {
        width: 200px;
    }
}
.experienceContainer{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .experience {
        width: 200px;
    }
}

</style>
