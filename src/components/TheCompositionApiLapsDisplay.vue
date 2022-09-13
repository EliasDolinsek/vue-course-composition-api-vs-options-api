<script setup>
import { formatSecondsToReadableTime } from "../utils/utils";

const props = defineProps({
  laps: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["clearLaps"]);
</script>

<template>
  <div class="action-title">
    <p>Laps</p>
    <span class="material-symbols-outlined" @click="$emit('clearLaps')">
      close
    </span>
  </div>
  <div>
    <div v-for="(lap, index) in laps" :key="index" class="lab-item">
      <p>Lap #{{ laps.length - index }}</p>
      <p>{{ formatSecondsToReadableTime(lap) }}</p>
    </div>
  </div>
</template>

<style scoped>
.action-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-left: 16px;
  padding-left: 16px;
  margin-right: 16px;
  padding-right: 16px;
  color: #1c1b1f;
}

.action-title > span {
  cursor: pointer;
}

.action-title > span:hover {
  color: red;
}

.lab-item {
  display: flex;
  justify-content: space-between;
  color: #1c1b1f;
  font-weight: 0.4rem;
  margin-left: 32px;
  margin-right: 32px;
}
</style>
