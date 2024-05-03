import styled from 'styled-components';

export default function ClearModal({ handleFinished }){
    return(
        <ModalLayout >
            성공임미다!! 다시 시작하시겠습니까?
            <restartBtn onClick={handleFinished} >
                다시 시작하기
            </restartBtn>
        </ModalLayout>
    )
}

const ModalLayout = styled.div`
    position:absolute;
    justify-content: center;
    top: 50%;
    left: 50%;

    width: 20rem;
    height:40rem;

    background-color: white;
    z-index: 1;
`

const restartBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.KBOGold };

`