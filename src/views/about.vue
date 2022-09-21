<template>
  <div class="about-container">
    <div data-role="Header" class="about-header-container">
      <header class="about-header">
        <div class="about-logo">
          <router-link to="/" class="about-navlink">
            <img
              alt="image"
              src="/playground_assets/logo.svg"
              class="about-image"
            />
          </router-link>
        </div>
        <div class="about-menu">
          <router-link to="/about" class="about-navlink1">About</router-link>
          <router-link to="/memberships" class="about-text">
            Memberships
          </router-link>
          <router-link to="/download" class="about-navlink2">
            Download
          </router-link>
        </div>
        <div class="about-container01"><store-banner></store-banner></div>
        <div data-type="BurgerMenu" class="about-burger-menu">
          <svg viewBox="0 0 1024 1024" class="about-menu1">
            <path
              d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
            <path
              d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
            <path
              d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
          </svg>
        </div>
      </header>
      <div data-type="MobileMenu" class="about-mobile-menu">
        <div class="about-top">
          <div class="about-logo1">
            <router-link to="/" class="about-navlink3">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                class="about-image1"
              />
            </router-link>
          </div>
          <div data-type="CloseMobileMenu" class="about-close-menu">
            <svg viewBox="0 0 1024 1024" class="about-icon03">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="about-mid">
          <router-link to="/about" class="about-navlink4">About</router-link>
          <router-link to="/memberships" class="about-text01">
            Memberships
          </router-link>
          <router-link to="/download" class="about-navlink5">
            Download
          </router-link>
        </div>
      </div>
    </div>
    <div class="about-feature1">
      <div class="about-container02">
        <img
          alt="image"
          src="/playground_assets/iphone%2012%20_%2012%20pro1-400w.png"
          image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
          class="about-image2"
        />
      </div>
      <div class="about-container03">
        <h3 class="headline3">About KosherScan</h3>
        <span class="about-text03">
          <span>
            When I started designing KosherScan, my goal was to remove all the
            complexities and give Jewish consumers a simple way to get answers
            about the Kashruth status of food products from their trusted Kosher
            Authority. But simple wasn&apos;t enough. Consumers needed a product
            that was meaningful and enjoyable to use. This meant designing an app
            that doesn&apos;t look like it was designed 20 years ago. Where did
            the idea come from? Over the years, Jewish consumers all over the
            world started to build online communities where they exchanged about
            the Kashruth status of food products. These communities can be hard to
            navigate. Missing or misspelled product names are making already
            answered products hard to find or create multiple answers. Almost
            every product in a grocery store has a barcode. KosherScan gives
            consumers an easy way to find and query a food product kashruth status
            by scanning a product barcode. Today, thousands of users have gotten
            more than 17,000 answers. I am just getting started. Thanks for
            joining the journey.
          </span>
          <br class="lead1" />
          <span class="lead1">❤️</span>
          <br class="lead1" />
          <span class="lead1">Ephraim Hammer</span>
        </span>
        <router-link to="/download" class="about-navlink6">
          <link-icon-button
            text="Get Started"
            class="about-component1"
          ></link-icon-button>
        </router-link>
      </div>
    </div>
    <div class="about-footer">
      <footer class="about-container04">
        <router-link to="/" class="about-navlink7">
          <img
            alt="image"
            src="/playground_assets/logo-white.svg"
            class="about-image3"
          />
        </router-link>
        <div class="about-container05">
          <router-link to="/privacy-policy" class="about-navlink8">
            Privacy Policy
          </router-link>
        </div>
        <span>Made with ❤️ by Ephraim Hammer</span>
        <div class="about-divider"></div>
        <div class="about-container06">
          <span class="about-text10 body2">
            © 2022 KosherScan. All rights reserved
          </span>
          <div class="about-container07">
            <a
              href="https://instagram.com/KosherScan"
              target="_blank"
              rel="noreferrer noopener"
              class="about-link"
            >
              <div class="about-container08">
                <svg viewBox="0 0 877.7142857142857 1024" class="about-icon05">
                  <path
                    d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://t.me/kosherScan"
              target="_blank"
              rel="noreferrer noopener"
              class="about-link1"
            >
              <div class="about-container09">
                <svg viewBox="0 0 1024 1024" class="about-icon07">
                  <path
                    d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/KosherScanApp"
              target="_blank"
              rel="noreferrer noopener"
              class="about-link2"
            >
              <div class="about-container10">
                <svg viewBox="0 0 950.8571428571428 1024" class="about-icon09">
                  <path
                    d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.facebook.com/KosherScanApp"
              target="_blank"
              rel="noreferrer noopener"
              class="about-link3"
            >
              <div class="about-container11">
                <svg viewBox="0 0 877.7142857142857 1024" class="about-icon11">
                  <path
                    d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import StoreBanner from '../components/store-banner'
import LinkIconButton from '../components/link-icon-button'

export default {
  name: 'About',
  components: {
    StoreBanner,
    LinkIconButton,
  },
  metaInfo: {
    title: 'About - KosherScan',
    meta: [
      {
        name: 'description',
        content:
          'Discover kosher grocery product. Ask your Rabbi! Is it Kosher?',
      },
      {
        property: 'og:title',
        content: 'About - KosherScan',
      },
      {
        property: 'og:description',
        content:
          'Discover kosher grocery product. Ask your Rabbi! Is it Kosher?',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/783bdde3-343d-4254-9442-dc8a63b66175/9029e855-057f-4fcd-9e51-402b830d77ba?org_if_sml=1',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.about-header-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.about-header {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  position: relative;
  max-width: 1110px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-logo {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-navlink {
  display: contents;
}
.about-image {
  width: auto;
  height: 35px;
  object-fit: cover;
  text-decoration: none;
}
.about-menu {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.about-navlink1 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-navlink1:hover {
  color: var(--dl-color-turquoise-default);
}
.about-text {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-text:hover {
  color: var(--dl-color-turquoise-default);
}
.about-navlink2 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-navlink2:hover {
  color: var(--dl-color-turquoise-default);
}
.about-container01 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-menu1 {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
}
.about-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-doubleunit);
  z-index: 101;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.about-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}
.about-logo1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-navlink3 {
  display: contents;
}
.about-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.about-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.about-icon03 {
  width: 24px;
  height: 24px;
}
.about-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.about-navlink4 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-navlink4:hover {
  color: var(--dl-color-turquoise-default);
}
.about-text01 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-text01:hover {
  color: var(--dl-color-turquoise-default);
}
.about-navlink5 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.about-navlink5:hover {
  color: var(--dl-color-turquoise-default);
}
.about-feature1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  max-width: 1110px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.about-container02 {
  flex: 0 0 auto;
  width: 540px;
  height: 540px;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-orange-default);
}
.about-image2 {
  width: 360px;
  margin-top: 100px;
  object-fit: cover;
}
.about-container03 {
  flex: 1;
  margin: var(--dl-space-space-doubleunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.about-text03 {
  max-width: 400px;
  margin-top: var(--dl-space-space-doubleunit);
  text-align: justify;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.about-navlink6 {
  display: contents;
}
.about-component1 {
  text-decoration: none;
}
.about-footer {
  flex: 0 0 auto;
  color: var(--dl-color-gray-white);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.about-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  flex-wrap: wrap;
  max-width: 1110px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.about-navlink7 {
  display: contents;
}
.about-image3 {
  width: 120px;
  object-fit: cover;
  text-decoration: none;
}
.about-container05 {
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: flex-start;
}
.about-navlink8 {
  transition: 0.3s;
  white-space: nowrap;
  text-decoration: none;
}
.about-navlink8:hover {
  color: var(--dl-color-turquoise-default);
}
.about-divider {
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: var(--dl-color-gray-white);
}
.about-container06 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.about-text10 {
  color: var(--dl-color-gray-300);
  margin-top: var(--dl-space-space-unit);
}
.about-container07 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.about-link {
  display: contents;
}
.about-container08 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.about-icon05 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-unit);
  height: var(--dl-size-size-unit);
  transition: 0.3s;
}
.about-icon05:hover {
  fill: var(--dl-color-purple-default);
}
.about-link1 {
  display: contents;
}
.about-container09 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.about-icon07 {
  fill: #D9D9D9;
  width: 16px;
  height: 16px;
}
.about-link2 {
  display: contents;
}
.about-container10 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.about-icon09 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-unit);
  height: var(--dl-size-size-unit);
  transition: 0.3s;
}
.about-icon09:hover {
  fill: var(--dl-color-turquoise-default);
}
.about-link3 {
  display: contents;
}
.about-container11 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.about-icon11 {
  fill: #D9D9D9;
  width: 16px;
  height: 16px;
}
@media(max-width: 1200px) {
  .about-navlink1 {
    color: var(--dl-color-purple-900);
  }
  .about-text {
    text-decoration: none;
  }
  .about-navlink4 {
    color: var(--dl-color-purple-900);
  }
  .about-text01 {
    text-decoration: none;
  }
  .about-container02 {
    background-color: #e36414;
  }
  .about-container03 {
    position: relative;
  }
  .about-text03 {
    align-self: flex-start;
    text-align: justify;
  }
  .about-icon07 {
    fill: var(--dl-color-gray-white);
    width: 14px;
    height: 16px;
  }
  .about-icon11 {
    fill: var(--dl-color-gray-white);
    width: 15px;
    height: 15px;
  }
}
@media(max-width: 991px) {
  .about-container01 {
    display: none;
  }
  .about-feature1 {
    flex-direction: column;
  }
  .about-container03 {
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .about-menu {
    display: none;
  }
  .about-burger-menu {
    display: block;
  }
  .about-container05 {
    flex-wrap: wrap;
    justify-content: center;
  }
  .about-container06 {
    flex-direction: column;
  }
  .about-text10 {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 375px) {
  .about-container01 {
    display: none;
  }
  .about-mobile-menu {
    display: none;
  }
}
</style>
