import styled from 'styled-components';
import { LEVEL } from "../constants/Level";

export default function Header({ score }) {
    return(
        <HeaderLayout>
            <TitleLayout>
                <Title>
                <h1>KBO 마스코드 짝맞추기</h1>
                </Title>
                <ResetBtn
                type>
                    Reset
                </ResetBtn>
            </TitleLayout>
            <Score>{score}/{LEVEL.EASY}</Score>
        </HeaderLayout>
        
    )
}


const HeaderLayout = styled.header`
    background-color: ${({ theme }) => theme.colors.KBOBlue};
`

const TitleLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
`

const Title = styled.div`
    padding: 3rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 3rem;
    color: white;
`
const ResetBtn = styled.button`
    position: fixed;
    margin: 3rem;
    right: 0;
    background-color: ${({ theme }) => theme.colors.KBORed};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color: white;
    height: 4rem;
    width: 8rem;
    border: none;
    border-radius: 1rem;
`
const Score = styled.div`
    text-align: center;
    padding: 2rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color : white;
`