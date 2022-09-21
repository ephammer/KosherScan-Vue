<template>
  <div class="feature-tile-container" v-bind:class="rootClassName">
    <svg viewBox="0 0 950.8571428571428 1024" class="feature-tile-icon">
      <path
        d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"
      ></path>
    </svg>
    <span class="feature-tile-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'FeatureTile',
  props: {
    text: {
      type: String,
      default: 'Text',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.feature-tile-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.feature-tile-icon {
  width: 24px;
  height: 24px;
}
@media(max-width: 1200px) {
  .feature-tile-container {
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .feature-tile-icon {
    fill: var(--dl-color-pink-default);
  }
  .feature-tile-text {
    font-style: normal;
    font-weight: 500;
    padding-left: var(--dl-space-space-unit);
  }
}
</style>
