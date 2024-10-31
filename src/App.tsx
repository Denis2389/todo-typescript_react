import './App.css'
import { Task } from './Task'
import { useState } from 'react'

const App: React.FC = () => {
  const [task, setTask] = useState<Task[]>([]);

  return (
    <div>
      <h1>To-Do List</h1>
    </div>
  )
}

export default App
