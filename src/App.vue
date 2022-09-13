<script setup>
import TheCompositionApiStopwatch from './components/TheCompositionApiStopwatch.vue';
</script>

<template>
  <main>
    <div>
      <TheCompositionApiStopwatch class="stopwatch"/>
    </div>
    <p>Test</p>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.stopwatch {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
