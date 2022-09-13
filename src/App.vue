<script setup>
import TheCompositionApiStopwatch from "./components/TheCompositionApiStopwatch.vue";
import TheOptionsApiStopwatch from "./components/TheOptionsApiStopwatch.vue";
</script>

<template>
  <main>
    <div>
      <TheCompositionApiStopwatch class="stopwatch" />
    </div>
    <div class="separator" />
    <div>
      <TheOptionsApiStopwatch class="stopwatch" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
}

.stopwatch {
  margin-left: 16px;
  margin-right: 16px;
}

.separator {
  min-height: 100vh;
  min-width: 1px;
  background: rgba(0, 0, 0, 0.12);
}
</style>
