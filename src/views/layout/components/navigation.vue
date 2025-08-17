<template>
<div class="container">
    <div class="logo" style="min-width: 200px;">
        <img src="../../../assets/rmlogo.png" alt="" @click="router.push('/')">
    </div>
    <div class="box" v-if="userSetting.language === 'zh-CN'" @click="router.push('/introduce')">
        兵种介绍
    </div>
    <div class="box" v-else @click="router.push('/introduce')">
        Robot Introduction
    </div>
    <div class="box" v-if="userSetting.language === 'zh-CN'"  @click="joinUs">
        参加报名
    </div>
    <div class="box" v-else  @click="router.push('/join')">
        Join us
    </div>
    <div class="box" v-if="userSetting.language === 'zh-CN'" @click="router.push('/about')">
        关于我们
    </div>
    <div class="box" v-else @click="router.push('/about')">
        About Us
    </div>
    <div class="language" @click="userSetting.changeLanguage()">
        {{ userSetting.language }}
    </div>
    <div class="user" v-if="!user.ifLogin">
        <img id="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAwlJREFUeAHtmbFuFDEQhnOUURoaiiQSSBShzBOQjgYpdPAEVJEi5QXyCqHPE6SkQCAUGl4ASoKE0iAKSqIABXB8f7hRJtaRvcX2cpudkX55fWv/M/Ov12v7FhbCQoFQIBQIBUKBUCAUCAVCgVBgiAqMukx6PB6v4u8BuA9ug2Ug+wQ+gGfg6Wg0+kh5dYzEl8E++AGaTG3U1sTptxAksgm+gLamPpu9zp4EtsGvJPND6o/BGliaQNf6Tfe8/aSy3UsRCFxP3if/nvpGUzJqA9TWTCL0ayQQsN55P+xfU7/elLzdV1ugPmbi6s+cQLCaxMz0NGdOPhHBj4R9uzfXJcmuAs3kZo3D/m8JQbBhJJTi1Gd0vo0gt1zQh7nRwuUnxq1cvrT/tfSHAnUtcswO7CKj9ByeO4OyYlee2JEbAWu5ruDSJ9LsKJeven8iPbFoKZdyHYrD8Z3k8qX9a7wCqY/cetX9Sg0BtLExW7GLjNJ//z13BuV51xoCaFdndtcuMkrP4bkzKM+71hBAW1qzR3aRUXoOz51BWbErE9awF0LSFhGGuxSeCDDszdBEBG2HtZU108amcV+gNsBvgvq3HZYAMhLRgYgXgerZ2v7qH4j8keBMBI0EfzYgEWax/h+JORE0J8zloWjVZaYJYCUiDPNY3ASIMhQIBeZOgSKTIJObtr0PwT1wB9wAi6CkfYXsM3gHXoID/kMsvj2Gd3Yj8UXwBHwHXds3HO6B0kLPJgCOtet7C/63vSGAbo/LcagnnyavldsuWAfZZ4HpYxDnhFs+0pWlROhuJOBMw97bKyo306Br1fF1C8int71a/i7w4nEF+HdegRSZTC84aqjIJ/AiaE7w54cNDP94Gyc7wExDsbMnn4Ys38C/Djtpm+J1HL4AZrvFHbQkJBDNCWbPW3Zv3xxPx+aNcr09Q9keisHFc1yWfQobzk6dw+Kz/RSXl/5ELP6fo9NLG0+52XryUvLGw0qsdX/rW7LMianG/wIlcwuuUCAUCAVCgVAgFAgFQoFQIBQIBaoo8BsfNFpLaHStiAAAAABJRU5ErkJggg==" alt="">
        <div class="loginBox" id="loginBox" v-if="userSetting.language === 'zh-CN'" @click="router.push('/login')">登录</div>
        <div class="loginBox" id="loginBox" v-else @click="router.push('/login')">Login</div>
        <div class="registerBox" id="registerBox" v-if="userSetting.language === 'zh-CN'" @click="router.push('/register')">注册</div>
        <div class="registerBox" id="registerBox" v-else @click="router.push('/register')">Register</div>
    </div>
    <div class="user" v-else>
        <img id="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAwlJREFUeAHtmbFuFDEQhnOUURoaiiQSSBShzBOQjgYpdPAEVJEi5QXyCqHPE6SkQCAUGl4ASoKE0iAKSqIABXB8f7hRJtaRvcX2cpudkX55fWv/M/Ov12v7FhbCQoFQIBQIBUKBUCAUCAVCgVBgiAqMukx6PB6v4u8BuA9ug2Ug+wQ+gGfg6Wg0+kh5dYzEl8E++AGaTG3U1sTptxAksgm+gLamPpu9zp4EtsGvJPND6o/BGliaQNf6Tfe8/aSy3UsRCFxP3if/nvpGUzJqA9TWTCL0ayQQsN55P+xfU7/elLzdV1ugPmbi6s+cQLCaxMz0NGdOPhHBj4R9uzfXJcmuAs3kZo3D/m8JQbBhJJTi1Gd0vo0gt1zQh7nRwuUnxq1cvrT/tfSHAnUtcswO7CKj9ByeO4OyYlee2JEbAWu5ruDSJ9LsKJeven8iPbFoKZdyHYrD8Z3k8qX9a7wCqY/cetX9Sg0BtLExW7GLjNJ//z13BuV51xoCaFdndtcuMkrP4bkzKM+71hBAW1qzR3aRUXoOz51BWbErE9awF0LSFhGGuxSeCDDszdBEBG2HtZU108amcV+gNsBvgvq3HZYAMhLRgYgXgerZ2v7qH4j8keBMBI0EfzYgEWax/h+JORE0J8zloWjVZaYJYCUiDPNY3ASIMhQIBeZOgSKTIJObtr0PwT1wB9wAi6CkfYXsM3gHXoID/kMsvj2Gd3Yj8UXwBHwHXds3HO6B0kLPJgCOtet7C/63vSGAbo/LcagnnyavldsuWAfZZ4HpYxDnhFs+0pWlROhuJOBMw97bKyo306Br1fF1C8int71a/i7w4nEF+HdegRSZTC84aqjIJ/AiaE7w54cNDP94Gyc7wExDsbMnn4Ys38C/Djtpm+J1HL4AZrvFHbQkJBDNCWbPW3Zv3xxPx+aNcr09Q9keisHFc1yWfQobzk6dw+Kz/RSXl/5ELP6fo9NLG0+52XryUvLGw0qsdX/rW7LMianG/wIlcwuuUCAUCAVCgVAgFAgFQoFQIBQIBaoo8BsfNFpLaHStiAAAAABJRU5ErkJggg==" alt="">
        <div class="loginBox" id="loginBox" v-if="userSetting.language === 'zh-CN'" @click="router.push('/my')">{{user.userdata.name}}</div>
        <div class="loginBox" id="loginBox" v-else @click="router.push('/my')">{{user.userdata.name}}</div>
        <div class="registerBox" id="registerBox" v-if="userSetting.language === 'zh-CN'" @click="user.logout();router.push('/')">退出</div>
        <div class="registerBox" id="registerBox" v-else @click="user.logout();router.push('/')">{{user.userdata.name}}Logout</div>
    </div>
</div>


</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { userSettingStore } from '@/Store/setting/setting';
import { onMounted } from 'vue';
import { userStore } from '@/Store/user/user';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
const userSetting = userSettingStore();
const user = userStore();
const router = useRouter();
function joinUs() {
    if (user.ifLogin) {
        router.push('/join');
    } else {
        router.push('/login');
        ElMessage('请先登录或者注册账号')
    }
}
</script>

<style scoped lang="scss">

.container {
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100vw;
    background-color: black;
    justify-content: space-between;
    // align-items: center;
    margin: 0;
    padding: 10px 200px;
}
.box{
    color: white;
    height: 30px;
    width: 150px;
    min-width: 150px;
}
.user{
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // padding: 0 20px 0 0;
    height: 120px;
    z-index: 100;
    // background-color: white;
    img {
        width: 30px;
        height: 30px;
    }

    .loginBox{
        width: 100px;
        height: 100px;
        padding-top: 10px;
        padding-bottom: auto;
        margin-top: 10px;
        text-align: center;
        display: block;
        background-color: white;
        opacity: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.06),
            0 8px 24px rgba(0, 0, 0, 0.04);
        transition: opacity 0.3s ease, box-shadow 0.3s ease;
    }
    .registerBox{
        width: 100px;
        height: 100px;
        padding-top: 8px;
        text-align: center;
        display: block;
        background-color: white;
        opacity: 0;
        text-align: center;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.06),
            0 8px 24px rgba(0, 0, 0, 0.04);
        transition: opacity 0.3s ease, box-shadow 0.3s ease;
    }
}
.user:hover .loginBox {
    opacity: 1;
}
.user:hover .registerBox {
    opacity: 1;
}
.registerBox:hover {
    background-color: #f0f0f0;
}
.loginBox:hover {
    background-color: #f0f0f0;
}
.language {
    color: white;
    height: 30px;
}
</style>