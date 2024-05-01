<script setup>

const handleLinkClick = (item) => {
    window.open(item.value, '_blank')
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="gotohomeButton" @click="$router.push('/')">Go to Home</button><br>
  </div>
</template>

<style>

.gotohomeButton {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>