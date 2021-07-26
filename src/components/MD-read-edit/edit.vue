<template>
  <div class="edit">
    <div class="edit-box">
      <textarea v-model="text"></textarea>
    </div>
    <div class="show-box">
      <div v-html="show_html" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
import showdown from "showdown";
const converter = new showdown.Converter();
export default {
  data() {
    return {
      text: "# hello!"
    };
  },
  computed: {
    show_html() {
      return converter.makeHtml(this.text);
    }
  }
};
</script>

<style scoped>
.edit {
  display: flex;
  height: 600px;
  width: 100%;
}
.edit-box,
.show-box {
  flex: 1;
  height: 100%;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.edit-box {
  margin-right: 20px;
}
textarea {
  width: 100%;
  height: 100%;
  overflow: auto;
  resize: none;
  border: none;
  padding: 5px;
  box-sizing: border-box;
}
textarea:focus {
  outline: none;
}
.show-box {
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: auto;
  box-sizing: border-box;
}
</style>
