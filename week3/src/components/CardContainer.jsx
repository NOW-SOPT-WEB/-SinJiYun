import { useMemo, useState, useEffect } from "react"
import styled from 'styled-components';
import CARDS from '../constants/card';
import Card from "./Card";
import ClearModal from "./ClearModal";
import { LEVEL } from "../constants/Level";


export default function CardContainer({updateScore}) {
    // 게임이 끝났는지 저장
    const [finished, setFinished] = useState(false)
    // 현재 선택한 카드 데이터 저장하는 배열
    const [clicked, setClicked] = useState(Array.from([]))

    // 게임이 끝나면 재배열 (finish 값이 변경되는 경우)
    const MixedCardList = useMemo(() => MixedCardDeck(), [finished])

    // 인덱스로 카드 선택
    const handleClick = (idx) => {
        // 선택한 카드 뒤집기
        console.log(idx)
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
            // 두 카드가 같지 않은 경우
            if (a !== b) {
              MixedCardList.forEach((e) => {
                if (e.idx === clicked[0] || e.idx === clicked[1]) {
                  e.status = false
                  // updateScore((currentScore) => currentScore - 1);
                }
              })
            } else{
              updateScore((currentScore) => currentScore + 1);
            }
            // 선택 끝나면 배열 비우기
            setClicked(Array.from([]))
          }
        }, 700)
      }, [clicked])
    
      useEffect(() => {
        if (MixedCardList.every((e) => e.status === true)) {
          console.log("모두 다 맞춘 경우")
          setFinished(true)
        }
      }, [clicked])
    
      const handleFinished = () => {
        setFinished(false)
      }

    return(
        <GameLayout>
            {finished && (
            <ClearModal>
              <span>다시 시작하시겠습니까?</span>
              <button type="button" onClick={handleFinished}>
                다시 시작
              </button>
            </ClearModal>
      )}
            <CardsLayout>
                {MixedCardList.map((e) => (
                <Card
                    data={e}
                    key={`${e.idx}-${e.name}`}
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
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.KBOLightBlue};
`

const CardsLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`

function MixedCardDeck(){
  // 카드 개수가 자꾸 두 배가 되어서 길이 고정
  let cardDeck = Array.from({ length: 0 }, () => {
    return {}
  })

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
    console.log(`카드 섞기${randomNumberArr}`);

    // 섞은 값으로 카드 세팅
    for (let i = 0; i < LEVEL.EASY * 2; i++) {
        cardDeck.push({
            id: CARDS[randomNumberArr[i]].id,
            name: CARDS[randomNumberArr[i]].name, 
            img: CARDS[randomNumberArr[i]].img, 
            status: false,
            idx: i
        });
        console.log(cardDeck.length);
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
    return array.sort(() => Math.random() - 0.5);
}