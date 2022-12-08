<template>
  <v-app>

    <div style="height:100px;background-color: black; display: flex;align-items: center; justify-content: center;">
      <p style="color:white; font-weight: 700; font-size: 28px; ">
        MAMAMIA
      </p>
    </div>


    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
