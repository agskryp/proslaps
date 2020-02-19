<template>
  <div class="modal-container">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Information</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeInfo()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h4>What is Pro Slaps?</h4>
          
          <p>Pro Slaps! is an extension of the traditional Rock, Paper, Scissors, with Lizard and Spock being additional choices.</p>
          
          <p>The name <b>Pro Slaps!</b> is from combining and rearranging the first couple of letters of each hand gesture.</p>
          
          <h4>Credits</h4>
          
          <p>Pro Slaps! was designed and developed by <a href="https://agskryp.com" target="_blank">Andrew Skrypnyk</a> using:</p>
          
          <ul>
            <li>Vue v2.6.11</li>
            <li>Bootstrap v4.4.1</li>
            <li>Font Awesome v4.7.0</li>
          </ul>            
          
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
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
