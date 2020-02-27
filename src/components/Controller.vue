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
            @click="buttonRock()"
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
            @click="buttonScissors()"
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
            @click="buttonLizard()"
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
            @click="buttonSpock()"
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

  methods: {
    buttonPaper: function() {
      localStorage.handPaper = this.$parent.handPaper++;
      this.$emit("paper");
    },

    buttonRock: function() {
      localStorage.handRock = this.$parent.handRock++;
      this.$emit("rock");
    },

    buttonScissors: function() {
      localStorage.handScissors = this.$parent.handScissors++;
      this.$emit("scissors");
    },

    buttonLizard: function() {
      localStorage.handLizard = this.$parent.handLizard++;
      this.$emit("lizard");
    },

    buttonSpock: function() {
      localStorage.handSpock = this.$parent.handSpock++;
      this.$emit("spock");
    }
  }
};
</script>
