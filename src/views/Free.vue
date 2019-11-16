<template>
  <div class="free">
    <h1>This is an about page</h1>
    <TabMenu />
    <Search />
  </div>
</template>

<script>
import TabMenu from "@/components/TabMenu.vue";
import Search from "@/components/Search.vue";

export default {
  name: "free",
  components: {
    TabMenu,
    Search
  }
};
</script>
