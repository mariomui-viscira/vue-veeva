<template>
  <div>
    <ul class="list">
      <li>
        <!-- <li 
        v-for="(article, index) in articles" 
        :key="index"
      >
        <h2 class="list__title">
          {{ article.title }}
        </h2>
        <p class="list__content">
          {{ article.body }}
        </p> -->
        <example></example>
        About component
      </li>
      s
    </ul>
  </div>
</template>

<script>
import example from '../../components/exampleCmp.vue';
export default {
  name: 'About',
  components: {
    example,
  },
};
</script>

<style scoped src="./About.scss" lang="scss"></style>
