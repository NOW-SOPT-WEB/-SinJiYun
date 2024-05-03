import styled from 'styled-components';
// import theme from "./theme"


export default function Card({ data, handleClick }) {
    const { id, name, img, status, idx } = data

    const handleCard = (idx) => {
        if (handleClick) handleClick(idx)
      }
    
    return (
        <CardFrame onClick={() => status || handleCard(idx)}>
          <CardPiece checked={status}>
            <CardFront />
            <CardBack>
                <img src = {img} width='120' height='160' />
            </CardBack>
          </CardPiece>
        </CardFrame>
      )
    }
    
const CardFrame = styled.div`
    display: inline-block;
    height: 150px;
    perspective: 600px;
    width: 9rem;
    height: 12rem;
`

const CardPiece = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${({ checked }) => (checked ? `transform: rotateY(180deg)` : null)}
`

const CardFace = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 9rem;
    height: 12rem;
`

const CardFront = styled(CardFace)`
    background: violet;
`

const CardBack = styled(CardFace)`
    padding: 20px 0;
    text-align: center;
    background: peru;
    transform: rotateY(180deg);
`
    