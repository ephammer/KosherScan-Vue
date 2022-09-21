<template>
  <div class="feature-card-container">
    <img :alt="image_alt" :src="image_src" class="feature-card-image" />
    <h5 class="feature-card-text headline5">{{ card_title }}</h5>
    <span class="feature-card-text1">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    card_title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
    },
    image_src: {
      type: String,
      default: '/playground_assets/01.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.feature-card-container {
  width: 320px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.feature-card-image {
  width: var(--dl-size-size-doubleunit);
  height: var(--dl-size-size-doubleunit);
  object-fit: cover;
}
.feature-card-text {
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.feature-card-text1 {
  text-align: center;
}
@media(max-width: 1200px) {
  .feature-card-image {
    width: var(--dl-size-size-doubleunit);
    height: var(--dl-size-size-doubleunit);
  }
}
</style>
