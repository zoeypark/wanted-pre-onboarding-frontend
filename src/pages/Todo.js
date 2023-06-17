import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 2rem;
  gap: 3rem;
  > div {
    width: 100%;
    display: flex;
    gap: 1rem;
    > input {
      width: 100%;
    }
    > button {
      border: none;
      background-color: #fafafa;
      cursor: pointer;
    }
    > button:hover {
      color: #d9d9d9;
    }
  }
  > ul {
    width: 100%;
    > li {
      display: flex;
      gap: 0.5rem;
      > label {
        width: 100%;
        > span {
          overflow: scroll;
        }
      }
      > button {
        border: none;
      }
      > button:hover {
        background-color: #d9d9d9;
        cursor: pointer;
      }
    }
  }
`

const Todo = () => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken) {
      alert('You need to sign in first to access this page');
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <>
      <StyledContainer>
        <div>
          <input data-testid="new-todo-input" placeholder="Create new todo"></input>
          <button data-testid="new-todo-add-button">+add</button>
        </div>
        <ul>
          <li>
              <label>
                <input type="checkbox"/>
                <span>rmfwkRkwl </span>
              </label>
              <button data-testid="modify-button">edit</button>
              <button data-testid="delete-button">delete</button>
          </li>
        </ul>
      </StyledContainer>
    </>
  )
}

export default Todo;