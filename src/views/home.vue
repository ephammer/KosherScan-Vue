<template>
  <div class="home-container">
    <div data-role="Header" class="home-header-container">
      <header class="home-header">
        <div class="home-logo">
          <router-link to="/" class="home-navlink">
            <img
              alt="image"
              src="/playground_assets/logo.svg"
              class="home-image"
            />
          </router-link>
        </div>
        <div class="home-menu">
          <router-link to="/about" class="home-navlink1">About</router-link>
          <a href="#features" class="home-link">Features</a>
          <router-link to="/memberships" class="home-text">
            Memberships
          </router-link>
          <router-link to="/download" class="home-navlink2">Download</router-link>
        </div>
        <div class="home-container01"><store-banner></store-banner></div>
        <div data-type="BurgerMenu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-menu1">
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
      <div data-type="MobileMenu" class="home-mobile-menu">
        <div class="home-top">
          <div class="home-logo1">
            <router-link to="/" class="home-navlink3">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                class="home-image1"
              />
            </router-link>
          </div>
          <div data-type="CloseMobileMenu" class="home-close-menu">
            <svg viewBox="0 0 1024 1024" class="home-icon03">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="home-mid">
          <router-link to="/about" class="home-navlink4">About</router-link>
          <a href="#features" class="home-link1">Features</a>
          <router-link to="/memberships" class="home-text01">
            Memberships
          </router-link>
          <router-link to="/download" class="home-navlink5">Download</router-link>
        </div>
      </div>
    </div>
    <div class="home-main">
      <div class="home-blur-background"></div>
      <img
        alt="image"
        src="/playground_assets/turquoise-circle.svg"
        class="home-turquoise-cirble"
      />
      <img
        alt="image"
        src="/playground_assets/purple-circle.svg"
        class="home-purple-circle"
      />
      <img alt="image" src="/playground_assets/left.svg" class="home-left" />
      <img alt="image" src="/playground_assets/right.svg" class="home-right" />
      <div class="home-hero">
        <div class="home-container02">
          <h1 class="home-text02 headline1">
            <span>Check the Kosher Status</span>
            <br />
            <span>of your groceries.</span>
            <br />
          </h1>
          <store-banner
            rootClassName="store-banner-root-class-name"
          ></store-banner>
        </div>
        <img
          alt="image"
          src="/playground_assets/iphone%2012%20_%2012%20pro-1500h.png"
          class="home-image2"
        />
      </div>
    </div>
    <div class="home-clients">
      <div class="home-divider"></div>
      <rabbi-mini-card
        text="Rav Michael Gabison"
        image_src="/playground_assets/rav_gabison_color-200h.png"
      ></rabbi-mini-card>
      <rabbi-mini-card
        text="Rav Shlomo Afanasev"
        image_src="/playground_assets/rav_shlomo_afanasev-200h.jpeg"
      ></rabbi-mini-card>
      <div class="home-divider1"></div>
    </div>
    <div id="features" class="home-features">
      <h2 class="headline2 home-text07">Tailor-made features</h2>
      <span class="home-text08">Made with ❤️ for our users.</span>
      <div class="home-features1">
        <feature-card
          text="Each of our products was asked by a user. Answered by a Rabbi."
          image_src="/playground_assets/group_icon_color.svg"
          card_title="Crowdsourced Products"
        ></feature-card>
        <feature-card
          text="Lightning-fast barcode scanning allows each product to be found in a matter of a second."
          image_src="/playground_assets/barcode_scan_color.svg"
          card_title="Barcode Scan"
        ></feature-card>
        <feature-card
          text="Get notifications when your question gets answered."
          image_src="/playground_assets/notifications_color1.svg"
          card_title="Notifications"
        ></feature-card>
        <feature-card
          text="Browse thousands of already answered products."
          image_src="/playground_assets/07.svg"
          card_title="Browse"
        ></feature-card>
        <feature-card
          text="We hate ads as much as you do. No ads that clutter the app and ruin your experience."
          image_src="/playground_assets/block_color.svg"
          card_title="No Ads"
        ></feature-card>
        <feature-card
          text="Filter products by store and status."
          image_src="/playground_assets/06.svg"
          card_title="Filters"
        ></feature-card>
      </div>
    </div>
    <div class="home-testimonials">
      <div class="home-container03">
        <div class="home-container04">
          <img
            alt="image"
            src="/playground_assets/quote-mark.svg"
            class="home-image3"
          />
          <h1 class="home-text09 headline2">Real Reviews from Real Customers</h1>
          <div class="home-container05">
            <testimonials-card
              text="An excellent application, the number of kosher products in large European food chains such as REWE LIDL and more simply scan the barcode of the product and receive information on whether it is kosher/dairy. A must-have app for a kosher-keeping traveler!"
              text1="אדיר פלד"
              text2="PlayStore User"
              image_src="/playground_assets/google_play-logo.wine.svg"
            ></testimonials-card>
          </div>
        </div>
        <div class="home-container06">
          <div class="home-container07">
            <testimonials-card
              src="/playground_assets/logo-1.svg"
              text="Practical and quickly become essential thank you for this work!"
              text1=" E. Raphael"
              text2="PlayStore User"
              image_src="/playground_assets/google_play-logo.wine.svg"
            ></testimonials-card>
          </div>
          <div class="home-container08">
            <testimonials-card
              text="Super praktisch und einfach zu benutzen ⭐️⭐️⭐️⭐️⭐️"
              text1="tamar2438"
              text2="AppStore User"
              image_src="/playground_assets/app_store_%5Bios%5D.svg"
            ></testimonials-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-achievements">
      <div class="home-container09">
        <h2 class="home-text10">
          <span>
            Our almost 2 years of
            <span v-html="rawj57b"></span>
          </span>
          <br />
          <span>achievements</span>
        </h2>
        <span class="home-text14">
          <span class="home-text15">
            With our super powers we have reached this
          </span>
        </span>
      </div>
      <div class="home-container10">
        <div class="home-container11">
          <stats-card
            number="17,000+"
            image_src="/playground_assets/01.svg"
            description="Answered Products"
          ></stats-card>
          <stats-card
            number="10,000"
            image_src="/playground_assets/04.svg"
            description="Users"
          ></stats-card>
        </div>
        <div class="home-container12"></div>
      </div>
    </div>
    <div class="home-feature1">
      <div class="home-container13">
        <img
          alt="image"
          src="/playground_assets/iphone%2012%20_%2012%20pro1-400w.png"
          image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
          class="home-image4"
        />
      </div>
      <div class="home-container14">
        <h3 class="headline3">Discover. Scan. Ask</h3>
        <span class="home-text17">
          <span class="home-text18 lead1">
            Discover thousands of products. Filter them by store and use the
            search bar to search by category. 
          </span>
          <br />
          <span>Get instant results with the barcode scanner. </span>
          <br />
          <span>Ask missing products and get fast answers by your Rabbi.</span>
          <br />
        </span>
        <router-link to="/download" class="home-navlink6">
          <link-icon-button
            text="Get Started"
            class="home-component15"
          ></link-icon-button>
        </router-link>
      </div>
    </div>
    <div class="home-feature2">
      <div class="home-container15">
        <h2 class="headline2 home-text24">
          Enter the 21st century kosher shopping experience
        </h2>
        <span class="home-text25">
          <span class="home-text26 lead1">
            No more outdated lists of kosher products. No more apps that look like
            they where made before the invention of the internet. No more guessing
            if a product is Kosher. 
          </span>
          <br />
          <span>Welcome to the new way to go kosher shopping.</span>
          <br />
        </span>
      </div>
      <img
        alt="image"
        src="/playground_assets/featuregraphic-1200w.png"
        image_src="/playground_assets/iphonex-1200w.png"
        class="home-image5"
      />
    </div>
    <div class="home-c-t-a">
      <div class="home-container16">
        <div class="home-container17">
          <h2 class="headline2 home-text30">Consult your Rabbi on the go</h2>
          <span class="home-text31 lead1">
            Download the app to consult your Rabbi about groceries on the go.
            Simply scan the barcode and get an answer.
          </span>
          <span class="home-text32 subtitle2">
            <span class="home-text33">Get the App</span>
          </span>
          <router-link to="/download" class="home-navlink7">
            <store-banner class="home-component16"></store-banner>
          </router-link>
        </div>
        <div class="home-container18">
          <img
            alt="image"
            src="/playground_assets/iphone%2012%20_%2012%20pro1-400w.png"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            class="home-image6"
          />
          <img
            alt="image"
            src="/playground_assets/iphone%2012%20_%2012%20pro-1500h.png"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            class="home-image7"
          />
        </div>
      </div>
    </div>
    <div class="home-footer">
      <footer class="home-container19">
        <img
          alt="image"
          src="/playground_assets/logo-white.svg"
          class="home-image8"
        />
        <div class="home-container20">
          <router-link to="/privacy-policy" class="home-navlink8">
            Privacy Policy
          </router-link>
        </div>
        <span>Made with ❤️ by Ephraim Hammer</span>
        <div class="home-divider2"></div>
        <div class="home-container21">
          <span class="home-text35 body2">
            © 2022 KosherScan. All rights reserved
          </span>
          <div class="home-container22">
            <a
              href="https://instagram.com/KosherScan"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link2"
            >
              <div class="home-container23">
                <svg viewBox="0 0 877.7142857142857 1024" class="home-icon05">
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
              class="home-link3"
            >
              <div class="home-container24">
                <svg viewBox="0 0 1024 1024" class="home-icon07">
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
              class="home-link4"
            >
              <div class="home-container25">
                <svg viewBox="0 0 950.8571428571428 1024" class="home-icon09">
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
              class="home-link5"
            >
              <div class="home-container26">
                <svg viewBox="0 0 877.7142857142857 1024" class="home-icon11">
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
import RabbiMiniCard from '../components/rabbi-mini-card'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'

export default {
  name: 'Home',
  components: {
    StoreBanner,
    RabbiMiniCard,
    FeatureCard,
    TestimonialsCard,
    StatsCard,
    LinkIconButton,
  },

  data() {
    return {
      rawj57b: ' ',
    }
  },

  metaInfo: {
    title: 'KosherScan',
    meta: [
      {
        name: 'description',
        content:
          'Discover kosher grocery product. Ask your Rabbi! Is it Kosher?',
      },
      {
        property: 'og:title',
        content: 'KosherScan',
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
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-header-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-header {
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
.home-logo {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-navlink {
  display: contents;
}
.home-image {
  width: auto;
  height: 35px;
  object-fit: cover;
  text-decoration: none;
}
.home-menu {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-navlink1 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-navlink1:hover {
  color: var(--dl-color-turquoise-default);
}
.home-link {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-link:hover {
  color: var(--dl-color-turquoise-default);
}
.home-text {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-text:hover {
  color: var(--dl-color-turquoise-default);
}
.home-navlink2 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-navlink2:hover {
  color: var(--dl-color-turquoise-default);
}
.home-container01 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-menu1 {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
}
.home-mobile-menu {
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
.home-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: space-between;
}
.home-logo1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-navlink3 {
  display: contents;
}
.home-image1 {
  width: 100px;
  object-fit: cover;
  text-decoration: none;
}
.home-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-icon03 {
  width: 24px;
  height: 24px;
}
.home-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-navlink4 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-navlink4:hover {
  color: var(--dl-color-turquoise-default);
}
.home-link1 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-link1:hover {
  color: var(--dl-color-turquoise-default);
}
.home-text01 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-text01:hover {
  color: var(--dl-color-turquoise-default);
}
.home-navlink5 {
  transition: 0.3s;
  margin-right: var(--dl-space-space-doubleunit);
  text-decoration: none;
}
.home-navlink5:hover {
  color: var(--dl-color-turquoise-default);
}
.home-main {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-blur-background {
  top: 0px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  filter: blur(60px);
  height: 70vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
}
.home-turquoise-cirble {
  top: 439px;
  left: auto;
  right: 430px;
  width: 170px;
  bottom: auto;
  filter: blur(60px);
  opacity: 0.6;
  position: absolute;
  object-fit: cover;
}
.home-purple-circle {
  top: -100px;
  left: auto;
  right: -26px;
  width: 400px;
  bottom: auto;
  filter: blur(60px);
  opacity: 0.4;
  position: absolute;
  object-fit: cover;
}
.home-left {
  top: 653px;
  left: 0px;
  right: auto;
  width: 420px;
  bottom: auto;
  position: absolute;
  object-fit: cover;
}
.home-right {
  top: 441px;
  left: auto;
  right: 0px;
  width: 612px;
  bottom: auto;
  position: absolute;
  object-fit: cover;
}
.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: 80vh;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  max-width: 1110px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-text02 {
  width: 864px;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-image2 {
  width: 320px;
  object-fit: cover;
}
.home-clients {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  z-index: 100;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;
  max-width: 1110px;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-doubleunit);
  justify-content: space-between;
}
.home-divider {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  height: 1px;
  position: absolute;
  background: linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%);;
}
.home-divider1 {
  top: auto;
  left: auto;
  right: auto;
  width: 100%;
  bottom: 0px;
  height: 1px;
  position: absolute;
  background: linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%);;
}
.home-features {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  max-width: 1110px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text08 {
  max-width: 500px;
  text-align: center;
}
.home-features1 {
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-testimonials {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-tripleunit);
  justify-content: center;
  background-color: var(--dl-color-turquoise-100);
}
.home-container03 {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-container04 {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.home-image3 {
  top: -22px;
  left: -65px;
  right: auto;
  width: 100px;
  bottom: auto;
  z-index: 10;
  position: absolute;
  object-fit: cover;
}
.home-text09 {
  z-index: 100;
  max-width: 500px;
}
.home-container05 {
  flex: 0 0 auto;
  width: 350px;
  display: flex;
  align-self: flex-end;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container06 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-doubleunit);
  flex-direction: column;
}
.home-container07 {
  width: 350px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container08 {
  width: 300px;
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  flex-direction: column;
}
.home-achievements {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  flex-wrap: wrap;
  max-width: 1110px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.home-container09 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text15 {
  white-space: pre-wrap;
}
.home-container10 {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container11 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-container12 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-feature1 {
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
.home-container13 {
  flex: 0 0 auto;
  width: 540px;
  height: 540px;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-purple-100);
}
.home-image4 {
  width: 360px;
  margin-top: 100px;
  object-fit: cover;
}
.home-container14 {
  flex: 1;
  margin: var(--dl-space-space-doubleunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text17 {
  max-width: 400px;
  margin-top: var(--dl-space-space-doubleunit);
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-text18 {
  white-space: pre-wrap;
}
.home-navlink6 {
  display: contents;
}
.home-component15 {
  text-decoration: none;
}
.home-feature2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  max-width: 1110px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container15 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.home-text25 {
  max-width: 400px;
  margin-top: var(--dl-space-space-doubleunit);
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-text26 {
  white-space: pre-wrap;
}
.home-image5 {
  width: 100%;
  height: 400px;
  margin-top: var(--dl-space-space-tripleunit);
  object-fit: cover;
}
.home-c-t-a {
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-turquoise-default);
}
.home-container16 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-doubleunit);
  z-index: 100;
  flex-wrap: wrap;
  max-width: 1110px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.home-container17 {
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text31 {
  max-width: 500px;
}
.home-text32 {
  max-width: 400px;
  margin-top: var(--dl-space-space-doubleunit);
  margin-bottom: var(--dl-space-space-halfunit);
}
.home-text33 {
  white-space: pre-wrap;
}
.home-navlink7 {
  display: contents;
}
.home-component16 {
  text-decoration: none;
}
.home-container18 {
  width: 520px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.home-image6 {
  top: -100px;
  left: auto;
  right: var(--dl-space-space-doubleunit);
  width: 232px;
  bottom: auto;
  position: absolute;
  object-fit: cover;
}
.home-image7 {
  top: auto;
  left: var(--dl-space-space-doubleunit);
  right: auto;
  width: 232px;
  bottom: -100px;
  position: absolute;
  object-fit: cover;
}
.home-footer {
  flex: 0 0 auto;
  color: var(--dl-color-gray-white);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-black);
}
.home-container19 {
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
.home-image8 {
  width: 120px;
  object-fit: cover;
}
.home-container20 {
  display: flex;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
  justify-content: flex-start;
}
.home-navlink8 {
  transition: 0.3s;
  white-space: nowrap;
  text-decoration: none;
}
.home-navlink8:hover {
  color: var(--dl-color-turquoise-default);
}
.home-divider2 {
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: var(--dl-color-gray-white);
}
.home-container21 {
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text35 {
  color: var(--dl-color-gray-300);
  margin-top: var(--dl-space-space-unit);
}
.home-container22 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-link2 {
  display: contents;
}
.home-container23 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.home-icon05 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-unit);
  height: var(--dl-size-size-unit);
  transition: 0.3s;
}
.home-icon05:hover {
  fill: var(--dl-color-purple-default);
}
.home-link3 {
  display: contents;
}
.home-container24 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.home-icon07 {
  width: 24px;
  height: 24px;
}
.home-link4 {
  display: contents;
}
.home-container25 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.home-icon09 {
  fill: var(--dl-color-gray-white);
  width: var(--dl-size-size-unit);
  height: var(--dl-size-size-unit);
  transition: 0.3s;
}
.home-icon09:hover {
  fill: var(--dl-color-turquoise-default);
}
.home-link5 {
  display: contents;
}
.home-container26 {
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.home-icon11 {
  width: 24px;
  height: 24px;
}
@media(max-width: 1200px) {
  .home-link {
    text-decoration: none;
  }
  .home-text {
    text-decoration: none;
  }
  .home-link1 {
    text-decoration: none;
  }
  .home-text01 {
    text-decoration: none;
  }
  .home-container02 {
    width: 687px;
  }
  .home-image6 {
    top: -98px;
    right: -8px;
  }
  .home-icon07 {
    fill: var(--dl-color-gray-white);
    width: 14px;
    height: 16px;
  }
  .home-icon11 {
    fill: var(--dl-color-gray-white);
    width: 15px;
    height: 15px;
  }
}
@media(max-width: 991px) {
  .home-container01 {
    display: none;
  }
  .home-mobile-menu {
    display: none;
  }
  .home-hero {
    height: auto;
    flex-direction: column;
  }
  .home-container02 {
    align-items: center;
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .home-text02 {
    text-align: center;
  }
  .home-container03 {
    flex-direction: column;
  }
  .home-container05 {
    align-self: center;
    margin-bottom: var(--dl-space-space-doubleunit);
  }
  .home-container06 {
    align-items: center;
    margin-left: 0px;
  }
  .home-container08 {
    width: 350px;
  }
  .home-achievements {
    flex-direction: column;
  }
  .home-container10 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  .home-feature1 {
    flex-direction: column;
  }
  .home-container14 {
    margin-left: 0px;
    margin-right: 0px;
  }
  .home-container15 {
    align-items: flex-start;
    flex-direction: column;
  }
  .home-container18 {
    display: none;
  }
}
@media(max-width: 767px) {
  .home-menu {
    display: none;
  }
  .home-burger-menu {
    display: block;
  }
  .home-text02 {
    font-size: 50px;
    text-align: center;
  }
  .home-clients {
    justify-content: center;
  }
  .home-text07 {
    font-size: 40px;
  }
  .home-container04 {
    align-items: center;
  }
  .home-image3 {
    top: -2px;
    left: 21px;
    right: auto;
    width: 50px;
    bottom: auto;
  }
  .home-text09 {
    font-size: 40px;
    text-align: center;
  }
  .home-text10 {
    font-size: 40px;
  }
  .home-text24 {
    font-size: 40px;
  }
  .home-text30 {
    font-size: 40px;
  }
  .home-container20 {
    flex-wrap: wrap;
    justify-content: center;
  }
  .home-container21 {
    flex-direction: column;
  }
  .home-text35 {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 400px) {
  .home-container01 {
    display: none;
  }
  .home-text02 {
    width: 400px;
  }
  .home-text07 {
    text-align: center;
  }
  .home-text08 {
    text-align: center;
  }
  .home-container09 {
    align-items: center;
  }
  .home-text10 {
    text-align: center;
  }
  .home-text14 {
    text-align: center;
  }
  .home-container11 {
    flex-direction: column;
  }
  .home-container12 {
    flex-direction: column;
  }
  .home-image5 {
    height: auto;
    align-self: center;
  }
}
</style>
