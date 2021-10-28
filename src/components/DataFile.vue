<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-dark">
        <Home />
      </div>
      <div class="col-10">
        <Header />

      



            
         


      <div class="container mt-5">
         <div v-for="user in users" :key="user.id">
          <div class="row">
           <div class="col-md-6 text-start">
              <form class="mt-5 border rounded p-5">

                <!-- frist form  -->

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"
                    >Location Type :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.city}}</label>
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >State :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.State}}</label>
                  </div>
                </div>

                <hr />

<!-- 
                 seconde Form -->

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"
                    >Location Type :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.city}}</label>
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >State :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.State}}</label>
                  </div>
                </div>
                <hr />

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"
                    >Audience :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2"
                      >{{user.Audience}}</label
                    >
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Gender :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Gender}}</label>
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Min age :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Minage}}</label>
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Max age :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Maxage}}</label>
                  </div>
                </div>
                <hr />
<!-- 
                Third form -->

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"
                    >Platfroms :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Platforms}}</label>
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Objectives :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Objectives}}</label>
                  </div>
                </div>

                <hr />

                <!-- Fourth form -->

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label"
                    >Budget :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Budget}}</label>
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Start Date :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Date}}</label>
                  </div>
                </div>

                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Select Time :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2">{{user.Time}}</label>
                  </div>
                </div>
                <hr />

                <!-- fifth form -->

                <div class="row mb-4 ms-5">
                  <label for="inputEmail3" class="col-sm-5 ms-3 col-form-label">
                    Heading :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2"
                      >{{user.Heading}}</label
                    >
                  </div>
                </div>
                <div class="row mb-4 ms-5">
                  <label
                    for="inputPassword3"
                    class="col-sm-5 ms-3 col-form-label"
                    >Ad Description :</label
                  >
                  <div class="col-sm-5">
                    <label for="text" class="form-control p-2 text-start"
                      >{{user.Description}}</label
                    >
                  </div>
                  
                </div>
              </form>
            </div>
            <div class="col-6 mt-5 py-5">
              <div class="container">
                <div class="row gap-3">
                  <div class="col-12 border py-3 text-center">
                    <div class="fw-bold fs-4 p-2">Single Image</div>
                    <div>
                      <img
                        src="../assets/1.jpg"
                        style="width: 300px"
                        class="mb-3"
                      />
                    </div>
                  </div>
                  <div class="col-12 border text-center">
                    <div class="fw-bold fs-4 p-2">Multiple Image</div>
                    <div class="row mt-2">
                      <div class="col-5">
                        <img src="../assets/3.jpg" style="width: 200px" />
                      </div>
                      <div class="col-5">
                        <img src="../assets/4.jpeg" style="width: 200px" />
                      </div>

                      <div class="col-5 mt-5">
                        <img
                          src="../assets/1.jpg"
                          style="width: 200px"
                          class="mb-3"
                        />
                      </div>
                      <div class="col-5 mt-5">
                        <img
                          src="../assets/5.jpg"
                          style="width: 200px"
                          class="mb-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 border text-center py-3">
                    <div class="fw-bold fs-4">Video</div>
                    \
                    <video width="320" height="240" controls>
                      <source src="movie.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>
                  </div>
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
console.log(usersData);


</script>

<style scoped>
.row.p-5.gap-5.m-auto {
  text-align: start;
  line-height: 28px;
}
.container-fluid.p-2 {
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
.container.mt-5 {
  background: #8080803d;
}

label.form-control.p-2.text-start {
    height: 105px;

}
</style>