<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
    <router-link class="navbar-brand" :to="{name: 'app'}">Boomerang</router-link>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
             <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'addBlog'}" class="nav-link">Add Blog</router-link>
            </li>
        </ul>
    </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
