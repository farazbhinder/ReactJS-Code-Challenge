import React from "react";

import styled from "styled-components";

const FilterTodoList = ({ onChangeFilter, selectedCategory }) => {
  return (
    <Wrapper>
      <form>
        <Label>
          <input
            type="radio"
            value={"completed"}
            name={"filterTodo"}
            // checked={isChecked}
            onChange={e => onChangeFilter(selectedCategory, e.target.value)}
          />
          completed
        </Label>
        <Label>
          <input
            type="radio"
            value={"active"}
            name={"filterTodo"}
            // checked={isChecked}
            onChange={e => onChangeFilter(selectedCategory, e.target.value)}
          />
          active
        </Label>
        <Label>
          <input
            type="radio"
            value={"all"}
            name={"filterTodo"}
            defaultChecked
            // checked={true}
            onChange={e => onChangeFilter(selectedCategory, e.target.value)}
          />
          all
        </Label>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-right: 40px;
`;

export default FilterTodoList;
