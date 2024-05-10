import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Dropdown from '../Containers/Dropdown';

function MyPage() {
    const { location } = useParams();
    const [userData, setUserData] = useState([]);
    const [toggleOpen, setToggleOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async() => {
            try {
                const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/member/info`,
                {
                    headers: {
                        memberId: location
                    }  
                });
                setUserData(response.data.data);
                return response.data.data;
                } catch (err) {
                    console.log(err);
                    alert(err.response.data.message);
                }
        }
    getUserData();
    }, [location]
);


    return (
        <MyPageWrapper>
            <MyPageContainer>
                <MyPageTitle>마이 페이지</MyPageTitle>
                <InfoSection>
                    아이디 {userData.authenticationId}
                </InfoSection>
                <InfoSection>
                    이름 {userData.nickname}
                </InfoSection>
                <InfoSection>
                    전화번호 {userData.phone}
                </InfoSection>
                <DropdownBtn type="button" onClick={e => setToggleOpen(!toggleOpen)}>
                    {
                        toggleOpen
                        ? '비밀번호 변경 ▼'
                        : '비밀번호 변경 ▲'
                    }
                </DropdownBtn>
                <Dropdown isOpen={toggleOpen}>
                    테스트용
                </Dropdown>
                <MainBtn type="button" onClick={() => { navigate(`/main/${location}`); }}>
                    홈으로
                </MainBtn>
            </MyPageContainer>
        </MyPageWrapper>
    )
}

export default MyPage

const MyPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 50rem;
    margin-top: 5rem;

    background-color: yellow;
`

const MyPageTitle = styled.div`
    display: flex;

    margin: 5rem;

    font-size: 2.5rem;
`
const InfoSection = styled.section`
    
`

const DropdownBtn = styled.button`
    
`

const MainBtn = styled.button`
    
`