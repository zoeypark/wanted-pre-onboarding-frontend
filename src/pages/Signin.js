import { styled } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  gap: 1.5rem;
  > button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: #D9D9D9;
  }
  > button:hover {
      background-color: #838383;
      cursor: pointer;
    }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  >.signinBtn {
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    color: white;
    background-color: black;
  }
  >.signinBtn:hover {
    cursor: pointer;
  }
`

const Signin = () => {
  return (
    <>
      <StyledContainer>
        <StyledForm>
          <div>
            <label>email</label>
            <input data-testid="email-input" placeholder="enter your email"></input>
          </div>
          <div>
            <label>password</label>
            <input data-testid="password-input" placeholder="enter your password"></input>
          </div>
          <button 
            data-testid="signin-button" 
            className="signinBtn" 
            type="submit">Signin</button>
        </StyledForm>
        <button>Create an account</button>
      </StyledContainer>
    </>
  )
}

export default Signin;