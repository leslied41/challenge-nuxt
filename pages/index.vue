<script setup>
import { onMounted } from 'vue'
import { onSnapshot, collection, addDoc } from '@firebase/firestore';
import { ref } from 'vue';
import { db } from '../firestore'
const mamamia = ref()


onMounted(async () => {
  onSnapshot(collection(db, 'mamamia'), (querySnapshot) => {
    const data = []
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        ...doc.data()
      }
      data.push(item)
      mamamia.value = data
    })

  })
})
</script>
<template>

  <v-container>
    <v-card class="mx-auto" max-width="600" tile>
      <v-list>
        <v-subheader>POSTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in mamamia" :key="i">
            <v-list-item-content style="display:flex">
              <v-list-item-title v-text="item.id"></v-list-item-title>
              <v-list-item-title v-text="item.input"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action @click="deleteItem(item.id)">
              <v-icon color="darken-3" class="delete-icon">
                {{ icons.mdiDelete }}
              </v-icon>

            </v-list-item-action>

          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-container style="text-align: center;margin-top: 50px;">
      <v-form ref="form">
        <v-text-field v-model="input" name="input" label="Input" required></v-text-field>
        <v-btn color="warning" @click="submit" :disabled='input ? false : true'>
          Add New Post
        </v-btn>
      </v-form>
    </v-container>

  </v-container>
</template>

<script>
import axios from 'axios'
import {
  mdiDelete,
} from '@mdi/js'

export default {
  name: 'IndexPage',
  data: () => ({
    input: '',
    icons: {
      mdiDelete,
    },
  }),
  methods: {
    submit(e) {
      e.preventDefault()
      if (!this.input) return
      const newPost = {
        input: this.input
      }
      axios.post('http://127.0.0.1:5001/mamamia-test/us-central1/app/api/create', newPost)
        .then(res => console.log(res))
      //const docRef = await addDoc(collection(db, "mamamia"), newPost);

      this.input = ''

    },
    deleteItem(id) {
      axios.delete(`http://127.0.0.1:5001/mamamia-test/us-central1/app/api/delete/${id}`)
        .then(res => console.log(res))
    }
  }
}

</script>

<style>
.delete-icon:hover {
  opacity: .5;
}
</style>