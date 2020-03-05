<template>
  <div class="counter">
    <h3>Count up and down, but never below zero</h3>
    <p data-testid="count">{{ count }}</p>
    <div>
      <button type="button" aria-label="increase count" @click="increment">
        +1
      </button>
      <button type="button" aria-label="decrease count" @click="decrement">
        -1
      </button>
    </div>
    <button type="button" aria-label="reset count" @click="clear">
      reset
    </button>
  </div>
</template>

<script>
export default {
  props: {
    initialCount: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: this.initialCount
    };
  },
  methods: {
    increment() {
      this.count = this.count + this.step;
    },
    decrement() {
      this.count =
        this.count - this.step >= 0 ? this.count - this.step : this.count;
    },
    clear() {
      this.count = this.initialCount;
    }
  }
};
</script>
