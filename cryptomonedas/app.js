Vue.component("CoinDetail", {
  data() {
    return {
      showPrices: false,
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      name: "Bitcoin",
    };
  },
  props: {
    changePercent: {
      type: Number,
    },
    price: {
      type: Number,
    },
    title: {
      type: String,
    },
    pricesDays :{},
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit("change-color");
    },
  },
  template: `
  <div>
    <img
    v-on:mouseover="toggleShowPrices"
    v-on:mouseout="toggleShowPrices"
    :src="img"
    :alt="name"
    />
    <h1 v-bind:class="changePercent > 0 ? 'green': 'red'">
      {{ title }}
      <span v-if="changePercent > 0">👍</span>
      <span v-else-if="changePercent < 0">👎</span>
      <span v-else>🖖</span>
      <span v-on:click="toggleShowPrices">{{ showPrices ? '🙈':'🐵' }}</span>
    </h1>
    <slot name="input"></slot>
    <ul v-show="showPrices">
      <li
        class="uppercase"
        v-bind:class="{ orange: p.value === price, red: p.value < price, green: p.value > price}"
        v-for="(p,i) in pricesDays"
        :key="p.day"
      >
        {{ i }} - {{ p.day }} - {{ p.value}}
      </li>
    </ul>
    
    <slot name="link"></slot>
  </div>
  `,
});
let app = new Vue({
  el: "#app",
  data() {
    return {
      symbol: "BTC",

      changePercent: 0,
      price: 8400,
      color: "f4f4f4",
      value: 0,
      pricesWithDays: [
        { day: "Lunes", value: 8400 },
        { day: "Martes", value: 7900 },
        { day: "Miercoles", value: 8200 },
        { day: "Jueves", value: 9000 },
        { day: "Viernes", value: 9400 },
        { day: "Sabado", value: 10000 },
        { day: "Domingo", value: 10200 },
      ],
      showPrices: false,
    };
  },
  computed: {
    title() {
      return `${this.name} - ${this.symbol} `;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.price;
    },
  },
  watch: {
    showPrices(newValue, OldValue) {
      console.log(newValue, OldValue);
    },
  },
  methods: {
    updateColor() {
      this.color = this.color.split("").reverse().join("");
    },
  },
});
