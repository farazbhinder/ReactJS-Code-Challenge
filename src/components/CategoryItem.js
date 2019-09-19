import React from "react";

import styled from "styled-components";

const CategoryItem = ({ text, selectedCategory, onCategoryClick }) => (
  <Wrapper onClick={onCategoryClick}>
    <span>
      <Text selectedCategory={selectedCategory} text={text}>
        {text}
      </Text>
    </span>
  </Wrapper>
);

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
  margin-right: 40px;
`;

const Text = styled.span`
  color: ${props =>
    props.selectedCategory === props.text ? "yellow" : "white"};
`;

export default CategoryItem;
