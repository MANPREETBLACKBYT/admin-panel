<template>
<!-- <div class="col text-dark text-start">
        <div class="container-fluid bg-secondary" style="height: 80px">
          <div class="row">
            <div class="col mt-3 ">
              <input
                type="text "
                class="rounded border-0 p-2"
                placeholder="Search..."
                style="width: 400px"
              />
            </div>
            <div class="col text-end mt-4">
              <img
                src="download (1).jfif"
                width="30"
                height="30"
                class="rounded-circle"
              />
            </div>
          </div>
        </div>
        <div
          class="container-fluid text-black border-bottom"
          style="height: 80px"
        >
          <div class="row">
            <div class="col mt-4 fw-bold">Dashboard</div>
            <div class="col mt-4 text-end">
              Dashboard
              <span class="m-2 bg-success p-2 text-white rounded"
                >Upgrade to Pro</span >
            </div> -->
            <div>
                <Dashboard />
            </div>
          
            
      
        <!-- <DataFile /> -->
     
   
  

</template>
<script>

import Dashboard from './Dashboard.vue'


export default {
  components: {
 
      Dashboard
     


  
 
  }
}
</script>
<style scoped>

.container-fluid.bg-secondary {
    margin-left: -12px;
    width: 101%;
}

</style>

