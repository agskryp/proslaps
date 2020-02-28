<template>
  <div>
    <div class="modal-container">
      <div class="modal-dialog">
        <div class="modal-content modal-lg">
          <div class="modal-header">
            <h3 class="modal-title">Are you sure?</h3>
          </div>

          <div class="modal-body">
            <p>Pressing confirm will erase all of your stats.</p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="resetStats()">
              Confirm
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              ref="nevermindButton"
              @click="closeReset()"
            >
              Nevermind
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
      // counterTotal: 0
    };
  },

  mounted() {
    this.$refs.nevermindButton.focus();
  },

  methods: {
    closeReset: function() {
      this.$emit("closeModal");
    },

    resetStats: function() {
      localStorage.counterWins = localStorage.counterDraws = localStorage.counterLoses = localStorage.counterPaper = localStorage.counterRock = localStorage.counterScissors = localStorage.counterLizard = localStorage.counterSpock = this.$parent.counterWins = this.$parent.counterDraws = this.$parent.counterLoses = this.$parent.counterPaper = this.$parent.counterRock = this.$parent.counterScissors = this.$parent.counterLizard = this.$parent.counterSpock = 0;
      this.showModalReset = false;
      this.$emit("closeAllModals");
    }
  }
};
</script>
