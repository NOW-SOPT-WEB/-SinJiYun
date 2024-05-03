import styled from 'styled-components';

export default function ClearModal({ handleFinished }){

    const comment = "성공입니다!! \n다시 시작하시겠습니까?";

    return(
        <ModalLayout >
            <CommentLayout>
                {comment}
            </CommentLayout>
            <RestartBtn onClick={handleFinished} >
                다시 시작하기
            </RestartBtn>
        </ModalLayout>
    )
}

const ModalLayout = styled.div`
    position:absolute;
    justify-content: center;
    text-align: center;
    top: 40%;
    left: 30%;

    width: 40rem;
    height: 20rem;

    background-color: ${({ theme }) => theme.colors.KBOBlue};
    border-radius: 1rem;

    z-index: 1;
`

const CommentLayout = styled.div`
    margin-top: 2rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: white;
    font-size: 3.5rem;

    white-space: pre-line;
`

const RestartBtn = styled.button`
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.colors.KBOGold};

    width: 8rem;
    height: 4rem;

    border: 0;
    border-radius: 1.5rem;
    
    font-family: ${({ theme }) => theme.fonts.medium};

`