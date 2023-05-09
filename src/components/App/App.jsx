import React, { useEffect, useState } from 'react';
import {db} from '../../firebase';
import { collection, onSnapshot, query} from "firebase/firestore";
import Form from '../Form';
import TodoList from '../TodoList';
import './App.css'

const App = () => {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState(null)
    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            const todosArr = []
            querySnapshot.forEach((doc) => {
                todosArr.push({...doc.data(), id: doc.id, settingActive: false})
            })
            setTodoList(todosArr)
        }) 
        return () => unsubscribe()
    }, [])
  return (
    <div className="app">
    <div className="app-container">
        <Form
        todoText={todoText}
        setTodoText={setTodoText}
        todoList={todoList}
        setTodoList={setTodoList}
        />
        <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        />
    </div>
</div>
  )
}

export default App