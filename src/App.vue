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
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>