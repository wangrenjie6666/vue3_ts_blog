<template>
  <footer class="content">
    <div>网站备案号：浙ICP备2021039141号-1</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Footer",
  setup() {
    const iconAttr = reactive({
      size: 16,
    });

    return {
      iconAttr,
    };
  },
  components: {},
});
</script>

<style lang="scss" scoped>
.content {
  background-color: $header-color;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  > div {
    color: #fff;
    font-size: 14px;
  }
}
</style>