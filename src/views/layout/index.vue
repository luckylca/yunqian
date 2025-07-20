<template>
    <div class="videoContainer">
        <video autoplay muted loop class="background-video" style="width: 100%">
            <source src="https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1752397060274_qdqqd_b90u0l.mp4"
                type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="content"
            style="position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); color: white; z-index: 2;">
            <div style="font-size: 40px; color: rgba(255, 241, 150, 1); text-align: center;font-family: impact;">CSUST云嵌</div>
            <div style="text-align: center;font-size: 20px;">We are the future</div>
        </div>
    </div>
    <div class="wrapper">
        <!-- <div style="width: 100%;height: 100%;color: rgba(255, 255, 255, 0.5); position: fixed;"></div> -->
        <div class="container">
            <div class="cardbox">
                <div class="cardsbox_card">
                    <img class="rmxuanchuanImg" src="../../assets/rmxuanchuan1.jpg" alt="">
                </div>
                <div class="cardsbox_card">
                    <img class="rmxuanchuanImg" src="../../assets/rmxuanchuan2.jpg" alt="">
                </div>
                <div class="cardsbox_card">
                    <img class="rmxuanchuanImg" src="../../assets/rmxuanchuan3.jpg" alt="">
                </div>
                <div class="cardsbox_card">
                    <img class="rmxuanchuanImg" src="../../assets/rmxuanchuan4.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { userSettingStore } from '@/Store/setting/setting';
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const userSetting = userSettingStore();
const distance = ref(0);
const isLeave = ref(false);
onMounted(() => {
    const wrapper = document.querySelector('.wrapper') as HTMLElement
    const cardbox = document.querySelector('.cardbox') as HTMLElement
    // const container = document.querySelector('.container') as HTMLElement
    const resize = (): void => {
        distance.value = cardbox.clientWidth - window.innerWidth
        wrapper.style.height = `${distance.value}px`
        if(isLeave.value){
            cardbox.style.transform = `translateX(-${distance.value}px)`;
        }
    }
    if (cardbox && wrapper) {
        resize(); // 初始化时计算一次
        ScrollTrigger.create({
        trigger: wrapper,          // 触发器是整个包裹容器
        start: "top top",          // 当 wrapper 的顶部碰到视口顶部时开始
        end: "bottom bottom",      // 当 wrapper 的底部碰到视口底部时结束
        onUpdate: (self) => {      // 在滚动时持续触发
            cardbox.style.transform = `translateX(-${self.progress * distance.value}px)`;
        },
        onLeave:()=>{
            isLeave.value = true;
        },
        onEnterBack:()=>{
            isLeave.value = false;
        }
        });
    }
    window.addEventListener('resize', resize); // 监听窗口大小变化
});



</script>
<style lang="scss" scoped>
.videoContainer {
    position: relative;
    width: 100%;
    height: 100vh;
    /* 全屏视频 */
    overflow: hidden;
}

.background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 确保视频覆盖整个背景 */
    transform: translate(-50%, -50%);
    z-index: 1;
    /* 视频置于底层 */
}
.wrapper {
    position: relative;
    width: 100%;
}
.container {
    position: sticky;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url(https://hz-rm-bbs-web-prod.oss-cn-hangzhou.aliyuncs.com/attachment/pre/v1/201509/28/151218x4782b40ybbbni77.jpg);
    // padding-top: auto;
    // padding-bottom: auto;
    display: flex;
    overflow: hidden;
}
.container::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.5);
}
.cardbox{
    display: flex;
    flex-direction: row;
    min-width: fit-content;
    padding-left: 10rem;
    z-index: 4;
}
.cardsbox_card {
    justify-content: center;
    align-items: center;
    width: 70rem;  
    height: 50rem; 
    background-color: #f7f7f7;
    margin-right: 10rem; 
    flex-shrink: 0;
    display: flex; // 添加这行让文字居中显示
    overflow: hidden;
    z-index: 4;
}
.rmxuanchuanImg{
    width: 100%;
    height: 100%;
    object-fit: cover; /* 确保图片覆盖整个卡片 */
    border-radius: 10px; /* 可选：添加圆角效果 */
    transform: scale(1.05); /* 可选：添加缩放效果 */
    transition: transform 0.3s ease; /* 可选：添加过渡效果 */
}
.rmxuanchuanImg:hover {
    transform: scale(1.2); /* 鼠标悬停时放大 */
}

</style>