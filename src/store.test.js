import React from "react";
import TodosContainer from "./store";

import expect from "expect";

it("state.list loaded correctly - to have length 5", () => {
  let tc = new TodosContainer();
  expect(tc.getList()).toHaveLength(5);
});

it("state.selectedCategory loaded correctly - to be general", () => {
  let tc = new TodosContainer();
  expect(tc.getSelectedCategory()).toBe("general");
});

it("state.selectedFilter loaded correctly - to be all", () => {
  let tc = new TodosContainer();
  expect(tc.getSelectedFilter()).toBe("all");
});

it("state.filteredList loaded correctly - to be []", () => {
  let tc = new TodosContainer();
  expect(tc.getFilteredList()).toStrictEqual([]);
});

it("state.categoryList loaded correctly - not to be null", () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryListFull()).not.toBe(null);
});

it("state.categoryList loaded correctly - not to be undefined", () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryListFull()).not.toBeUndefined();
});

it("state.categoryList loaded correctly - to have property general", () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryListFull()).toHaveProperty("general");
});

it("state.categoryList['general'] loaded correctly - to have length 5", () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryList("general")).toHaveLength(5);
});

it("toggleComplete1('general', 1) - to have property completed change from false to true", async () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryList("general").find(i => i.id === 1)).toStrictEqual({
    id: 1,
    completed: false,
    text: "Read README"
  });
  await tc.toggleComplete1("general", 1); // toggle the first todo entry
  expect(tc.getCategoryList("general").find(i => i.id === 1)).toStrictEqual({
    id: 1,
    completed: true,
    text: "Read README"
  });
  //   test is complete on above line, we toggle back for another test, i.e., filterTodoList1
  await tc.toggleComplete1("general", 1); // toggle the first todo entry again
});

it("createTodo1('general', 'eggs') - to have length increase from 5 to 6", async () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryList("general")).toHaveLength(5);
  await tc.createTodo1("general", "eggs"); // add new todo entry
  expect(tc.getCategoryList("general")).toHaveLength(6);
});

it("createCategory1, then categoryClick1  - create misc. list, upon clicking it, it is selectedCategory", async () => {
  let tc = new TodosContainer();
  await tc.createCategory1("misc.");
  expect(tc.getCategoryList("misc.")).not.toBeUndefined; // created the category (new list) successfully?
  await tc.categoryClick1("misc.");
  expect(tc.getSelectedCategory()).toBe("misc."); // selected category is now updated too on clicking newly created category (list)
});

it("filterTodoList1('general', 'completed') - to have length 0", async () => {
  let tc = new TodosContainer();
  await tc.filterTodoList1("general", "completed");
  expect(tc.getFilteredList()).toStrictEqual([]);
});
