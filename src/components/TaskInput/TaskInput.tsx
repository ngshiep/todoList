import { log } from 'console'
import React, { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props

  const [name, setName] = useState<string>('')
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
  }
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }

  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <input type='text' placeholder='Caption goes here' value={name} onChange={handleOnChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
