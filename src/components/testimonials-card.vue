<template>
  <div class="testimonials-card-container">
    <img :alt="image_alt" :src="image_src" class="testimonials-card-image" />
    <div class="testimonials-card-container1">
      <img :alt="image_alt1" :src="image_src1" class="testimonials-card-image1" />
      <div class="testimonials-card-container2">
        <span class="testimonials-card-text lead1">{{ text }}</span>
        <span class="subtitle1">{{ text1 }}</span>
        <span class="testimonials-card-text2 lead2">{{ text2 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsCard',
  props: {
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text2: {
      type: String,
      default: 'Vice President, GoPro',
    },
    text1: {
      type: String,
      default: 'Floyd Miles',
    },
    text: {
      type: String,
      default:
        'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
    },
    image_src: {
      type: String,
      default:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/quote-mark.svg',
    },
  },
}
</script>

<style scoped>
.testimonials-card-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.07);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.testimonials-card-image {
  width: 100px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.testimonials-card-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.testimonials-card-image1 {
  top: 81px;
  left: 46px;
  right: auto;
  width: 15px;
  bottom: auto;
  object-fit: cover;
}
.testimonials-card-container2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.testimonials-card-text {
  margin-bottom: var(--dl-space-space-doubleunit);
}
.testimonials-card-text2 {
  color: var(--dl-color-gray-700);
}
@media(max-width: 1200px) {
  .testimonials-card-image {
    width: auto;
    height: 50px;
  }
}
</style>
