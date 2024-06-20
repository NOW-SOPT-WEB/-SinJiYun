import { React, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BtnComponent from '../Components/BtnComponent';

function Login() {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const navigate = useNavigate();

    const postLoginData = async() => {
        try {
            const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/member/login`,
            {
                authenticationId: userId,
                password: userPwd,
            }
            );
            const memberId = response.headers.location;
            navigate(`/main/${memberId}`)
            alert(response.data.message);
            console.log(response.data);
            return response.data;
            } catch (err) {
                console.log(err);
                alert(err.response.data.message);
            }
    }

    return (
        <LoginWrapper>
        <LoginContainer>
            <LoginTitle>Login</LoginTitle>
            <LoginImg src="../src/assets/imges/SOPT.png"/>
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
            <BtnSection>
            <BtnComponent 
                type="button" 
                buttonTitle = {"로그인"}
                onClickFunc={postLoginData} />
            <BtnComponent 
                type="button" 
                buttonTitle = {"회원가입"}
                onClickFunc={() => navigate('/signup')} />
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

    height: 60rem;

    background-color: ${({ theme }) => theme.colors.BgColor};
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 50rem;

    background-color: ${({ theme }) => theme.colors.LightBlue1};
`

const LoginTitle = styled.div`
    display: flex;

    margin: 2rem;

    font-size: 2.5rem;
`

const LoginImg = styled.img`
    display: flex;

    width: 35rem;
    height: 20rem;
    margin-bottom: 3rem;
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
    display: flex;
    float: left;
`
