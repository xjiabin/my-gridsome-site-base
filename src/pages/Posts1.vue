<template>
  <layout>
    <div>
      <h1>Posts 1</h1>
      <ul>
        <li v-for="item in posts" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post1',
  data() {
    return {
      posts: []
    }
  },
  async created () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data
  }
}
</script>

<style>

</style>