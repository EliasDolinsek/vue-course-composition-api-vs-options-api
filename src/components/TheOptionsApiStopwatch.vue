<script>
import { formatSecondsToReadableTime } from "../utils/utils";
import LapsDisplay from "./LapsDisplay.vue";

export default {
  name: "TheOptionsApiStopwatch",
  components: { LapsDisplay },
  data: () => {
    return {
      seconds: 0,
      interval: null,
      laps: [],
    };
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    },
    clearLaps() {
      this.laps = [];
    },
    reset() {
      this.seconds = 0;
      this.clearLaps();
    },
    recordLap() {
      this.laps.unshift(this.seconds);
    },
  },
  computed: {
    isStopwatchRunning() {
      return this.interval != null;
    },
    isStopwatchResettable() {
      return !this.isStopwatchRunning && this.seconds > 0;
    },
    formattedRunningTime() {
      return formatSecondsToReadableTime(this.seconds);
    },
  },
  components: { LapsDisplay },
};
</script>

<template>
  <p class="api-title">Options API</p>
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
  <LapsDisplay :laps="laps" @clear-laps="clearLaps" />
</template>

<style scoped></style>
