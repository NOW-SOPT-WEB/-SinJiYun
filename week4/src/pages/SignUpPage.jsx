import React from 'react'
import styled from "styled-components";

async function postSignUpData() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/member/join`,
        {
            authenticationId: id,
            password: password,
            nickname: nickname,
            phone: phone,
        }
      );
      return response.data;
    } catch (err) {
        console.log(err);
        alert(err.response.data.message);
    }
  }


function SignUpPage() {

  return (
    <SignUpWrapper>
        <SignUpContainer>
            <SignUpTitle>회원가입 페이지</SignUpTitle>
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
            <NameInputSection>
                닉네임
                <NameInput>

                </NameInput>
            </NameInputSection>
            <NumInputSection>
                전화번호
                <NumInput>

                </NumInput>
            </NumInputSection>
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
    height: 40rem;
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