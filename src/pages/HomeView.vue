<script setup>
</script>

<template>
  <div class="home" >
    <h1>This is an Home page</h1>
    <button @click="$router.push('/about')">About</button><br>
    <a href="https://www.google.co.jp" target="_blank">google</a>
  </div>
</template>

<style>
.home {
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #2c3e50;
  text-align: center;
}
</style>