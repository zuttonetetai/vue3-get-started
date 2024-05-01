<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const drawer = ref(false)
const group = ref(null)
const items = ref([
  { title: 'Home', value: '/', icon: 'mdi-home'},
  { title: 'About', value: '/about', icon: 'mdi-information'},
  { title: 'Google', value: 'https://www.google.co.jp', icon: 'mdi-open-in-new'},
])

watch(group, () => {
  drawer.value = false
})

// リンククリック時の処理
const handleLinkClick = (item) => {
  if (item.title === 'Google') {
    window.open(item.value, '_blank')
  } else {
    router.push({path: item.value}) // 対応するURLパスに遷移
  }
}
</script>

<template>
  <v-app-bar color="primary" scroll-behavior="collapse" density="compact" :elevation="0">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My files</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>

      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
  </v-app-bar>
  <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
        temporary
      >
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" @click="handleLinkClick(item)">
            <v-list-item-title>
              <v-icon color="info" :icon="item.icon"></v-icon>
              {{ item.title }}
              
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>