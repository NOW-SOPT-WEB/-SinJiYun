import styled from 'styled-components';
// import CARDS from '../constants/card';

const CardContainer = () => {




    return(
        <GameLayout>
            컨테이너가 들어갈 자리입니다~
            <CardsLayout>
                카드들 들어갈 자리
            </CardsLayout>
        </GameLayout>
    )
}

export default CardContainer;

const GameLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
    background-color: ${({ theme }) => theme.colors.KBOLightBlue};
`

const CardsLayout = styled.section`
    
`