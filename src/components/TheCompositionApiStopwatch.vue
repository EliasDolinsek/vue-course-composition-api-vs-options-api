<script setup>
import "./../assets/stopwatch.css";
import { computed } from "@vue/reactivity";
import { reactive } from "vue";
import { formatSecondsToReadableTime } from "../utils/utils";
import TheCompositionApiLapsDisplay from "./TheCompositionApiLapsDisplay.vue";

const stopwatchData = reactive({
  seconds: 0,
  interval: null,
  laps: [],
});

const start = () => {
  stopwatchData.interval = setInterval(() => {
    stopwatchData.seconds++;
  }, 1000);
};

const stop = () => {
  clearInterval(stopwatchData.interval);
  stopwatchData.interval = null;
};

const clearLaps = () => {
  stopwatchData.laps = [];
};

const reset = () => {
  stopwatchData.seconds = 0;
  clearLaps();
};

const recordLap = () => {
  stopwatchData.laps.unshift(stopwatchData.seconds);
};

const isStopwatchRunning = computed(() => {
  return stopwatchData.interval != null;
});

const isStopwatchResettable = computed(() => {
  return !isStopwatchRunning.value && stopwatchData.seconds > 0;
});

const formattedRunningTime = computed(() => {
  return formatSecondsToReadableTime(stopwatchData.seconds);
});
</script>

<template>
  <p class="api-title">Composition API</p>
  <div class="stopwatch-container">
    <h1 class="time-display">{{ formattedRunningTime }}</h1>
    <div class="buttons-container">
      <button v-if="isStopwatchRunning" @click="stop" class="button button-red">
        Stop
      </button>
      <button v-else @click="start" class="button button-green">Start</button>
      <button v-if="isStopwatchResettable" @click="reset" class="button">
        Reset
      </button>
      <button v-else @click="recordLap" class="button button-red-dark">
        Lap
      </button>
    </div>
  </div>
  <TheCompositionApiLapsDisplay :laps="stopwatchData.laps" @clear-laps="clearLaps" />
</template>

<style scoped></style>
