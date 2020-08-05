<template>

  <v-app>

    <splxNavbar></splxNavbar>
    <splxProfilBar></splxProfilBar>
    
    <v-content>
      <router-view></router-view>
    </v-content>


  </v-app>

</template>

<script>

import splxNavbar from "@/components/splx-navbar.vue";
import splxProfilBar from "@/components/splx-profilBar.vue";
export default {
  name: "App",

  components: {
    splxNavbar,
    splxProfilBar
  },

  data: () => ({
    //
  })
};
</script>
