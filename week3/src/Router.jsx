import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import styled from 'styled-components';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <GlobalWrapper>
                    <Routes>
                        <Route path="/" element={< MainPage/>} />
                    </Routes>
                </GlobalWrapper>
            </BrowserRouter>
        </>
    );
}

const GlobalWrapper = styled.main`
    margin: 0 auto;
`;