import { useMemo, useState, useEffect } from "react"
import styled from 'styled-components';
import CARDS from '../constants/card';
import Card from "./Card";
import ClearModal from "./ClearModal";
import { LEVEL } from "../constants/Level";

export default function CardContainer({updateScore}) {

    // // 게임이 끝났는지 저장
    const [finished, setFinished] = useState(false)
    // 현재 선택한 카드 데이터 저장하는 배열
    const [clicked, setClicked] = useState(Array.from([]))

    // 게임이 끝나면 재배열 (finish 값이 변경되는 경우)
    const MixedCardList = useMemo(() => MixedCardDeck(), [finished])

    // 인덱스로 카드 선택
    const handleClick = (idx) => {
        // 선택한 카드 뒤집기
        MixedCardList.some((e) => {
            if (e.idx === idx) {
            e.status = !e.status
            return true
        }
          return false
        })
    
        setClicked([...clicked, idx])
      }
    
      useEffect(() => {
        setTimeout(() => {
          if (clicked.length === 2) {
            let a = MixedCardList.find((e) => e.idx === clicked[0]).id
            let b = MixedCardList.find((e) => e.idx === clicked[1]).id
            
            // 다른 경우 status를 false로 유지
            if (a !== b) {
              MixedCardList.forEach((e) => {
                if (e.idx === clicked[0] || e.idx === clicked[1]) {
                  e.status = false
                }
              })
            } else{
              // 같은 경우 점수 올리기
              updateScore((currentScore) => currentScore + 1);
            }
            // 선택 끝나면 배열 비우기
            setClicked(Array.from([]))
          }
        }, 700)
      }, [clicked])
    
      useEffect(() => {
        if (MixedCardList.every((e) => e.status === true)) {
          setFinished(true)
        }
      }, [clicked])
    
      const handleFinished = () => {
        setFinished(false)
        updateScore(0);
      }

    return(
        <GameLayout>
            {finished && (
            <ClearModal handleFinished={handleFinished} >
            </ClearModal>
      )}
            <CardsLayout>
                {MixedCardList.map((e) => (
                <Card
                    data={e}
                    key={e.idx}
                    handleClick={clicked.length < 2 ? handleClick : null}
                />
                ))}
            </CardsLayout>
        </GameLayout>
        
    )
}

const GameLayout = styled.div`
    display: flex;
    width: 100%;
    height: 37rem;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.KBOLightBlue};
`

const CardsLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`


function MixedCardDeck(){
    let cardDeck = [];
    let randomNumberArr = [];

    // 여기는 난이도 개수만큼
    for (let i = 0; i < LEVEL.EASY; i++) {
        // 랜덤 값 뽑기
        let randomNumber = getRandom(10, 0);    // 이미지 개수만큼
    
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

    // 섞은 값으로 카드 세팅
    for (let i = 0; i < LEVEL.EASY * 2; i++) {
        cardDeck.push({
            id: CARDS[randomNumberArr[i]].id,
            name: CARDS[randomNumberArr[i]].name, 
            img: CARDS[randomNumberArr[i]].img, 
            status: false,
            idx: i
        });
    }

    return cardDeck;
}

// 난수 생성 함수
function getRandom(max, min) {
    return parseInt(Math.random() * (max - min)) + min;
}

// 카드 섞는 함수
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}