import React from 'react'
import { useNavigate, useParams  } from "react-router-dom";
import styled from "styled-components";
import BtnComponent from '../Components/BtnComponent';

function MainPage() {
    const { location } = useParams();

    const navigate = useNavigate();

    return (
        <MainWrapper>
            <MainImg src="../src/assets/imges/SOPT.png"/>
            <BtnSection>
                <BtnComponent
                type="button"
                buttonTitle={"내 정보"}
                onClickFunc={() => navigate(`/mypage/${location}`)} />
                <BtnComponent
                type="button"
                buttonTitle={"회원가입"}
                onClickFunc={() => navigate('/signup')} />
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
    display: flex;
    float: left;
`
const MyPageBtn = styled.button`
    margin: 2rem;
`
const SignUpBtn = styled.button`
    margin: 2rem;
`