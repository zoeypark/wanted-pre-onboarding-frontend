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
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  >.signupBtn {
    border-radius: 1rem;
    border: none;
    padding: 1rem;
    color: white;
    background-color: black;
  }
  >.signupBtn:hover {
    cursor: pointer;
    background-color: #838383;
  }
`

const Signup = () => {
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
            data-testid="signup-button"
            className="signupBtn" 
            type="submit">Sign up</button>
        </StyledForm>
      </StyledContainer>
    </>
  )
}

export default Signup;