<template>
<div id="home">
 <NavHeader></NavHeader>
 <Video></Video>
 <ItemList></ItemList>
 <NavFooter></NavFooter>
</div>
</template>

<script>
import NavHeader from "../views/home/NavHeader.vue";
import Video from "../views/home/Video.vue";
import ItemList from "../views/home/ItemList.vue";
import NavFooter from "../views/home/NavFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavHeader,
    Video,
    ItemList,
    NavFooter
  }
};
</script>


<style scoped>

</style>
