import { useMemo, useState } from "react"
import styled from 'styled-components';
import CARDS from '../constants/card';
import Card from "./Card";

let cardDeck = [];

const CardContainer = () => {
    const [finished, setFinished] = useState(false)

    const MixedCardList = useMemo(() => MixedCardDeck(), [finished])

    return(
        <GameLayout>
            <CardsLayout>
                {MixedCardList.map((e) => (
                <Card
                    data={e}
                    key={`${e.idx}-${e.item}`}
                    // handleClick={clicked.length < 2 ? handleClick : null}
                />
                ))}
            </CardsLayout>
        </GameLayout>
        
    )
}

export default CardContainer;

const GameLayout = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.KBOLightBlue};
`

const CardsLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(8, 1fr);

`

function MixedCardDeck(){

    let randomNumberArr = [];

    // 여기는 난이도 개수만큼
    for (let i = 0; i < 10 / 2; i++) {
        // 랜덤 값 뽑기
        let randomNumber = getRandom(10, 0);    // 카드 개수만큼
    
        // 중복 검사
        if (randomNumberArr.indexOf(randomNumber) === -1) {
            randomNumberArr.push(randomNumber);
        } else {
            i--;
        }
    }

    // 카드는 두 장씩 필요 >> 한 번 더 추가
    randomNumberArr.push(...randomNumberArr);

    // 카드 섞기
    shuffle(randomNumberArr);
    console.log(randomNumberArr);

    // 섞은 값으로 카드 세팅
    for (let i = 0; i < 10; i++) {
        cardDeck.push({
            id: CARDS[randomNumberArr[i]].id,
            name: CARDS[randomNumberArr[i]].name, 
            img: CARDS[randomNumberArr[i]].img, 
            status: false,
            idx: i
        });
    }
    // 카드 섞이는지 확인
    console.log(cardDeck);

    return cardDeck;
}

// 난수 생성 함수
function getRandom(max, min) {
    return parseInt(Math.random() * (max - min)) + min;
}

// 카드 섞는 함수
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}