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

const ModalLayout = styled.div`;
`

const restartBtn = styled.button`

`