<template>
    <div class="videoContainer">
        <video autoplay muted loop class="background-video" style="width: 100%">
            <source src="https://rm-static.djicdn.com/documents/55708/60dffabd3d951710818482083124423.mp4"
                type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="content"
            style="position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); color: white; z-index: 2;">
            <div style="font-size: 40px; color: rgba(255, 241, 150, 1); text-align: center;">CSUST云嵌</div>
            <div style="text-align: center;font-size: 20px;">We are the future</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { userSettingStore } from '@/Store/setting/setting';
const userSetting = userSettingStore();
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
</style>