<template>
  <navigation/>
  <router-view/>
  <Footer/>
</template>

<script>
import navigation from './views/layout/components/navigation.vue';
import Lenis from 'lenis'
import Footer from './views/layout/components/footer.vue';
export default {
  name: 'App',
  components: {
    navigation,
    Footer
  },
  data() {
    return {
      lenis: null
    }
  },
  provide() {
    return {
      lenis: this.lenis
    }
  },
  mounted() {
    // 使用 autoRaf，让 Lenis 自己管理动画循环
    this.lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: true, // 让 Lenis 自动管理
    });
    
    // 减少日志输出频率，避免性能问题
    let lastLog = 0;
    this.lenis.on('scroll', (e) => {
      const now = Date.now();
      if (now - lastLog > 100) { // 每100ms最多输出一次
        console.log(e);
        lastLog = now;
      }
    });
  },
  beforeUnmount() {
    // 组件销毁时清理
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
};
document.addEventListener('click', function(e) {
    const numStars = 15; // 每次点击生成星星的数量，可以调大
    const explosionRadius = 100; // 星星扩散的半径，可以调小让它们更密集

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star-explosion';
        document.body.appendChild(star);

        // 设置星星的初始位置为点击位置，使用 pageX 和 pageY
        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';

        // 随机生成星星的颜色
        const colors = ['#FFC107', '#FF9800', '#FFEB3B', '#FF5722', '#F44336', '#9C27B0', '#2196F3', '#00BCD4'];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // 随机生成星星的大小
        const size = Math.random() * 6 + 9; // 3px to 9px，略微调小星星大小，让密集效果更好
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // 随机生成星星的动画持续时间
        const duration = Math.random() * 0.8 + 0.4; // 0.4s to 1.2s
        star.style.animationDuration = duration + 's';

        // 随机生成星星的动画延迟 (使其看起来更自然)
        const delay = Math.random() * 0.1; // 0s to 0.1s
        star.style.animationDelay = delay + 's';

        // 随机生成移动距离和方向
        const angle = Math.random() * 2 * Math.PI; // 随机角度
        const distance = Math.random() * explosionRadius; // 随机扩散距离
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);

        // 添加动画属性
        star.style.animation = `starFadeOut ${duration}s forwards, starMove ${duration}s forwards`;

        // 动画结束后移除元素
        star.addEventListener('animationend', function() {
            star.remove();
        });
    }
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 针对Firefox浏览器 */
input[type="number"] {
  -moz-appearance: textfield;
}
.star-explosion {
    position: absolute;
    pointer-events: none; /* 确保星星不影响鼠标事件 */
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%); /* 居中星星 */
    z-index: 9999; /* 确保星星在最上层 */
}

@keyframes starFadeOut {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
}

@keyframes starMove {
    0% { transform: translate(-50%, -50%); }
    100% {
        /* 随机移动，这里使用了简单的随机数，每次点击时生成不同的方向 */
        transform: translate(
            calc(-50% + (var(--dx)) * 1px),
            calc(-50% + (var(--dy)) * 1px)
        ) scale(0.5); /* 移动的同时缩小 */
    }
}

</style>
