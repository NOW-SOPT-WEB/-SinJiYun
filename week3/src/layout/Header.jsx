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
    padding: 3rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.KBOBlue};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.6rem;
    color: white;
`