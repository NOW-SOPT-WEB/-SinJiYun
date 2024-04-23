import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderLayout>
            <Title>
                <h1>KBO 마스코드 짝맞추기</h1>
            </Title>
            <ResetBtn>
                Reset
            </ResetBtn>
        </HeaderLayout>
        
    )
}

export default Header

const HeaderLayout = styled.div`
    display: block;
    background-color: ${({ theme }) => theme.colors.KBOBlue};
`

const Title = styled.div`
    padding: 3rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 2rem;
    color: white;
`
const ResetBtn = styled.button`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.KBORed};
    
`