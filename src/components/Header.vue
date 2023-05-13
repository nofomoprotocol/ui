<template>
  <section class="header">
    <a href="/" class="logo">NoFomoProtocol</a>
    <div class="center">
      <template v-if="showHeaderTab">
        <a href="#airdrop">airdrop</a>
        <a href="#about">AboutUs</a>
        <a href="#Economic">Economic</a>
        <span @click="Earn">Earn</span>
      </template>
      <template v-if="!showHeaderTab">
        <a href="javascript:void(0)"
          ><button class="dpDqXF" @click="connectwallet">{{ account }}</button></a
        >
      </template>
    </div>
    <div class="left">
      <template v-if="showHeaderTab">
        <a target="_blank" :href="urlJson.twitter">
          <button class="sc-7d064000-6 kVbvcH">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.1818 4.92554C17.5732 5.19247 16.9248 5.3694 16.2488 5.45531C16.9443 5.04009 17.475 4.38759 17.7246 3.60111C17.0762 3.9877 16.3603 4.26077 15.5973 4.41315C14.9816 3.75759 14.1041 3.35156 13.1469 3.35156C11.2896 3.35156 9.79436 4.85906 9.79436 6.70713C9.79436 6.97304 9.81686 7.22872 9.87209 7.47213C7.08312 7.33611 4.61527 5.9994 2.95743 3.96315C2.668 4.46531 2.49823 5.04009 2.49823 5.65884C2.49823 6.82065 3.09652 7.85054 3.98834 8.44679C3.44937 8.43656 2.92062 8.28009 2.47266 8.03361C2.47266 8.04384 2.47266 8.05713 2.47266 8.07043C2.47266 9.70065 3.6355 11.0547 5.16039 11.3667C4.88732 11.4413 4.58971 11.4771 4.28084 11.4771C4.06607 11.4771 3.84925 11.4649 3.64573 11.4199C4.08039 12.7484 5.3138 13.7251 6.78039 13.7568C5.63902 14.6496 4.18982 15.1876 2.62096 15.1876C2.34584 15.1876 2.08198 15.1753 1.81812 15.1416C3.30414 16.0999 5.06527 16.647 6.96448 16.647C13.1377 16.647 16.5127 11.5334 16.5127 7.10088C16.5127 6.95258 16.5075 6.8094 16.5004 6.66724C17.1662 6.19474 17.7256 5.60463 18.1818 4.92554Z"
                fill="url(#paint0_linear_18_1858)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_18_1858"
                  x1="1.81812"
                  y1="8.45779"
                  x2="18.6573"
                  y2="9.1846"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </a>
        <a target="_blank" :href="urlJson.tme">
          <button class="sc-7d064000-6 kVbvcH">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.06668 14.3334C6.54668 14.3334 6.64002 14.1334 6.45335 13.6401L4.93335 8.62673L14.3734 2.7334L15.48 3.02673L14.56 5.5334L7.06668 14.3334Z"
                fill="url(#paint0_linear_18_1853)"
              ></path>
              <path
                d="M7.06665 14.3329C7.46665 14.3329 7.63998 14.1463 7.86665 13.9329C8.21332 13.5996 12.6666 9.26628 12.6666 9.26628L9.93332 8.59961L7.39998 10.1996L7.06665 14.1996V14.3329Z"
                fill="url(#paint1_linear_18_1853)"
              ></path>
              <path
                d="M7.33331 10.2531L13.7866 15.0131C14.52 15.4131 15.0533 15.2131 15.24 14.3331L17.8666 1.95973C18.1333 0.879733 17.4533 0.399734 16.7466 0.719734L1.33331 6.6664C0.279979 7.09307 0.293312 7.67973 1.14665 7.93307L5.10665 9.17307L14.2666 3.39973C14.6933 3.13307 15.0933 3.27973 14.7733 3.57307L7.33331 10.2531Z"
                fill="url(#paint2_linear_18_1853)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_18_1853"
                  x1="4.93335"
                  y1="7.18847"
                  x2="15.7957"
                  y2="7.53482"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_18_1853"
                  x1="7.06665"
                  y1="10.8015"
                  x2="12.8334"
                  y2="10.9991"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_18_1853"
                  x1="0.523499"
                  y1="6.22476"
                  x2="18.4336"
                  y2="6.97402"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </a>
        <a target="_blank" href="https://syncswap.xyz/swap"><button class="dpDqXF">Buy Token</button></a>
        <a href="javascript:void(0)" class="walletBtn">
            <button class="dpDqXF" @click="connectwallet">{{ account }}</button>
            <div class="icon_jiantou" v-if="account && account != 'connect wallet' && account != 'Wrong Network'" @click="showBtnDisConnect"></div>
            <button v-if="isShowBtnDisConnect" class="dpDqXF disConnect" @click="disconnectedClick">disconnected</button>
        </a>
      </template>
      <template v-if="!showHeaderTab">
        <button class="sc-7d064000-8 jNhsYH" @click="showHeader">
          <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="3" rx="1.5" fill="url(#paint0_linear_22_171)"></rect>
            <rect x="4" y="11" width="27" height="3" rx="1.5" fill="url(#paint1_linear_22_171)"></rect>
            <rect y="22" width="35" height="3" rx="1.5" fill="url(#paint2_linear_22_171)"></rect>
            <defs>
              <linearGradient
                id="paint0_linear_22_171"
                x1="3.4252e-08"
                y1="1.15217"
                x2="30.91"
                y2="13.7988"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AEF77E"></stop>
                <stop offset="1" stop-color="#81F8A6"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_22_171"
                x1="4"
                y1="12.1522"
                x2="29.3146"
                y2="20.1421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AEF77E"></stop>
                <stop offset="1" stop-color="#81F8A6"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_22_171"
                x1="3.4252e-08"
                y1="23.1522"
                x2="30.91"
                y2="35.7988"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AEF77E"></stop>
                <stop offset="1" stop-color="#81F8A6"></stop>
              </linearGradient>
            </defs>
          </svg>
        </button>
      </template>
    </div>
    <section class="HeaderleftTab" v-if="isShowHeader">
      <button class="sc-cbc525d8-2 fgrywo" @click="showHeader">
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.3401 15.5002L30.4108 3.42883C31.1964 2.64364 31.1964 1.37409 30.4108 0.588896C29.6257 -0.196299 28.3561 -0.196299 27.571 0.588896L15.4998 12.6603L3.42904 0.588896C2.64349 -0.196299 1.37434 -0.196299 0.589159 0.588896C-0.196386 1.37409 -0.196386 2.64364 0.589159 3.42883L12.6599 15.5002L0.589159 27.5716C-0.196386 28.3568 -0.196386 29.6264 0.589159 30.4116C0.980461 30.8032 1.49496 31 2.0091 31C2.52323 31 3.03737 30.8032 3.42904 30.4116L15.4998 18.3402L27.571 30.4116C27.9626 30.8032 28.4768 31 28.9909 31C29.505 31 30.0192 30.8032 30.4108 30.4116C31.1964 29.6264 31.1964 28.3568 30.4108 27.5716L18.3401 15.5002Z"
            fill="white"
          ></path>
        </svg>
      </button>
      <a href="/" class="logo">NoFomoProtocol</a>
      <div class="center">
        <a href="#airdrop">airdrop</a>
        <a href="#about">AboutUs</a>
        <a href="#Economic">Economic</a>
        <span @click="Earn">Earn</span>
      </div>
      <div class="bottom">
        <a target="_blank" :href="urlJson.twitter">
          <button class="sc-7d064000-6 kVbvcH">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.1818 4.92554C17.5732 5.19247 16.9248 5.3694 16.2488 5.45531C16.9443 5.04009 17.475 4.38759 17.7246 3.60111C17.0762 3.9877 16.3603 4.26077 15.5973 4.41315C14.9816 3.75759 14.1041 3.35156 13.1469 3.35156C11.2896 3.35156 9.79436 4.85906 9.79436 6.70713C9.79436 6.97304 9.81686 7.22872 9.87209 7.47213C7.08312 7.33611 4.61527 5.9994 2.95743 3.96315C2.668 4.46531 2.49823 5.04009 2.49823 5.65884C2.49823 6.82065 3.09652 7.85054 3.98834 8.44679C3.44937 8.43656 2.92062 8.28009 2.47266 8.03361C2.47266 8.04384 2.47266 8.05713 2.47266 8.07043C2.47266 9.70065 3.6355 11.0547 5.16039 11.3667C4.88732 11.4413 4.58971 11.4771 4.28084 11.4771C4.06607 11.4771 3.84925 11.4649 3.64573 11.4199C4.08039 12.7484 5.3138 13.7251 6.78039 13.7568C5.63902 14.6496 4.18982 15.1876 2.62096 15.1876C2.34584 15.1876 2.08198 15.1753 1.81812 15.1416C3.30414 16.0999 5.06527 16.647 6.96448 16.647C13.1377 16.647 16.5127 11.5334 16.5127 7.10088C16.5127 6.95258 16.5075 6.8094 16.5004 6.66724C17.1662 6.19474 17.7256 5.60463 18.1818 4.92554Z"
                fill="url(#paint0_linear_18_1858)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_18_1858"
                  x1="1.81812"
                  y1="8.45779"
                  x2="18.6573"
                  y2="9.1846"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </a>
        <a target="_blank" :href="urlJson.tme">
          <button class="sc-7d064000-6 kVbvcH">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.06668 14.3334C6.54668 14.3334 6.64002 14.1334 6.45335 13.6401L4.93335 8.62673L14.3734 2.7334L15.48 3.02673L14.56 5.5334L7.06668 14.3334Z"
                fill="url(#paint0_linear_18_1853)"
              ></path>
              <path
                d="M7.06665 14.3329C7.46665 14.3329 7.63998 14.1463 7.86665 13.9329C8.21332 13.5996 12.6666 9.26628 12.6666 9.26628L9.93332 8.59961L7.39998 10.1996L7.06665 14.1996V14.3329Z"
                fill="url(#paint1_linear_18_1853)"
              ></path>
              <path
                d="M7.33331 10.2531L13.7866 15.0131C14.52 15.4131 15.0533 15.2131 15.24 14.3331L17.8666 1.95973C18.1333 0.879733 17.4533 0.399734 16.7466 0.719734L1.33331 6.6664C0.279979 7.09307 0.293312 7.67973 1.14665 7.93307L5.10665 9.17307L14.2666 3.39973C14.6933 3.13307 15.0933 3.27973 14.7733 3.57307L7.33331 10.2531Z"
                fill="url(#paint2_linear_18_1853)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_18_1853"
                  x1="4.93335"
                  y1="7.18847"
                  x2="15.7957"
                  y2="7.53482"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_18_1853"
                  x1="7.06665"
                  y1="10.8015"
                  x2="12.8334"
                  y2="10.9991"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_18_1853"
                  x1="0.523499"
                  y1="6.22476"
                  x2="18.4336"
                  y2="6.97402"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AEF77E"></stop>
                  <stop offset="1" stop-color="#81F8A6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </a>
      </div>
    </section>
  </section>
</template>

<script>
import { urlJson } from "../url";
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";

export default {
  name: "Header",
  data() {
    return {
      account: "connect wallet",
      urlJson: urlJson,
      screenWidth: document.body.clientWidth,
      isShowHeader: false,
      isShowBtnDisConnect: false
    };
  },
  computed: {
    showHeaderTab() {
      let isShowHeaderTab = true;
      if (this.screenWidth >= 1320) {
        isShowHeaderTab = true;
      } else if (this.screenWidth < 1320) {
        isShowHeaderTab = false;
      }
      return isShowHeaderTab;
    },
  },
   created () {
    window.ethereum.on("accountsChanged", () => {
       this.connectwallet();
    });
    window.ethereum.on('chainChanged', (chainId) => {
        this.connectwallet();
   })
  },
  async mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    showBtnDisConnect () {
        this.isShowBtnDisConnect = !this.isShowBtnDisConnect
    },
    async disconnectedClick() {
        this.account = 'connect wallet'
        this.isShowBtnDisConnect = !this.isShowBtnDisConnect
    },
    showHeader() {
      this.isShowHeader = !this.isShowHeader;
    },
    async connectwallet() {

        const provider = new ethers.BrowserProvider(window.ethereum)
        const { chainId } = await provider.getNetwork();
        if (chainId != 324) {
            this.account = "Wrong Network"
        }else {
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner()
            const firstThree = signer.address.substr(0, 5);
            const lastThree = signer.address.substr(signer.address.length - 3);
            this.account = `${firstThree}...${lastThree}`;
            this.$emit("getSinger",signer)
        }
    },
    Earn() {
      this.$toast("Coming soon");
    },
  },
};
</script>
<style>
.HeaderleftTab {
  padding: 100px 50px 0;
  position: absolute;
  z-index: 50;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80vh;
  background: #000;
  max-width: 400px;
  right: 0;
  top: 0;
}
.fgrywo {
  background: none;
  border: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  right: 50px;
}
.HeaderleftTab .center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  margin-top: 60px;
}
.HeaderleftTab .bottom {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
  margin-top: 38px;
}
.HeaderleftTab a {
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
}
.header {
  height: 76px;
  box-sizing: border-box;
  z-index: 11;
  padding: 28px 136px;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.logo {
  height: 35px;
  background: url(../image/logo.jpg) no-repeat 0 0;
  background-size: contain;
  padding-left: 40px;
  line-height: 35px;
}
.center {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 36px;
  font-size: 18px;
  line-height: 22px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
}
.left {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
}
.kVbvcH {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: none;
  border: 1px solid rgb(129, 248, 166);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
}
.dpDqXF {
  background: linear-gradient(92.01deg, rgb(174, 247, 126) 1.3%, rgb(129, 248, 166) 100.91%);
  border-radius: 10px;
  border: none;
  padding: 11px 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(17, 97, 35);
  cursor: pointer;
}
.walletBtn {
    position: relative;
}
.icon_jiantou {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    top: 11px;
}
.icon_jiantou::before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border: 2px solid rgb(17, 97, 35);
    border-top-color: transparent;
    border-left-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(45deg) translate(-112%, -6%);
}
.dpDqXF.disConnect {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0px, 120%);
}
.jNhsYH {
  background: none;
  border: none;
  flex-direction: column;
  gap: 8px;
}
</style>