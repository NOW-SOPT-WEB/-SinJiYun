import styled from 'styled-components';
// import theme from "./theme"


export default function Card({ data }) {
    const { id, name, img, status, idx } = data
    
        return (
            <CardLayout>
            <ShowCard checked={status}>
            <CardBack />
            <CardFront>
                <img src={img} />
            </CardFront>
            </ShowCard>
            </CardLayout>
        )
    }

const CardLayout = styled.div`
    display: flex;
    
`

const ShowCard = styled.section`
    
`
const CardFront = styled.div`
    display: flex;
    width: 12rem;
    height: 16rem;
    margin: 0.5rem;
    
`
const CardBack = styled.div`
    
`