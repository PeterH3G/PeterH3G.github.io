<template>
  <div class="data support flex flex-col">
    <strong class="label" v-text="supportText" />
    <div class="flex justify-center items-center">
      <i :class="itemBtc.icon" class="m-0" />
      <strong v-text="itemBtc.label" class="mr-1" />
      <span v-text="itemBtc.walletId" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const supportText = ref("");
    const itemBtc = ref(
      Object({
        label: "BTC:",
        icon: "cf cf-btc",
        walletId: process.env.VUE_APP_WALLET_BTC,
        show: true,
        walletQrImg: "/img/coinbase-qr-btc-wallet.png",
      })
    );

    return {
      supportText,
      itemBtc,
    };
  },
};
</script>

<style lang="scss" scoped></style>
