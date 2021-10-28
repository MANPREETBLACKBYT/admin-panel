<template>
  <div class="bg-dark">
    <div
      class="
        d-flex
        flex-column
        align-items-center align-items-sm-start
        px-3
        pt-2
        text-white
        min-vh-100
      "
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          pb-3
          mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
      >
        <span class="fs-5 d-none d-sm-inline mt-4 fw-bold">Admin Panel</span>
      </a>

      <ul
        class="
          nav nav-pills
          flex-column
          mb-sm-auto mb-0
          align-items-center align-items-sm-start
          py-4
          gap-4
        "
      >
        <router-link to="/FirstPage" class="text-decoration-none text-dark">
          <li>
            <a
              href=""
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <i class="bi bi-speedometer text-white p-1"></i
              ><span class="ms-1 d-none d-sm-inline text-white"
                >Dashboard
              </span></a
            >
          </li>
        </router-link>

        <router-link to="/Profile" class="text-decoration-none text-dark">
          <li class="">
            <a href="#" class="nav-link">
              <i class="bi bi-file-earmark-ppt text-white p-2"></i
              ><span class="d-none d-sm-inline text-white">Profile </span></a
            >
          </li>
        </router-link>

        <router-link to="/BasicTable" class="text-decoration-none text-dark">
          <li>
            <a href="#" class="nav-link">
              <i class="bi-table text-white p-2"></i>
              <span class="d-none d-sm-inline text-white">Basic Table </span>
            </a>
          </li>
        </router-link>
        <router-link to="/Icon" class="text-decoration-none text-dark">
          <li>
            <a href="#" class="nav-link align-middle">
              <i class="bi bi-file-medical text-white p-2"></i>
              <span class="ms-1 d-none d-sm-inline text-white">Icon </span></a
            >
          </li>
        </router-link>

        <router-link to="/GoogleMap" class="text-decoration-none text-dark">
          <li>
            <a href="" data-bs-toggle="collapse" class="nav-link align-middle">
              <i class="bi bi-google text-white p-2"></i>
              <span class="ms-1 d-none d-sm-inline text-white"
                >Google Map
              </span></a
            >
          </li>
        </router-link>

        <router-link to="/BlankPage" class="text-decoration-none text-dark">
          <li>
            <a href="#" class="nav-link">
              <i class="bi bi-file-earmark-break text-white p-2"></i>
              <span class="d-none d-sm-inline text-white">Blank Page </span>
            </a>
          </li>
        </router-link>
        <router-link to="/LastPage" class="text-decoration-none text-dark">
          <li>
            <a href="#" class="nav-link">
              <i class="bi bi-bug text-white p-2"></i>
              <span class="d-none d-sm-inline text-white">Error 404 </span></a
            >
          </li>
        </router-link>

        <li>
          <a href="#" class="nav-link px-0">
            <button
              class="
                d-none d-sm-inline
                text-white
                border-0
                bg-success
                p-2
                mt-5
                rounded
              "
            >
              Upgrade to Pro
            </button></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>



