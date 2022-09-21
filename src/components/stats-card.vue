<template>
  <div class="stats-card-container">
    <img :alt="image_alt" :src="image_src" class="stats-card-image" />
    <div class="stats-card-container1">
      <h1 class="headline4">{{ number }}</h1>
      <span class="body1">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    number: {
      type: String,
      default: '10',
    },
    image_src: {
      type: String,
      default: '/playground_assets/05.svg',
    },
    description: {
      type: String,
      default: 'Description',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.stats-card-container {
  width: 200px;
  margin: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
}
.stats-card-image {
  width: 32px;
  object-fit: cover;
  margin-right: var(--dl-space-space-unit);
}
.stats-card-container1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
