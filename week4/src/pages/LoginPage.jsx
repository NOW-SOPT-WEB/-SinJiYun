import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {

  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <IDInputSection>
            ID
            <IDInput>

            </IDInput>
        </IDInputSection>
        <PWInputSection>
            PW
            <PWInput>

            </PWInput>
        </PWInputSection>
        <BtnSection>
        <LoginBtn type="button">
            로그인
        </LoginBtn>
        <SignUpBtn type="button" onClick={() => { navigate('/signup'); }}>
            회원가입
        </SignUpBtn>
        </BtnSection>
      </LoginContainer>
    </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 40rem;
    margin-top: 5rem;

    background-color: yellow;
`

const LoginTitle = styled.div`
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

const BtnSection = styled.section`
    
`

const LoginBtn = styled.button`
    margin: 2rem;
`
const SignUpBtn = styled.button`
    margin: 2rem;
`