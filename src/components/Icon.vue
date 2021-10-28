<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark">
        <Home />
      </div>
      <div class="col-10">
        <Header />
        <div class="py-5">
          Icon

          <div v-for="user in users" :key="user.id">
            {{ user.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Home from "./Home.vue";
import Header from "./Header.vue";
import usersData from "../Users.json";
export default {
  data() {
    return {
      users: usersData,
    };
  },
  components: {
    Home,
    Header,
  },
};
</script>





 