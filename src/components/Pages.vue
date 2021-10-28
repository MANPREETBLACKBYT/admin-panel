<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark">
        <Home />
      </div>
     
            <Data />
          </div>
        </div>
     
</template>
<script>
import Home from "./Home.vue";
import Data from "./Data.vue";
export default {
  components: {
    Home,
    Data,
  },
};
</script>