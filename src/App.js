import React from "react";
import { Provider, Subscribe } from "unstated";

import styled from "styled-components";

import TodosContainer from "./store";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";

import FilterTodoList from "./components/FilterTodoList";

function App() {
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todos => {
            const allCategories = todos.getAllCategories();
            console.log("allCategories", allCategories);
            // const list = todos.getList()
            const selectedCategory = todos.getSelectedCategory();
            let list = todos.getCategoryList(selectedCategory);
            const list1 = todos.getCategoryList(selectedCategory);
            const selectedFilter = todos.getSelectedFilter();
            const filteredList = todos.getFilteredList();
            if (list1.length !== filteredList.length) {
              list = filteredList;
            }
            return (
              <TodosWrapper>
                <AddCategory onAddCategory={todos.createCategory1} />
                <CategoryList
                  items={allCategories}
                  selectedCategory={selectedCategory}
                  categoryClick={todos.categoryClick1}
                />

                <FilterTodoList
                  onChangeFilter={todos.filterTodoList1}
                  selectedCategory={selectedCategory}
                />

                <AddTodo
                  selectedCategory={selectedCategory}
                  onAddTodo={todos.createTodo1}
                />
                <TodoList
                  items={list}
                  selectedCategory={selectedCategory}
                  toggleComplete={todos.toggleComplete1}
                />
              </TodosWrapper>
            );
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  );
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  color: white;
  padding: 40px;
`;

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export default App;
