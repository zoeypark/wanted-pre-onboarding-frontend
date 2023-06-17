import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axiosInstance from "../util/axios";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 1.5rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  > div {
    > input {
      width: 100%;
    }
  }
  >.errorMessage {
    color: red;
    font-size: 1rem;
  }
  >.signupBtn {
    border-radius: 1rem;
    border: none;
    padding: 1.5rem;
    color: white;
    background-color: black;
    transition: 0.5s;
  }
  >.signupBtnDisabled {
    border-radius: 1rem;
    border: none;
    padding: 1.5rem;
    color: white;
    background-color: #838383;
    transition: 0.5s;
  }
  >.signupBtn:hover {
    cursor: pointer;
  }
  >.signupBtnDisabled:hover {
    cursor: pointer;
  }
`

const Signup = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [isDisabled, setDisabled] = useState(true);
  
    const emailRegExp = useMemo(() => /^[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]*@[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]*$/i, []);
    const pwRegExp = useMemo(() => /^[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]{8,}$/i, []);
  
    const navigate = useNavigate();

    const signupBtnClick = async(e) => {
      e.preventDefault()
        try {
          const res = await axiosInstance.post(
            '/auth/signup',
            {
              "email": email,
              "password": pw
            }
          );
          alert("Congratulations! Your registration was successful. with your email address and password, you can now signin anytime.");
          navigate('/signin', { replace: true });
        } catch (e) {
          alert(e.request.response)
        }
    }
    
    useEffect(() => {
      if(emailRegExp.test(email) && pwRegExp.test(pw)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },[email,pw,emailRegExp,pwRegExp,isDisabled]);

    useEffect(()=>{
      const accessToken = localStorage.getItem("accessToken");
      if(accessToken) {
        navigate('/todo')
      }
    }, [navigate]);
  
    return (
      <>
        <StyledContainer>
          <StyledForm>
            <div>
              <label htmlFor="email-input">email</label>
              <input 
                id="email-input"
                data-testid="email-input" 
                placeholder="enter your email"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value);
                  }}></input>
            </div>
            {emailRegExp.test(email) || email === '' ? '' : <div className="errorMessage">Invalid email address</div>}
            <div>
              <label htmlFor="password-input">password</label>
              <input 
                id="password-input"
                data-testid="password-input" 
                placeholder="enter your password"
                value={pw}
                onChange={(e)=>{
                  setPw(e.target.value);
                  }}></input>
            </div>
            {pwRegExp.test(pw) || pw === '' ? '' : <div className="errorMessage">Invalid password</div>}
            <button 
              data-testid="signup-button" 
              className={emailRegExp.test(email) === true && pwRegExp.test(pw) === true ? "signupBtn" : "signupBtnDisabled"} 
              type="submit"
              disabled={isDisabled ? true : false}
              onClick={signupBtnClick}
              >Sign up</button>
          </StyledForm>
        </StyledContainer>
      </>
  )
}

export default Signup;