
<template>
  <div class="row">
    <div class="col-2">
      <Home />
    </div>
    <div class="col-10">
      <Header />
    </div>
  </div>
</template>
<script>
import Home from "./Home.vue";
import Header from "./Header.vue";

export default {
  components: {
    Home,
    Header,
  },
};
</script>