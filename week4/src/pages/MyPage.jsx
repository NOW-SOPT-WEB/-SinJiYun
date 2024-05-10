import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Dropdown from '../Components/Dropdown';

function MyPage() {
    const { location } = useParams();
    const [userData, setUserData] = useState([]);
    const [toggleOpen, setToggleOpen] = useState(false);

    const [userPwd, setUserPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [checkPwd, setCheckPwd] = useState("");

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
    }, [location]);

    const patchPwdData = async() => {
        
        if (!userPwd || !newPwd || !checkPwd) {
            alert('모든 칸을 입력해 주세요!');
            return;
        }

        try {
            const response = await axios.patch(
            `${import.meta.env.VITE_SERVER_URL}/member/password`,
            {
                previousPassword : userPwd,
                newPassword : newPwd, 
                newPasswordVerification : checkPwd,
            },
            {
                headers: {
                    memberId: location
                }
            }
        );
            
            alert(`비밀번호가 ${newPwd}로 변경되었습니다!`);
            return response.data.data;
            } catch (err) {
                console.log(err);
                alert(err.response.data.message);
            }
    }


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
                <PWInputSection>
                    기존 비밀번호
                    <PWInput 
                    type="text"
                    value={userPwd}
                    onChange={(e) => setUserPwd(e.target.value)} />
                </PWInputSection>    
                <PWInputSection>
                    새 비밀번호
                    <NewPWInput 
                    type="text"
                    value={newPwd}
                    onChange={(e) => setNewPwd(e.target.value)}/>
                </PWInputSection>
                <PWInputSection>
                    비밀번호 확인
                    <CheckPWInput 
                    type="text"
                    value={checkPwd}
                    onChange={(e) => setCheckPwd(e.target.value)}/>
                </PWInputSection>
                <ChangeBtn type="button" onClick={patchPwdData}>
                    비밀번호 변경
                </ChangeBtn>
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
    display: flex;

    margin-top: 2rem;
`
const PWInputSection = styled.section`
    
`

const PWInput = styled.input`
    margin: 1rem;
`
const NewPWInput = styled.input`
    margin: 1rem;
`
const CheckPWInput = styled.input`
    margin: 1rem;
`

const ChangeBtn = styled.button`
    
`

const MainBtn = styled.button`
    
`