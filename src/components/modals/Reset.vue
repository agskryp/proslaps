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

  mounted() {
    this.$refs.nevermindButton.focus();
  },

  methods: {
    closeReset: function() {
      this.$emit("closeModal");
    },

    resetStats: function() {
      this.$emit("confirmReset");
    }
  }
};
</script>
