import './App.css'
import Todo from './component/todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Taskadd from './component/addtask'
import EDITTASK from './component/edittask'
import Completedtasks from './component/completedtasks'


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Todo />} />
         <Route path="/ADDTASK" element={<Taskadd />} />
         <Route path='/EDITTASK' element={<EDITTASK/>}/>
         <Route path='/completedtasks' element={<Completedtasks/>}/>
       </Routes>
    </BrowserRouter>
    
  )
}

export default App
