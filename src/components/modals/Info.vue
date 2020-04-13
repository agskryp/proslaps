<template>
  <div class="modal-container">
    <div ref="Information" class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Information</h3>

          <button
            type="button"
            class="close"
            aria-label="Close"
            ref="xClose"
            @click="closeInfo()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <h4>What is ProSlaps!</h4>

          <p>
            ProSlaps! is a progressive web application that extends the
            traditional game of Paper, Rock, Scissors, by having Lizard and
            Spock be additional choices.
          </p>

          <p>
            The name <b>ProSlaps!</b> derives from the combination and
            rearrangement of the first couple of letters of each hand gesture.
          </p>

          <h4>Credits</h4>

          <p>
            ProSlaps! v1.0 was designed and developed by
            <a href="https://agskryp.com" target="_blank" rel="noopener">
              Andrew Skrypnyk
            </a>
            using:
          </p>

          <ul>
            <li>Vue v2.6.11</li>
            <li>Bootstrap v4.4.1</li>
            <li>Font Awesome v4.7.0</li>
          </ul>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeInfo()">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/bootstrap/_close.scss";
@import "@/styles/bootstrap/_modal.scss";
@import "@/styles/bootstrap/_tables.scss";
@import "@/styles/bootstrap/utilities/_sizing.scss";
@import "@/styles/_modals.scss";
</style>

<script>
export default {
  name: "Information",

  data() {
    return {
      showModal: false
    };
  },

  mounted() {
    this.$refs.xClose.focus();
  },

  methods: {
    closeInfo: function() {
      this.$emit("closeWindow");
    }
  }
};
</script>
