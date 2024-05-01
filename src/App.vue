<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <v-card>
    <v-layout>
      <AppHeader />
      <v-main style="height: 5000px;">
        <RouterView /> 
      </v-main>
    </v-layout>
  </v-card>
</template>