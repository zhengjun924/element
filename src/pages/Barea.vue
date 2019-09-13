<template>
  <div @click="login">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
export default {
  name: "bArea",
  data() {
    return {
      playerOptions: {
        height: "360",
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "4:3", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        preload: "auto",
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src:
              "http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4" //视频url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {
    login() {
      console.log(23453245);
    },
    fetch() {
      this.$post("/zheng/user/login", {
        data: {
          email: "webzheng@126.com",
          password: "zhnegjun"
        }
      }).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.fetch();
  }
};
</script>

<style lang="less" scoped>
// .video-player{
//     width: 98%;
//     height: 100vh;
// }
</style>