import React from 'react'
import styled from "styled-components";

function BtnComponent({ buttonTitle, onClickFunc}) {
  return (
    <ButtonComponent type="button" onClick={onClickFunc}>
        {buttonTitle}
    </ButtonComponent>
  );
}

export default BtnComponent

const ButtonComponent = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 6rem;
    height: 2rem;
    margin: 2rem;
    border: 0;
`