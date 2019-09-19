import React from "react";
import { Provider, Subscribe } from "unstated";

import styled from "styled-components";

import TodosContainer from "./store";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";

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
            const list = todos.getCategoryList(selectedCategory);
            return (
              <TodosWrapper>
                <AddCategory onAddCategory={todos.createCategory1} />
                <CategoryList
                  items={allCategories}
                  categoryClick={todos.categoryClick1}
                />
                <AddTodo
                  selectedCategory={selectedCategory}
                  onAddTodo={todos.createTodo1}
                />
                <TodoList items={list} toggleComplete={todos.toggleComplete1} />
              </TodosWrapper>
            );
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  );
}

const FlexButton = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: block;
`;

const LeftPane = styled.div`
  background-color: #282b23;
  height: 100vh;
  min-width: 20vw;
  align-items: center;
  overflow-y: auto;
  float: left;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  color: white;

  display: flex;
  flex-direction: column;
`;

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
