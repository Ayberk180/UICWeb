import styled, {css} from "styled-components";

export const StyledButton = styled.button`
    background: #378D40;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: #AB9C49;
        color: #fff; 
        outline: 0; 
        transition: background-color .2s ease-out; 
    }
    
`; 

export const Container = styled.div`
    margin-left: auto; 
    margin-right: auto;
    margin-top: 5%;
    max-width: 1170px;  
    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0 #71C364;
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 700px) {
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            > * {
                padding: 2em; 
            }
        }
    `}
`; 

export const Form = styled.form`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-gap: 20px; 
`; 

export const Input = styled.input`
    border: 1px solid #71C364; 
    padding: 1em; 
    width: 100%; 
`; 

export const Label = styled.label`
    display: block; 
`; 

export const Textarea = styled.textarea`
    border: 1px solid #71C364; 
    padding: 1em; 
    width: 100%; 
`; 
export const Title = ({ className, text }) => (
    <h1 className={className}>{ text }</h1>
)

export const StyledTitle = styled(Title)`
    color: #B8161F;
    font: 70px; 
    text-align: center; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`; 