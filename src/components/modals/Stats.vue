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
            <table class="table table-sm table-bordered">
              <thead class="table-active">
                <tr>
                  <th scope="col" colspan="2">Standings</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">Wins</th>
                  <td>{{ this.$parent.counterWins }}</td>
                </tr>

                <tr>
                  <th scope="row">Draws</th>
                  <td>{{ this.$parent.counterDraws }}</td>
                </tr>

                <tr>
                  <th scope="row">Loses</th>
                  <td>{{ this.$parent.counterLoses }}</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-sm table-bordered">
              <thead class="table-active">
                <tr>
                  <th scope="col" colspan="2">Hands</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">Paper</th>
                  <td>{{ this.$parent.handPaper2 }}</td>
                </tr>

                <tr>
                  <th scope="row">Rock</th>
                  <td></td>
                </tr>

                <tr>
                  <th scope="row">Scissors</th>
                  <td></td>
                </tr>

                <tr>
                  <th scope="row">Lizard</th>
                  <td></td>
                </tr>

                <tr>
                  <th scope="row">Spock</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
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

          <div class="modal-body">
            <p>Pressing confirm will erase all of your stats.</p>
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
    };
  },

  created() {
    console.log( this.$parent.handPaper2 );
    // console.log( this.paperHand );
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
    },

    deleteStats: function() {
      this.$parent.counterWins = this.$parent.counterDraws = this.$parent.counterLoses = 0;
      this.showModalReset = false;
      this.$emit("closeWindow");
    }
  }
};
</script>
