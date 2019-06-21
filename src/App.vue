<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light nav-menu">
        <a class="navbar-brand link" href="#">Movie App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
              <router-link to="/" class="nav-link link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/explore" class="nav-link link">Explore</router-link>
            </li>          
          </ul>          
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  .nav-menu {
    background-color: #343a40 ;
  }
  a.link {
    color: #ffffffb3 !important;
  }

  .router-link-active {
    background-color: #1d2023;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>



