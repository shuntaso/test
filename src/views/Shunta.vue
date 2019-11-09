<template>
  <div>
    <div class="shunta sugoi">黄色</div>
    <div class="shunta sugoize">赤色</div>
    <Shunta />
    <b-button>shunta</b-button>
  </div>
</template>

<script>
import Shunta from "@/components/Counter.vue";

export default {
  components: {
    Shunta
  }
};
</script>

<style lang="scss" scoped>
.shunta {
  &.sugoi {
    color: yellow;
  }

  &.sugoize {
    color: red;
  }
}
</style>
