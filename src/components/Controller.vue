<template>
  <div class="row">
    <div class="col-md-10 mx-auto">
      <div class="row">
        <div class="col-12 col-md mt-1 mb-1 mt-md-2 mb-md-2">
          <button
            type="button"
            class="btn btn-light btn-block btn-lg"
            data-toggle="button"
            aria-pressed="false"
            @click="buttonPaper()"
          >
            Paper
          </button>
        </div>

        <div class="col-12 col-md mt-1 mb-1 mt-md-2 mb-md-2">
          <button
            type="button"
            class="btn btn-secondary btn-block btn-lg"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('rock')"
          >
            Rock
          </button>
        </div>

        <div class="col-12 col-md mt-1 mb-1 mt-md-2 mb-md-2">
          <button
            type="button"
            class="btn btn-warning btn-block btn-lg"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('scissors')"
          >
            Scissors
          </button>
        </div>

        <div class="col-12 col-md mt-1 mb-1 mt-md-2 mb-md-2">
          <button
            type="button"
            class="btn btn-success btn-block btn-lg"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('lizard')"
          >
            Lizard
          </button>
        </div>

        <div class="col-12 col-md mt-1 mb-1 mt-md-2 mb-md-2">
          <button
            type="button"
            class="btn btn-info btn-block btn-lg"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('spock')"
          >
            Spock
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-light {
  border: 1px solid #dae0e5;
}
</style>

<script>
export default {
  name: "controller",

  // data() {
  //   return {
  //     handPaper: 0,
  //   }
  // },

  methods: {
    buttonPaper: function() {
      // this.handPaper++;
      this.$parent.handPaper2++;

      // console.log( this.handPaper );
      console.log( this.$parent.handPaper2 );
      this.$emit('paper');
    }
  }
};
</script>
