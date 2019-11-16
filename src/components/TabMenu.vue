<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      items: [
        { title: "top", path: "/" },
        { title: "profile", path: "/profile" },
        { title: "skills", path: "/skills" },
        { title: "outputs", path: "/outputs" }
      ]
    };
  }
};
</script>

<style scoped>
ol {
  margin-left: auto;
  width: 180px;
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}
li {
  width: 150px;
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}
li:hover {
  opacity: 0.5;
}
/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100px;
  height: 100px;
  color: red;
  text-decoration: none;
  line-height: 50px;
}
</style>
