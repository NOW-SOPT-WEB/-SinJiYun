import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


function SignUpPage() {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userName, setUserName] = useState("");
    const [userNum, setUserNum] = useState("");

    const navigate = useNavigate();

    const postSignUpData = async() => {
        try {
            const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/member/join`,
            {
                authenticationId: userId,
                password: userPwd,
                nickname: userName,
                phone: userNum,
            }
            );
            navigate('/')
            alert(response.data.message);
            return response.data;
            } catch (err) {
                console.log(err);
                alert(err.response.data.message);
            }
    }

    return (
        <SignUpWrapper>
            <SignUpContainer>
                <SignUpTitle>회원가입 페이지</SignUpTitle>
                <IDInputSection>
                    ID
                    <IDInput
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />
                </IDInputSection>
                <PWInputSection>
                    PW
                    <PWInput
                    type="text"
                    value={userPwd}
                    onChange={(e) => setUserPwd(e.target.value)} />
                </PWInputSection>
                <NameInputSection>
                    닉네임
                    <NameInput
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} />
                </NameInputSection>
                <NumInputSection>
                    전화번호
                    <NumInput
                    type="text"
                    value={userNum}
                    onChange={(e) => setUserNum(e.target.value)} />
                </NumInputSection>
                <BtnSection>
                <SignUpBtn type="button" onClick={postSignUpData}>
                    회원가입
                </SignUpBtn>
                <LoginBtn type="button" onClick={() => { navigate('/'); }}>
                로그인
                </LoginBtn>
                </BtnSection>
            </SignUpContainer>
        </SignUpWrapper>
    )
}

export default SignUpPage

const SignUpWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 50rem;
    margin-top: 5rem;

    background-color: yellow;
`

const SignUpTitle = styled.div`
    display: flex;

    margin: 5rem;

    font-size: 2.5rem;
`

const IDInputSection = styled.section`
`

const IDInput = styled.input`
    margin: 2rem;
`
const PWInputSection = styled.section`
`

const PWInput = styled.input`
    margin: 2rem;
`
const NameInputSection = styled.section`
`

const NameInput = styled.input`
    margin: 2rem;
`

const NumInputSection = styled.section`
`

const NumInput = styled.input`
    margin: 2rem;
`

const BtnSection = styled.section`
    
`

const SignUpBtn = styled.button`
    margin: 2rem;
`

const LoginBtn = styled.button`
    margin: 2rem;
`