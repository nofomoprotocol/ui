<template>
  <div id="app">
    <Header @getSinger="getSigner"></Header>
    <section class="page_main">
      <div class="main_part part1">
        <div class="part_left">
          <p class="part_left_p">
            <span class="part_left_span">ALL MEMECOINS MAKE US FOMO</span>
            <span class="part_left_span">TO BE OR NOT TO BE?THAT IS THE QUESITION</span>
            <span class="part_left_span">Why not a tool for margin trade so that we</span>
            <span class="part_left_span">can long or short memecoins on DEXs?</span>
          </p>
        </div>
        <div class="part_right">
          <img class="main_img" src="./image/NoFomo_.png" alt="" />
        </div>
      </div>
      <div id="airdrop" class="main_part part2">
        <div class="mainPart_title">AirDrop</div>
        <div class="part_left">
          <img class="main_img" src="./image/8fa.jpg" alt="" />
        </div>
        <div class="part_right">
          <p class="">
            <span class="part_left_span">You can cliam NFOMO now</span>
            <span class="part_left_span">30% of the total NFOMO takens are now available to be</span>
            <span class="part_left_span">claimed by those who has at leaet 0.01 ETH on zksyncEra</span>
            <span class="part_left_span">Tokens that have not been clained within 31 days will be sent</span>
            <span class="part_left_span">to DAO Treasury</span>
          </p>
          <div class="ksvEbk">
            <div class="sc-b24488f1-5 dmYabb">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.58872 21.8312C5.48713 20.5794 4.38559 19.2775 3.68456 17.7253C2.98357 16.073 2.78327 14.1702 3.13378 12.3677C3.4843 10.5651 4.28541 8.86265 5.43709 7.4106C5.33696 8.6624 5.78761 9.96424 6.6388 10.9156C6.13807 8.51219 6.93923 5.90845 8.54151 4.00575C10.1438 2.10305 12.347 0.8512 14.6502 0C13.4986 1.20172 13.3484 3.10442 13.799 4.70674C14.2497 6.30901 15.201 7.71103 16.0522 9.16308C16.9034 10.6151 17.7046 12.1173 17.7547 13.7696C18.2053 12.9184 18.706 12.0672 19.0065 11.1159C19.3069 10.1645 19.4571 9.16308 19.2068 8.21171C20.1081 9.3133 20.6088 10.4148 20.8591 11.8169C21.1095 13.2189 21.0594 14.6709 20.9092 16.0729C20.7089 17.6252 20.3084 19.2275 19.4572 20.5293C18.4558 22.0815 16.8534 23.1831 15.1009 23.7839C11.9964 24.3347 8.94206 23.8841 6.58872 21.8312Z"
                  fill="#ACF10E"
                ></path>
                <path
                  d="M10.3948 23.6837C14.5007 25.286 18.5565 20.429 16.3032 16.6737C16.3032 16.6236 16.2532 16.6236 16.2532 16.5735C16.4535 18.6265 15.9527 20.1286 15.0014 20.9798C15.5021 19.7781 15.1516 18.3761 14.5507 17.1744C13.9499 16.0228 13.0987 14.9713 12.4477 13.8697C11.7968 12.7181 11.2961 11.4162 11.5965 10.1143C10.3948 11.0156 9.5436 12.3675 9.19308 13.8196C8.84257 15.2717 9.04287 16.874 9.69381 18.2259C8.94274 17.6751 8.39197 16.7738 8.34188 15.8225C7.54072 16.7738 7.04004 18.0256 7.09008 19.2774C7.09013 21.2302 8.64231 22.9827 10.3948 23.6837Z"
                  fill="#739C14"
                ></path>
              </svg>
              <span>31 days will be transfer to DAO Treasury</span>
            </div>
            <div class="sc-36b0d147-0 gA-Dkyf">
              <div class="sc-36b0d147-1 iXEcDM">
                <span>Claimed</span>
                <span>3,000,000,000</span>
              </div>
              <div class="sc-36b0d147-2 iezKKV">
                <div class="sc-36b0d147-3 jvDOXG" style="width: 35%"></div>
              </div>
            </div>
          </div>
          <div class="part2_btn">
            <button
              class="dpDqXF"
              :style="isQualified ? '' : `background: rgb(204, 204, 204);cursor: unset;color: black;`"
              @click="toCLAIM"
            >
              CLAIM
            </button>
            <button class="dpDqXF" @click="getINVITE">INVITE</button>
          </div>
        </div>
      </div>
      <div id="about" class="main_part about">
        <div class="mainPart_title">ABOUT</div>
        <div class="about_p">
          NoFomoProtocol is a decentralized margin trading protocol enables traders to long or short on any memecoins on
          DEXs $NFOMMO is the official token of the protocol which distributed fairly
        </div>
        <div class="about_btn">
          <a target="_blank" href="https://syncswap.xyz/swap"><button class="dpDqXF">Buy Token</button></a>
          <a target="_blank" href="https://docs.nofomoprotocol.xyz"><button class="dpDqXF">Read Docs</button></a>
        </div>
      </div>
      <div id="Economic" class="main_part Economic">
        <div class="part_left">Token Supply:<br /><span>3,000,000,000</span></div>
        <img class="" src="./image/ͼƬ3.png" alt="" />
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { urlJson } from "./url";
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";
import Web3 from "web3";
import abi from "./abi.json";

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}
export default {
  components: { Header, Footer },
  data() {
    return {
      urlJson: urlJson,
      signer: "",
      isQualified: true,
    };
  },
  created() {
    this.createProvider();
    window.ethereum.on("accountsChanged", () => {
      this.isQualified = true;
    });
  },
  methods: {
    getSigner(val) {
      this.signer = val;
    },
    async createProvider() {
      let _this = this;
      var web3Provider;
      if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
          window.ethereum.enable().then(function () {
            //  _this.account1();
          });
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        web3Provider = window.web3.currentProvider;
      } else {
        web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
      }
      web3 = new Web3(web3Provider);
    },
    async toCLAIM() {
      const account = await web3.eth.getAccounts();
      const CLAIMContractAddress = "0x57ccb824f5D1F058DfC4613cED6f8E3b6041BF3b";
      const contractRelationship = new window.web3.eth.Contract(abi, CLAIMContractAddress);
      window.contractRelationship = contractRelationship;
      const chainId = await web3.eth.net.getId();
      if (chainId != 324) {
        this.isQualified = false;
        this.$toast("Wrong Network");
      }
      if (await contractRelationship.methods.isClaimedAddress(account[0]).call({ from: account[0] })) {
        this.isQualified = false;
        this.$toast("Not Qualified");
      }
      let referrerAddr = "0x0000000000000000000000000000000000000000";
      if (location.search && location.search[0] != '?') {
        referrerAddr = location.search.replace("?r=", "");
      }
      if (this.isQualified) {
        let tx = await contractRelationship.methods.claim(referrerAddr).send({ from: account[0] });
        this.$toast(tx);
      }
    },
    async getINVITE() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const newUrl = urlJson.inviteUrl + signer.address;
      this.$copyText(newUrl).then(
        (e) => {
          this.$toast("copied");
        },
        (e) => {
          this.$toast("copy failed");
        }
      );
    },
    btnBuyToken() {
      console.log("btnBuyToken");
    },
  },
};
</script>

<style>
.ksvEbk {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 50%;
}
.dmYabb {
  background: rgb(38, 66, 58);
  border-radius: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  padding: 11px 24px;
  margin-top: 16px;
}
.dmYabb > span {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: rgb(172, 241, 14);
}
.gA-Dkyf {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 32px;
}
.iXEcDM {
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.iXEcDM > span {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: rgb(115, 160, 149);
}
.iezKKV {
  width: 100%;
  height: 6px;
  background: rgb(38, 66, 58);
  border-radius: 50px;
  position: relative;
}
.jvDOXG {
  height: 100%;
  position: absolute;
  border-radius: 50px;
  background: linear-gradient(92.01deg, rgb(174, 247, 126) 1.3%, rgb(129, 248, 166) 100.91%);
}
.main_part {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main_part.part1 {
  color: #000;
  background: #fff;
  overflow: hidden;
}
.part_left {
  width: 50%;
  white-space: nowrap;
  text-align: right;
  z-index: 10;
}
.part_left_p {
  display: inline-block;
  text-align: left;
  position: relative;
  z-index: 1;
  top: 33%;
  left: 14px;
  font-size: 24px;
}
.part_left_span {
  display: block;
}
.part_right {
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main_img {
  position: absolute;
  top: 50%;
  left: 0;
  width: 1180px;
  height: 1097px;
  transform: scale(0.5) translateY(-50%);
  transform-origin: left top;
}

.main_part.part2 {
  padding-top: 78px;
}
.main_part.part2 .mainPart_title {
  position: absolute;
  top: 34px;
}
.main_part.part2 .main_img {
  right: 30px;
  width: 620px;
  height: 675px;
  position: absolute;
  left: initial;
  top: 0;
  transform: scale(0.8) translateY(8%);
  transform-origin: right top;
}
.main_part.part2 .part_right {
  padding-top: 38px;
  padding-left: 30px;
  line-height: 30px;
  justify-content: space-between;
}
.part2_btn .dpDqXF {
  margin: 40px 40px 40px 0;
}

.main_part.about {
  height: 700px;
  padding: 100px 350px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
}
.mainPart_title {
  text-align: center;
  font-weight: 700;
  font-size: 36px;
}
.about_p {
  padding-top: 80px;
  font-size: 26px;
}
.about_btn {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.about_btn .dpDqXF {
  background: none;
  color: #fff;
  font-size: 28px;
  border: 1px solid;
}

.Economic {
  overflow: hidden;
}
.Economic img {
  width: 2936px;
  height: 1959px;
  transform: scale(0.35);
  transform-origin: top center;
}
.Economic .part_left {
  position: absolute;
  left: 30%;
  top: 30%;
  width: initial;
  text-align: left;
  transform: translate(-50%, -50%);
  font-size: 24px;
}
.Economic .part_left span {
  font-size: 30px;
}
</style>
