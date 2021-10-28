<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark">
        <Home />
      </div>
      <div class="col-md-10 text-dark text-start bg-light">
        <div
          class="container-fluid text-black border-bottom"
          style="height: 80px"
        >
          <div class="row">
            <div class="col mt-4 fw-bold">Dashboard</div>
            <div class="col mt-4 text-end">
              Dashboard
              <span class="m-2 bg-success p-2 text-white rounded"
                >Upgrade to Pro</span
              >
            </div>
            <Data />
          </div>
        </div>
      </div>
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
