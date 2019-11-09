<template>
  <div>
    <button @click="countUp()">カウント</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    countUp: function() {
      this.count++;
    }
  }
};
</script>
>
