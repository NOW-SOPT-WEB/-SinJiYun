import React from 'react'
import { useNavigate, useParams  } from "react-router-dom";
import styled from "styled-components";

function MainPage() {
    const { location } = useParams();

    const navigate = useNavigate();

    console.log(location);

    return (
        <MainWrapper>
            <MainImg src="../src/assets/imges/SOPT.png"/>
            <BtnSection>
                <MyPageBtn type="button" onClick={() => { navigate(`/mypage/${location}`); }}>
                    내 정보
                </MyPageBtn>
                <SignUpBtn type="button" onClick={() => { navigate('/signup'); }}>
                    회원가입
                </SignUpBtn>
                </BtnSection>
        </MainWrapper>
    )
}

export default MainPage


const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`
const MainImg = styled.img`
    display: flex;

    width: 35rem;
    height: 20rem;
    margin-bottom: 3rem;
`
const BtnSection = styled.section`
    
`
const MyPageBtn = styled.button`
    margin: 2rem;
`
const SignUpBtn = styled.button`
    margin: 2rem;
`