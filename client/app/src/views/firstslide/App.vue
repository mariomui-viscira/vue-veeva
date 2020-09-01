<template>
  <div id="#app">
    <header>
      <h1 class="title">
        <!-- {{ title }} -->
      </h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'About' }">
              About
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
