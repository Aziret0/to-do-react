import React from 'react';
import Button from '../Button';
import { db } from '../../firebase';
import {doc, deleteDoc, updateDoc} from "firebase/firestore";
import './Todo.css'

const Todo = React.memo (({todo, setTodoList, setTodoText}) => {
    const handleCheck = async () => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            isActive: !todo.isActive
        })
    }
    const handleEdit = async () => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            isEditable: !todo.isEditable
        })
    }
    const handleDelete = async () => {
        await deleteDoc(doc(db, 'todos', todo.id));
    }
    const handleChange = async (e) => {
        const todoRef = doc(db, 'todos', todo.id)
        await updateDoc(todoRef, {
            todoText: e.target.value
        })
    }
    const handleSetting = (e) => {
        if (e.target.className.includes('settings')) {
            setTodoList((prev) => {
                return prev.map(el => {
                    return el.id === todo.id ? {...el, settingActive: !el.settingActive} : el
                })
            })
        }
    }
    return (
        <li>
            <div className="time">
                {todo.time}
            </div>
            <input type="text" readOnly={!todo.isEditable} onChange={handleChange} value={todo.todoText} 
            className={`todo-text ${todo.isActive ? '' : 'done' } ${todo.isEditable ? 'edit' : ''}`} />
            <div className={`settings ${todo.settingActive ? 'active' : ''}`} onClick={handleSetting}>
                <Button onClick={handleCheck}>выполнено</Button>
                <Button onClick={handleEdit}>{todo.isEditable ? 'сохранить' : 'изменить'}</Button>
                <Button onClick={handleDelete}>удалить</Button>
            </div>
        </li>
    )
})  



export default Todo