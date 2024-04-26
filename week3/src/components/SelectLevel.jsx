import styled from 'styled-components';

const SelectLevel = () => {
    return(
        <SelectLevelLayout>
            <EasyBtn>Easy</EasyBtn>
            <NormalBtn>Normal</NormalBtn>
            <HardBtn>Hard</HardBtn>
        </SelectLevelLayout>
        
    )
}

export default SelectLevel;

const SelectLevelLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;
    background-color: ${({ theme }) => theme.colors.KBOLightBlue};
    padding: 1rem;
`

const EasyBtn = styled.button`
    margin: 1rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color: white;
    height: 3rem;
    width: 8rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.KBOGold};
`

const NormalBtn = styled.button`
    margin: 1rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color: white;
    height: 3rem;
    width: 8rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.KBOGold};
`

const HardBtn = styled.button`
    margin: 1rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color: white;
    height: 3rem;
    width: 8rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.KBOGold};
    
`
