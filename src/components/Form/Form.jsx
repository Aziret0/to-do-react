import React from 'react';
import Button from '../Button';
import {db} from '../../firebase';
import {addDoc, collection,} from "firebase/firestore";
import './Form.css'

const Form = ({todoText, setTodoText, todoList, setTodoList}) => {
    const generateTime = () => {
        const time = new Date()
        const hour = time.getHours()
        const minutes = time.getMinutes()
        const date = time.getDate()
        const month = time.toLocaleString('en', {  month: 'short'})
        return `${hour}:${minutes} ${date} ${month}`
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        addDoc(collection(db, 'todos'), {
            time: generateTime(),
            todoText: todoText,
            isActive: true,
            isEditable: false
        })
        setTodoText('')
    }

    const inputHandler = (e) => {
        setTodoText(e.target.value)
    }
  return (
    <form onSubmit={submitHandler}>
        <h1>To Do App</h1>
    <input required value={todoText} onChange={inputHandler} type="text" placeholder='what do you want to do?'/>
    <Button type='submit'>add</Button>
</form>
  )
}

export default Form