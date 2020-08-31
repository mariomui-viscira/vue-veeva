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
        Home component
      </li>
    </ul>
  </div>
</template>

<script>
// import './Home.scss';
export default {
  name: 'Home',
};
</script>

<style scoped src="./Home.scss" lang="scss"></style>
