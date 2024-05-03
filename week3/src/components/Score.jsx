import styled from 'styled-components';

const Score = () => {
    return(
        <ScoreLayout>
            점수 들어갈 자리
        </ScoreLayout>
        
    )
}

export default Score;

const ScoreLayout = styled.div`
    background-color: ${({ theme }) => theme.colors.KBOBlue};
    text-align: center;
    padding: 2rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color : white;
`

// const Score = styled.div`
//     text-align: center;
//     padding: 2rem;
//     font-family: ${({ theme }) => theme.fonts.bold};
//     font-size: 1.5rem;
//     color : white;
// `