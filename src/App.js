import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

//useState is called a hook.
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  //deleteTask is a function that is passed down into Tasks -> Task where it will return
  //onClick, the task.id of clicked task. The id of clicked task will then be used
  //in setTasks function to filter and store the tasks that have been clicked.
  //Back in App.js, setTasks will affect tasks variable (due to useState), and the
  // remaining tasks will again be passed down into Tasks -> Task. Somehow, React.js
  //is able to handle this circular logic flow.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
      )
    )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container"> {/*className determines the type of object. 
      Try changing to header */}
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} title="Zim Tracker"/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/> 
      : 'No Task to display'}
    </div>
  )
}

export default App
