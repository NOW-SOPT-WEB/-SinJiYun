import React from 'react'
import styled from "styled-components";

function Login() {

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
        <SignUpBtn type="button">
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

    width: 40rem;
    height: 50rem;
    margin-top: 3rem;

    background-color: yellow;
`

const LoginTitle = styled.div`
    display: flex;

    margin: 2rem;

    font-size: 2.5rem;
`

const IDInputSection = styled.section`
    
`

const IDInput = styled.input`
    
`

const PWInputSection = styled.section`
    
`

const PWInput = styled.input`
    
`

const BtnSection = styled.section`
    
`

const LoginBtn = styled.button`
    
`
const SignUpBtn = styled.button`
    
`