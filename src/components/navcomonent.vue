<template>
  <div class="container ">
      <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
              <router-link to="/navcomponent/product">products</router-link>
              <div class="d-flex jjustify-content-between align-items-center">
                  <router-link to="/navcomponent/wish">
                      <button class="btn btn-outline-success" type="submit">wish list</button>
                  </router-link>
              </div>
          </div>
      </nav>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
name: 'navcomponent',
data() {
  return {
   
  };
}
}
</script>
<style  scoped>
a{
  cursor: pointer;
}
</style>

