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

it("toggleComplete - to have length 5", () => {
  let tc = new TodosContainer();
  expect(tc.getCategoryList("general")).toHaveLength(5);
});
