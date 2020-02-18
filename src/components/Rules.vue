<template>
  <div @click="rules()" style="    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
                                                            background: rgba(0,0,0,.5)">

    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="rules()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="rules()">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
  export default {
    name: "Rules",
    //    
    //    data() {
    //      return {
    //        showRulesModal: false
    //      }
    //    },

    methods: {
      rules: function() {
        console.log('emit closure!');
        this.$emit('closeWindow');
      }
    }
  };

</script>
