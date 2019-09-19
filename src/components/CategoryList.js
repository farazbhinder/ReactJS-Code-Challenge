import React from "react";

import styled from "styled-components";

import CategoryItem from "./CategoryItem";

const CategoryList = ({ items, selectedCategory, categoryClick }) => (
  <LeftPane>
    {console.log("items.map", items)}
    {items.map(item => {
      const onCategoryClick = e => {
        categoryClick(item.text, item.id);
      };

      return (
        <CategoryItem
          key={item.id}
          selectedCategory={selectedCategory}
          {...item}
          onCategoryClick={onCategoryClick}
        />
      );
    })}
  </LeftPane>
);

const LeftPane = styled.div`
  background-color: #282b23;
  height: 10vh;
  min-width: 20vw;
  align-items: center;
  overflow-y: auto;
  float: left;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  color: white;

  display: flex;
  flex-direction: row;
`;

export default CategoryList;
