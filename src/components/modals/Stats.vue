<template>
  <div>
    <div class="modal-container">
      <div class="modal-dialog" style="width: 100%;">
        <div class="modal-content modal-lg">
          <div class="modal-header">
            <h3 class="modal-title">Stats</h3>

            <button
              type="button"
              class="close"
              aria-label="Close"
              ref="xClose"
              @click="close()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col">
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

                    <tr>
                      <th scope="row">Total</th>
                      <td>{{ this.counterTotal }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="col">
                <table class="table table-sm table-bordered">
                  <thead class="table-active">
                    <tr>
                      <th scope="col" colspan="2">Hands Played</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Paper</th>
                      <td>{{ this.$parent.counterPaper }}</td>
                    </tr>

                    <tr>
                      <th scope="row">Rock</th>
                      <td>{{ this.$parent.counterRock }}</td>
                    </tr>

                    <tr>
                      <th scope="row">Scissors</th>
                      <td>{{ this.$parent.counterScissors }}</td>
                    </tr>

                    <tr>
                      <th scope="row">Lizard</th>
                      <td>{{ this.$parent.counterLizard }}</td>
                    </tr>

                    <tr>
                      <th scope="row">Spock</th>
                      <td>{{ this.$parent.counterSpock }}</td>
                    </tr>
                  </tbody>
                </table>
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

    <resetModal v-if="showModalReset == true" @closeModal="closeReset()" @closeAllModals="resetStats()" />

    <!-- <div class="modal-container" v-if="showModalReset == true">
      <div class="modal-dialog">
        <div class="modal-content modal-lg">
          <div class="modal-header">
            <h3 class="modal-title">Are you sure?</h3>
          </div>

          <div class="modal-body">
            <p>Pressing confirm will erase all of your stats.</p>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="resetStats()"
            >
              Confirm
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              ref="nevermindReset"
              @click="closeReset()"
            >
              Nevermind
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss"></style>

<script>
import resetModal from './Reset';

export default {
  name: "Rules",

  components: { resetModal },

  data() {
    return {
      showModalReset: false,
      counterTotal: 0
    };
  },

  mounted() {
    this.counterTotal =
      parseInt(this.$parent.counterWins) +
      parseInt(this.$parent.counterDraws) +
      parseInt(this.$parent.counterLoses);

    this.$refs.xClose.focus();
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

    resetStats: function() {
      localStorage.counterWins = localStorage.counterDraws = localStorage.counterLoses = localStorage.counterPaper = localStorage.counterRock = localStorage.counterScissors = localStorage.counterLizard = localStorage.counterSpock = this.$parent.counterWins = this.$parent.counterDraws = this.$parent.counterLoses = this.$parent.counterPaper = this.$parent.counterRock = this.$parent.counterScissors = this.$parent.counterLizard = this.$parent.counterSpock = 0;
      this.showModalReset = false;
      this.$emit("closeWindow");
    }
  }
};
</script>
