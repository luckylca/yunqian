<template>
    <div class="container">
        <div class="nameContainer">
            <div class="name">姓名<span style="color: red; margin-left: 3px;">*</span></div>
            <el-input v-model="form.name" placeholder="请输入姓名" style="width: 100px;height: 40px;"></el-input>
        </div>
        <div class="genderContainer">
            <div class="gender">性别<span style="color: red; margin-left: 3px;">*</span></div>
            <el-radio-group v-model="form.gender" class="ml-4">
                <el-radio value="1" size="large">男</el-radio>
                <el-radio value="0" size="large">女</el-radio>
            </el-radio-group>
        </div>
        <div class="collegeContainer">
            <div class="college">学院<span style="color: red; margin-left: 3px;">*</span></div>
            <el-select v-model="form.college" placeholder="Select" size="large" style="width: 240px">
                <el-option v-for="item in collegeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="classContainer">
            <div class="class">班级<span style="color: red; margin-left: 3px;">*</span></div>
            <el-input v-model="form.class" placeholder="请输入班级" style="width: 200px;height: 40px;"
                maxlength="20"></el-input>
        </div>
        <div class="groupContainer">
            <div class="group">组别<span style="color: red; margin-left: 3px;">*</span></div>
            <el-select v-model="form.group" placeholder="Select" size="large" style="width: 240px">
                <el-option v-for="item in setting.WebSettings.groupOptions" :key="item.value" :label="item.label"
                    :value="item.value" />
            </el-select>
        </div>
        <div class="telephoneContainer">
            <div class="telephone">电话<span style="color: red; margin-left: 3px;">*</span></div>
            <el-input v-model="form.telephone" placeholder="请输入电话" type="number" maxlength="11"
                style="width: 200px;height: 40px;"></el-input>
        </div>
        <div class="qqContainer">
            <div class="qq">QQ<span style="color: red; margin-left: 3px;">*</span></div>
            <el-input v-model="form.qq" placeholder="请输入QQ" type="number" maxlength="10"
                style="width: 200px;height: 40px;"></el-input>
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
        <el-upload class="upload-demo" drag :http-request="customUpload" :before-upload="beforeUpload" multiple>
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                拖到这里或者 <em>点击上传</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    支持 JPG/PNG/GIF/WebP 格式，文件大小限制为 10MB
                </div>
            </template>
        </el-upload>
        <el-button type="primary" style="width: 100px;margin:auto" @click="formDataInspect">提交</el-button>
        <el-dialog v-model="dialogVisible" title="提示信息" width="500">
            <span>确认提交吗</span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false; submitForm()">
                        提交
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { send } from '@emailjs/browser';
import mailApi from '@/apis/api';
import { userStore } from '@/Store/user/user';
import { articleStore } from '@/Store/article/article';
import { ElMessage, ElLoading } from 'element-plus';
import type { UploadRawFile, UploadRequestOptions } from 'element-plus';
import { uploadImage } from '@/apis/user';
import { init } from '@emailjs/browser';
import { uploadList } from '@/apis/user';
import { userSettingStore } from '@/Store/setting/setting';
import router from '@/router';

const user = userStore();
// const article = articleStore();
const dialogVisible = ref(false);
const setting = userSettingStore();
const updataResult = ref<string[]>([]);
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
    experience: '',
    date: '',
    imgUrls: [] as string[],
    state: ''
});
const collegeOptions = ref([
    { value: '0', label: '计算机学院' },
    { value: '1', label: '电气学院' },
    { value: '2', label: '汽机学院' },
    { value: '3', label: '土木学院' },
    { value: '4', label: '经管学院' },
    { value: '5', label: '文新学院' },
    { value: '6', label: '法学院' },
    { value: '7', label: '外语学院' },
    { value: '8', label: '交通学院' },
    { value: '9', label: '数统学院' },
    { value: '10', label: '航空工程学院' },
    { value: '11', label: '物电学院' },
    { value: '12', label: '建筑学院' },
    { value: '13', label: '化工学院' },
]);

const beforeUpload = (file: UploadRawFile) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const isValidType = validTypes.includes(file.type);
    if (!isValidType) {
        ElMessage.error('仅支持 JPG、PNG、GIF 和 WebP 格式图片');
        return false;
    }
    const isValidSize = file.size / 1024 / 1024 < 20; // 20MB 限制
    if (!isValidSize) {
        ElMessage.error('图片大小不能超过 20MB');
        return false;
    }
    return true;
};
const customUpload = (options: UploadRequestOptions) => {
    const fileToUpload = options.file;
    uploadImage(fileToUpload as File).then((response) => {
        console.log(response.data.image.display_url);
        form.value.imgUrls.push(response.data.image.display_url);
        ElMessage.success('图片上传成功');
    }).catch((error) => {
        console.error('Upload error:', error);
        ElMessage.error('图片上传失败，请重试');
    });

};
const mailOptions = ref({
    to: "3462014130@qq.com",
    title: "新报名信息",
    message: "新报名信息已提交，请查看详情。",
    time: new Date().toLocaleString(),
    name: "111"
});
function getRandom012(): number {
    return Math.floor(Math.random() * 3);
}
async function sendEmail() {
    try {
        // const randomIndex = getRandom012();
        const randomIndex = 0; // For testing, use a fixed index
        const response = await send(mailApi.service_id[randomIndex], mailApi.template_id[randomIndex], mailOptions.value);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

async function formDataInspect() {
    if (!form.value.name || !form.value.telephone || !form.value.qq || !form.value.group || !form.value.college || !form.value.class) {
        ElMessage.error('请填写必填项');
        return;
    }
    const lastItem = user.signUpList.slice(-1)[0];
    const currentDate = new Date();
    // if (user.signUpList.length >= 0 && lastItem != null && currentDate.getTime() - new Date(lastItem.date).getTime() < 60 * 60 * 24) {
    //     ElMessage.error('报名时间间隔过短，请明天再试');
    //     return;
    // }
    dialogVisible.value = true;
}
const submitForm = async () => {
    form.value.date = new Date().toLocaleString();
    form.value.state = '待审核';
    const groupNum = parseInt(form.value.group.split('-')[0], 10);
    mailOptions.value.name = form.value.name;
    mailOptions.value.to = setting.WebSettings.groupOptions[groupNum].email; 
    mailOptions.value.message = `姓名: ${form.value.name}\n
    电话: ${form.value.telephone}\n
    QQ: ${form.value.qq}\n
    兴趣: ${form.value.interest}\n
    对RM已有的认识: ${form.value.know}\n
    工作设想: ${form.value.want}\n
    实践经验: ${form.value.experience}\n
    报名时间: ${form.value.date}\n
    状态: ${form.value.state}
    附件: ${form.value.imgUrls.join(', ')}`;
    mailOptions.value.title = `RM报名信息 - ${setting.WebSettings.groupOptions[groupNum].label} - ${form.value.name}`;
    const loadingInstance = ElLoading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    // await sendEmail();
    await user.updateSignUpList(form.value)
    await uploadList(user.userdata.token,user.signUpList)
    loadingInstance.close();
    ElMessage({
        message: '报名表提交成功',
        type: 'success'
    });
    router.replace({ path: '/' });
    console.log('Form submitted:', form.value);
};

onMounted(() => {
    init({
        publicKey: mailApi.mailApiKey[0],
    });
});

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 20vw;
    padding-right: 20vw;
}

.nameContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .name {
        width: 170px;
    }
}

.genderContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .gender {
        width: 180px;
    }
}

.collegeContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .college {
        width: 170px;
    }
}

.classContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .class {
        width: 170px;
    }
}

.groupContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .group {
        width: 170px;
    }
}

.telephoneContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .telephone {
        width: 170px;
    }
}

.qqContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .qq {
        width: 170px;
    }
}

.interestContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .interest {
        width: 200px;
    }
}

.knowContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .know {
        width: 200px;
    }
}

.wantContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .want {
        width: 200px;
    }
}

.experienceContainer {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .experience {
        width: 200px;
    }
}
</style>
