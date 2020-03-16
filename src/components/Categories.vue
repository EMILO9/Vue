<template>
  <div class="Categories">
        <div class="Category" v-for="(c, index) in Categories" :key="c+index">
      <div class="catName">{{c.name}} <button class="eye" @click="setVisible(c)">
        <span v-if="!c.isVisible"><i class="fas fa-eye"></i></span>
        <span class="red" v-if="c.isVisible"><i class="fas fa-eye-slash"></i></span>
        </button></div>
      <div class="Topics" v-if="c.isVisible">
        <input class="Search" type="search" :placeholder="'Search in ' + c.name" @input="setSearch($event, c)">
        <div class="box" v-if="hide(c) > 0">
          <div class="Topic" v-for="(t, index) in filterTopics(c)" :key="t+index">{{t.name}}</div>
        </div>
        <div v-else class="noContent">No content</div>
        <div class="Pagination">
          <button class="btn" :class="{'btnDisabled': c.pagination[0] === 0}" @click="prev(c)">Prev</button>
          <button class="btn" :class="{'btnDisabled': c.pagination[1] >= checkSize(c)}" @click="next(c)">Next</button>
          </div>
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
    prev (c) {
      if (c.pagination[0] >= 1) {
        c.pagination[0] -= 5
        c.pagination[1] -= 5
        this.$forceUpdate()
      }
    },
    next (c) {
      let checkSize = this.Topics.filter(t => t.id === c.id).length
      if (c.pagination[1] < checkSize) {
        c.pagination[0] += 5
        c.pagination[1] += 5
        this.$forceUpdate()
      }
    },
    setSearch (e, c) {
      c.search = e.target.value
      c.pagination[0] = 0
      c.pagination[1] = 5
    },
    checkSize (c) {
      return this.Topics.filter(t => t.id === c.id).length
    },
    hide (c) {
      let check = this.Topics.filter(t => t.id === c.id).length
      return check
    }
  }
}
</script>
