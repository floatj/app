<template>
  <div class="plurk-form-container">
    <div class="header">發新噗文</div>
    <div class="content-container">
      <div class="avatar">
        <img src="https://i.imgur.com/a8fj4m.png" alt="avatar">
      </div>
      <textarea v-model="plurkContent" id="plurk-content" cols="30" rows="10" placeholder="你在做什麼？"></textarea>

      <div class="actions">
        <button id="plurk">Plurk</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data() {
    return {
      plurkContent: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.plurk-form-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .header {
    text-align: center;
    padding: .5em 0;
    -webkit-app-region: drag;

    background-color: #f1e4dd;
  }

  .content-container {
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    background-color: #f5ede8;

    .avatar {
      width: 2.5em;
      min-width: 2.5em;
      height: 2.5em;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 10px;
      margin: .3em;
      margin-left: .5em;

      img {
        width: 100%;
        height: 100%;
      }
    }

    textarea#plurk-content {
      margin: 0;
      padding: .3em;
      outline: 0;
      border: 0;

      font-size: 1em;

      resize: none;
      box-sizing: border-box;
      width: 100%;
      height: calc(100% - 3em);
      left: 0;

      background-color: #f5ede8;
    }

    .actions {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 3em;
      width: 100%;
      padding: 0 .5em;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      button#plurk {
        background-color: #ef8733;
        color: white;
        height: 2.5em;
        border: transparent 0px;
        border-radius: 5px;
        font-size: 0.8em;
        padding: 0 1em;
        margin-top: 0.5em;
      }
    }
  }

}
</style>