import styled from 'styled-components';

export const SignUpStyled = ({children}) => {
    return (
        <DivSignUpStyled>
            <CardSignUp>
                {children}
            </CardSignUp>
        </DivSignUpStyled>    
    )
}

const DivSignUpStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: ${props => props.theme.sizes.heightIn}px;
    background-color: ${props => props.theme.colors.desert};
`

const CardSignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: ${props => props.theme.sizes.heightIn/2}px;
    background-color: ${props => props.theme.colors.bg};
    border-radius: 20px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 20px;
    h1 {
        color: ${props => props.theme.colors.mainRed}
    }
    label {
        color: ${props => props.theme.colors.eden}
    }
    input {
        margin: 10px;
    }
`
