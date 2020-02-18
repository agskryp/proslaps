<template>
  <div class="modal-container">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeInfo()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                  <p><strong>Pro Slaps!</strong> is an extension of the traditional <b>Ro</b>ck, <b>Pa</b>per, <b>Sc</b>issors game, with <b>L</b>izard, and <b>Sp</b>ock being additional choices.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeInfo()"
            >
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
  name: "Information",

  data() {
    return {
      showModal: false
    };
  },

  methods: {
    closeInfo: function() {
      this.$emit("closeWindow");
    }
  }
};
</script>
