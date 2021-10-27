<template>
<div class="container-fluid">
    <div class="row">
<div class="col-2 bg-dark">
    <Home />
</div>
    

    <div class="col-10 text-dark text-start bg-light">
      
        
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
            </div>
          </div>
        </div>


        <div class="container mt-5">
<div class="row">
    <div class=" col-6 text-start" >
      
   <form class="mt-5 border  rounded p-5">
  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">Location Type :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="country">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">State :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="Punjab">
    </div>
  </div>


  <hr>


  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">Location Type :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="country">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">State :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="Punjab">
    </div>
  </div>
<hr>

  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">Audience :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="All Economy Profile">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Gender :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="All">
    </div>
  </div>

      <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Min age :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"  value="12">
    </div>
      
      </div>
          <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Max age :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="64">
    </div>
          </div>
  <hr>


  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">Platfroms :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="All">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Objectives :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="All">
    </div>
  </div>

     
  <hr>


  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">Budget :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="Budget">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Start Date :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="12">
    </div>
  </div>

      <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Select Time :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control"  value="64">
    </div>
      
     
          </div>
  <hr>

  <div class="row mb-4 ms-5">
    <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"> Heading :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="Ad Heading">
    </div>
  </div>
  <div class="row mb-4 ms-5">
    <label for="inputPassword3" class="col-sm-5 ms-3 col-form-label">Ad Description :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" value="Description">
    </div>
  </div>

     
  

   </form>
    </div>
     <div class="col-6 mt-5  py-5">
        <div class="container  ">
  <div class="row gap-3  ">
    <div class="col-12 border py-3  text-center">
          <div class="fw-bold fs-4 p-2 "> Single Image</div>
            <div><img src="../assets/1.jpg" style="width:300px" class="mb-3"></div>
    </div>
    <div class="col-12 border text-center">
       <div class="fw-bold fs-4 p-2">Multiple Image</div> 
        <div class="row mt-2 ">
                <div class="col-5">
                  <img src="../assets/3.jpg"  style="width:200px">
                </div>
                <div class="col-5">
                  <img src="../assets/4.jpeg"  style="width:200px">
                </div>

                <div class="col-5 mt-5">
                  <img src="../assets/1.jpg"  style="width:200px" class="mb-3">
                </div>
                <div class="col-5 mt-5">
                  <img src="../assets/5.jpg"  style="width:200px" class="mb-3">
                </div>
               
              </div>
      
    </div>
    <div class="col-12 border text-center py-3">
      <div class="fw-bold fs-4 ">Video</div>\
      <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg"></video>
      
    </div>
  </div>
</div>
       </div>
     </div>
</div>
        </div>
</div>
    </div>
   




</template>
<script>

import Home from './Home.vue'

export default {
  components: {
    Home,
  
     


  
 
  }
}
</script>


<style scoped>
.row.p-5.gap-5.m-auto {
    text-align: start;
    line-height: 28px;
}
.container-fluid.p-2{
    margin-top: 31px;
    height: 1050px;
    background: #00000026;

}
.row.mt-2 {
    margin-left: 64px;

}

.col-6.mt-5 {
   
    height: 1100px;


}
.container.mt-5{
  background: #8080807a;
}
</style>