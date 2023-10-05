import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axiosInstance from "../util/axios";
import eyeOpened from "../assets/🦆 icon _eye outline_.png";
import eyeClosed from "../assets/🦆 icon _eye outline disabled_.png"

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 2rem;
  > button {
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-radius: 1rem;
    color: white;
    background-color: powderblue;
    transition: 0.5s;
  }
  > button:hover {
      background-color: black;
      cursor: pointer;
      transition: 0.5s;
    }
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
    >.passwordPreview {
    width: 2.5rem;
    position: absolute;
    margin-top: 1rem;
    margin-left: 1rem;
    }
  }
    >.errorMessage {
    color: red;
    font-size: 1rem;
  }
  >.signinBtn {
    border-radius: 1rem;
    border: none;
    padding: 1.5rem;
    color: white;
    background-color: blue;
    transition: 0.5s;
  }
  >.signinBtnDisabled {
    border-radius: 1rem;
    border: none;
    padding: 1.5rem;
    color: white;
    background-color: #838383;
    transition: 0.5s;
  }
  >.signinBtn:hover {
    cursor: pointer;
  }
  >.signinBtnDisabled:hover {
    cursor: not-allowed;
  }
`

const Signin = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const [eyeImageClicked, setClick] = useState(false);

  const emailRegExp = useMemo(() => /^[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]*@[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]*$/i, []);
  const pwRegExp = useMemo(() => /^[0-9a-zA-Z~!@#$%^&*()_+{}|:<>?`=,.]{8,}$/i, []);

  const navigate = useNavigate();

  const signinBtnClick = async(e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        'auth/signin',
        {
          "email": email,
          "password": pw
        }
      );
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);
      navigate('/todo');
    } catch (e) {
      if(e.response.status === 401){
        alert('Sorry, this email and password combination is not known. Please try again.')
      } else {
        alert(e.message);
      }
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

  const eyeImageClick = () => {
    setClick(!eyeImageClicked);
  }

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
          <div className="password-input-wrapper">
            <label htmlFor="password-input">password</label>
              <input 
              id="password-input"
              data-testid="password-input" 
              placeholder="enter your password"
              autoComplete="off"
              type={eyeImageClicked ? "text" : "password"}
              value={pw}
              onChange={(e)=>{
                setPw(e.target.value);
                }}></input>
              <img className="passwordPreview" onClick={eyeImageClick} alt="eye-opened" src={eyeImageClicked ? eyeOpened : eyeClosed}/>
          </div>
          {pwRegExp.test(pw) || pw === '' ? '' : <div className="errorMessage">Invalid password</div>}
          <button 
            data-testid="signin-button" 
            className={emailRegExp.test(email) === true && pwRegExp.test(pw) === true ? "signinBtn" : "signinBtnDisabled"} 
            type="submit"
            disabled={isDisabled ? true : false}
            onClick={signinBtnClick}
            >Sign in</button>
        </StyledForm>
        <button onClick={() => {navigate('/signup')}}>Create an account</button>
      </StyledContainer>
    </>
  )
}

export default Signin;