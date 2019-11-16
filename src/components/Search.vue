<template>
  <div class="search">
    <div class="content" v-for="i in 6" :key="i"></div>
    <h3>{{ name }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      name: "カメラを作った。",
      text:
        "カメラのキタムラに行ったがフィルムケースをもらうことはできなかった。"
    };
  }
};
</script>

<style scoped>
div.search {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
</style>
