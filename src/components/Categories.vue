<template>
  <div class="Categories">
        <div class="Category" v-for="(c, index) in Categories" :key="c+index">
      <div class="catName">{{c.name}} <button @click="setVisible(c)">+</button></div>
      <div class="Topics" v-if="c.isVisible">
        <input class="Search" type="search" :placeholder="'Search in ' + c.name" v-model="c.search">
        <div class="Topic" v-for="(t, index) in filterTopics(c)" :key="t+index">{{t.name}}</div>
        <div class="Pagination"><button @click="prev(c)">Prev</button> <button @click="next(c)">Next</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Categories',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'Categories',
      'Topics'
    ])
  },
  methods: {
    setVisible (c) {
      this.Categories.map(cat => {
        if (cat !== c) cat.isVisible = false
      })
      c.isVisible = !c.isVisible
    },
    filterTopics (c) {
      return this.Topics.filter(t => t.id === c.id && t.name.toLowerCase().includes(c.search.toLowerCase())).slice(c.pagination[0], c.pagination[1])
    },
    prev (c) { c.pagination[0] -= 5; c.pagination[1] -= 5; this.$forceUpdate() },
    next (c) { c.pagination[0] += 5; c.pagination[1] += 5; this.$forceUpdate() }
  }
}
</script>
