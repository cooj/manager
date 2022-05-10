
<template>
  <h3 style="padding: 20px 10px 10px;">全部链接</h3>
  <ul class="a_ul">
    <li v-for="(item, index) in allrouter" :key="index">
      <router-link class="link" :to="item.path">
        <b>{{ item.children[0]?.meta?.title || item.path }}</b>
        <!-- item.children[0]?.meta.title -->
        <span>{{ item.children[0]?.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const allrouter = ref(router.options.routes);
//console.log(allrouter);

</script>
<!-- <route lang="json">
{
  "meta": {
    "requiresAuth": false,
    "title": "leftmenu"
  }
}
</route> -->
<style lang="scss" scoped>
.a_ul {
  > li {
    line-height: 1.5;
  }
  .link {
    display: block;
    padding: 5px 15px;
    color: #666;
    b {
      display: block;
      width: 100%;
      // margin-right: 50px;
    }
    &.router-link-active,&:hover {
      color: #673bff;
      background-color: #b3dde4;
    }
  }
}
</style>



