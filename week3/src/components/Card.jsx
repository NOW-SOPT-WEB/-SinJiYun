import styled from 'styled-components';

export default function Card({ data, handleClick }) {
    const { id, name, img, status, idx } = data

    const handleCard = (idx) => {
        handleClick && handleClick(idx)
      }
    
    return (
        <CardLayout onClick={() => status || handleCard(idx)}>
          <CardPiece checked={status}>
            <CardBack><img src='src/assets/images/KBO.png' width='100%' height='100%'/>
            </CardBack>
            <CardFront>
                <img src = {img} width='100%' height='100%' />
            </CardFront>
          </CardPiece>
        </CardLayout>
      )
    }
    
const CardLayout = styled.div`
    display: inline-block;
    perspective: 15rem;
    width: 9rem;
    height: 12rem;
`

const CardPiece = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${({ checked }) => checked && `transform: rotateY(180deg)`}
`

const CardFace = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 9rem;
    height: 12rem;
`

const CardBack = styled(CardFace)`
    width: '100%'; 
    height:'100%';
`

const CardFront = styled(CardFace)`
    text-align: center;
    transform: rotateY(180deg);
`
    