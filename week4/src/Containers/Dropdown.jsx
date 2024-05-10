import { React, useEffect} from 'react';
import styled from "styled-components";

const Dropdown = props => {

  return (
    <DropdownComponent>
        { props.isOpen && props.children }
    </DropdownComponent>
  )
}

export default Dropdown

const DropdownComponent = styled.div`
    
`