<template>
  <div class="modal-container">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Rules</h5>

          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="rules()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <p>Defeat the computer by selecting the greater hand gesture.</p>

          <table class="table table-sm table-bordered">
            <thead class="table-active">
              <tr>
                <th scope="col">Hand</th>
                <th scope="col" colspan="2">Defeats</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">Rock</th>
                <td>Lizard</td>
                <td>Scissors</td>
              </tr>

              <tr>
                <th scope="row">Lizard</th>
                <td>Spock</td>
                <td>Paper</td>
              </tr>

              <tr>
                <th scope="row">Spock</th>
                <td>Scissors</td>
                <td>Rock</td>
              </tr>

              <tr>
                <th scope="row">Scissors</th>
                <td>Paper</td>
                <td>Lizard</td>
              </tr>

              <tr>
                <th scope="row">Paper</th>
                <td>Rock</td>
                <td>Spock</td>
              </tr>
            </tbody>
          </table>

          <p>Choosing the same move as the machine will result in a draw.</p>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="rules()">
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
    rules: function() {
      this.$emit("closeWindow");
    }
  }
};
</script>
