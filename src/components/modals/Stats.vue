<template>
  <div>
    <div class="modal-container">
      <div class="modal-dialog">
        <div class="modal-content modal-lg">
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
            <div class="container">
              <div class="row">
                <b>Wins: {{ this.$parent.counterWins }}</b>
              </div>

              <div class="row">
                <b>Draws: {{ this.$parent.counterDraws }}</b>
              </div>

              <div class="row">
                <b>Loses: {{ this.$parent.counterLoses }}</b>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="reset()">
              Reset
            </button>

            <button type="button" class="btn btn-secondary" @click="close()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  <div class="modal-container" v-if="showModalReset == true">
      <div class="modal-dialog">
        <div class="modal-content modal-lg">
          <div class="modal-header">
            <h3 class="modal-title">Are you sure?</h3>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteStats()">
              Confirm
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              @click="closeReset()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  name: "Rules",

  data() {
    return {
      showModalReset: false
    }
  },

  methods: {
    close: function() {
      this.$emit("closeWindow");
    },

    reset: function() {
      this.showModalReset = true;
    },

    closeReset: function() {
      this.showModalReset = false;
    }
  }
};
</script>
