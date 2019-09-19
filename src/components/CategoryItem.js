import React from 'react'

import styled from 'styled-components'

const CategoryItem = ({ text, onCategoryClick }) => (
    <Wrapper onClick={onCategoryClick}>
        <span>{text}</span>
    </Wrapper>
);

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
`

export default CategoryItem;