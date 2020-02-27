<template>
  <div class="modal-container">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Stats</h3>

          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="close()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col">
              <b>Wins: {{ this.counterWins }}</b>
            </div>

            <div class="col text-center">
              <b>Draws: {{ this.counterDraws }}</b>
            </div>

            <div class="col text-right">
              <b>Loses: {{ this.counterLoses }}</b>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close()">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  name: "Rules",

  methods: {
    close: function() {
      this.$emit("closeWindow");
    }
  }
};
</script>
