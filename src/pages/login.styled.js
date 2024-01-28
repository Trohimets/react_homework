import Styled from "styled-components"

export const LoginWrapper = Styled.div`
max-width: 1000px;
margin: 0 auto;
form {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 auto;
    
    input {
        width: 200px;
        padding: 0px;
        margin-bottom: 10px;
    }

    button: {
        width: 200px;
    }
}
`