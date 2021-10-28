<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark">
        <Home />
      </div>
     <div class="col-10">
            <Header />
             <div class="py-5">
              Blank Page
            </div>
          </div>
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