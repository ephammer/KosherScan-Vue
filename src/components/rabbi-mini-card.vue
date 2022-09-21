<template>
  <div class="rabbi-mini-card-container">
    <img :alt="image_alt" :src="image_src" class="rabbi-mini-card-image" />
    <span class="rabbi-mini-card-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'RabbiMiniCard',
  props: {
    image_src: {
      type: String,
      default: '/playground_assets/logo-1.svg',
    },
    text: {
      type: String,
      default: 'Text',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.rabbi-mini-card-container {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.rabbi-mini-card-image {
  width: 100px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius8);
}
.rabbi-mini-card-text {
  color: var(--dl-color-gray-800);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
}
@media(max-width: 1200px) {
  .rabbi-mini-card-image {
    border-radius: var(--dl-radius-radius-radius8);
  }
  .rabbi-mini-card-text {
    color: var(--dl-color-gray-800);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    padding-left: var(--dl-space-space-unit);
  }
}
@media(max-width: 767px) {
  .rabbi-mini-card-image {
    margin: var(--dl-space-space-unit);
  }
}
</style>
