<template>
  <div class="row">
    <div class="col-md-10 mx-auto">
      <div class="row">
        <div class="col-12 col-md mt-2 mb-2">
          <button
            type="button"
            class="btn btn-light btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('paper')"
          >
            Paper
          </button>
        </div>

        <div class="col-12 col-md mt-2 mb-2">
          <button
            type="button"
            class="btn btn-secondary btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('rock')"
          >
            Rock
          </button>
        </div>

        <div class="col-12 col-md mt-2 mb-2">
          <button
            type="button"
            class="btn btn-warning btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('scissors')"
          >
            Scissors
          </button>
        </div>

        <div class="col-12 col-md mt-2 mb-2">
          <button
            type="button"
            class="btn btn-success btn-block"
            data-toggle="button"
            aria-pressed="false"
            @click="$emit('lizard')"
          >
            Lizard
          </button>
        </div>

        <div class="col-12 col-md mt-2 mb-2">
          <button
            type="button"
            class="btn btn-info btn-block"
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

<style></style>

<script>
export default {
  name: "controller"
}
</script>
