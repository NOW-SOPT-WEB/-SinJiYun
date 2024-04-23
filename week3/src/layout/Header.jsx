import styled from 'styled-components';

const Header = () => {
    return(
        <Title className ="header">
            <h1>KBO 마스코드 짝맞추기</h1>
        </Title>
    )
}

export default Header

const Title = styled.div`
    text-align: center;
;`