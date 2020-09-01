<template>
  <div>
    <img width="100" height="100" v-bind:src="firstImage" alt="" class="src" />
    <ul class="list">
      <li>
        Home component
      </li>
    </ul>
  </div>
</template>

<script>
// import './Home.scss';
import firstImage from '../../images/firstimage-asset.png?subview=firstslide';
export default {
  name: 'Home',
  data() {
    return {
      firstImage,
    };
  },
};
</script>

<style scoped src="./Home.scss" lang="scss"></style>
