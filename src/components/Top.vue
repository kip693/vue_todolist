<template>
  <div class="body">
    <div class="header_area">
      <h3 class="page_title">ポモドーロTodoList</h3>
    </div>
    <div class="input_area">
      <input
        class="todo_input"
        placeholder="todoを入れてください"
        v-model="add_todo"
      />
      <button class="submit_button btn" title="作成する" @click="addToDo">
        作成する
      </button>
    </div>
    <div class="todo_list" :v-for="item in todo" :key="todo">
      <ul class="todo_list_inner">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      todo: "",
      add_todo: ""
    };
  },
  methods: {
    addToDo() {
      this.todo.push(this.add_todo);
    }
  }
});
</script>

<style scoped>
.submit_button {
  background-color: rgb(41, 195, 223);
  color: white;
  font-weight: bold;
}
</style>
