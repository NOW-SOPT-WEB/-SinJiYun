import { useState } from  "react";
import styled from 'styled-components';

const SelectLevel = () => {
    let level = ['Easy', 'Normal', 'Hard'];

    let [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive(e.target.value);
    };


    return(
        <SelectLevelLayout>
            {level.map((item, idx) => {
                return (
                    <LevelBtn 
                    type="button"
                    key={item}
                    value={idx}
                    className={"btn" + (idx == btnActive ? " active" : "")}
                    onClick={toggleActive}>
                        {item}
                    </LevelBtn>
                );
            })}
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
const LevelBtn = styled.button`
    margin: 1rem;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 1.5rem;
    color: white;
    height: 3rem;
    width: 8rem;
    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.KBOSilver};

    &.active {
        background-color: ${({ theme }) => theme.colors.KBOGold};
    }
`
