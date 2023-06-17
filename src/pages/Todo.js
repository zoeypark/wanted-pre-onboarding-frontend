import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axiosInstance from "../util/axios";

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
  
  const [todos, setTodos] = useState([]);
  const [newTodo,setNewTodo] = useState('');

  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken) {
      alert('You need to sign in first to access this page');
      navigate('/signin');
    }
  }, [navigate]);

  const accessToken = localStorage.getItem("accessToken");

  const headers = {
      headers: {Authorization: `Bearer ${accessToken}`}
    }

  useEffect(() => {
    getTodos();
  },[]);

  const getTodos = async() => {
    try {
      const res = await axiosInstance.get(
        '/todos',
        headers
      )
      console.log(res.data);
      setTodos(res.data);
    } catch(e) {
      console.log(e);
    };
  }

  const createTodoBtnClick = () => {
    createTodo();
  }

  const createTodo = async() => {
    try {
      const res = await axiosInstance.post(
        '/todos',
        {
          todo: newTodo
        },
        headers
      )
      console.log(res);
      if(res.status === 201) {
        getTodos();
        setNewTodo('');
      }
    } catch(e) {
      console.log(e);
    }
  }

  console.log(newTodo);

  return (
    <>
      <StyledContainer>
        <div>
          <input data-testid="new-todo-input" placeholder="Create new todo" onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}></input>
          <button data-testid="new-todo-add-button" onClick={createTodoBtnClick}>+add</button>
        </div>
        <ul>
          {todos.map((todo)=>{
            return(
              <li key={todo.id}>
                <label>
                  <input type="checkbox" defaultChecked={todo.isCompleted}/>
                  <span>{todo.todo}</span>
                </label>
                <button data-testid="modify-button">edit</button>
                <button data-testid="delete-button">delete</button>
              </li>
            )
          })}
        </ul>
      </StyledContainer>
    </>
  )
}

export default Todo;