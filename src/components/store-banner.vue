<template>
  <div class="store-banner-store-banner" v-bind:class="rootClassName">
    <a
      href="https://play.google.com/store/apps/details?id=app.kosherscan.kosher_scan"
      target="_blank"
      rel="noreferrer noopener"
      class="store-banner-link"
    >
      <img :alt="image_alt1" :src="image_src1" class="store-banner-image" />
    </a>
    <a
      href="https://apps.apple.com/us/app/kosherscan-app/id1549559357"
      target="_blank"
      rel="noreferrer noopener"
      class="store-banner-link1"
    >
      <img :alt="image_alt" :src="image_src" class="store-banner-image1" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'StoreBanner',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default: '/playground_assets/app-store-badge-200h.png',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/google-play-badge-200h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.store-banner-store-banner {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.store-banner-link {
  display: contents;
}
.store-banner-image {
  width: 135px;
  object-fit: cover;
  transition: 0.3s;
  text-decoration: none;
}
.store-banner-image:hover {
  width: 140px;
}
.store-banner-link1 {
  display: contents;
}
.store-banner-image1 {
  width: 135px;
  object-fit: cover;
  transition: 0.3s;
  margin-left: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.store-banner-image1:hover {
  width: 140px;
}

</style>
