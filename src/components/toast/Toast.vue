<template>
  <div
    v-show="show"
    :class="`${className ? className: 'm-toast'}`"
  >
    <!-- eslint-disable -->
    <div
      v-html="message"
      class="info"
    />
  </div>
</template>

<script>
export default {
  name: 'Toast',

  props: {
    className: {
      type: String,
      default: 'm-toast'
    },
    timeout: {
      type: Number,
      default: 2000
    }
  },

  data () {
    return {
      message: '',
      show: false
    }
  }
}
</script>
<style>
.m-toast {
    position: fixed;
    left: 50%;
    top: 15%;
    max-width: 500px;
    line-height: 36px;
    box-sizing: border-box;
    color: #fff;
    transform: translate(-50%, -50%);
    z-index: 7000;
    width: 100%;
    text-align: center;
}
.m-toast .info {
    padding: 19px 36px;
    max-width: 77.33%;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    border-radius: 110px;
    text-align: center;
    display: inline-block;
    word-break: break-all;
    font-size: 28px;
    line-height: 36px;
}
</style>
