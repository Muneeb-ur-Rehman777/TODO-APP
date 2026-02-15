import { use, useState } from 'react'
import './todo.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { BiCalendar } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
import React from 'react'
import { useLocation } from "react-router";
import { BiPencil } from 'react-icons/bi'
import { BiBasket } from 'react-icons/bi'


const Todo = () => {
  let array = JSON.parse(localStorage.getItem("user")) || [];

  const location = useLocation();
  // let updatedobj=location.state.change

  const [array1, setarray1] = useState(JSON.parse(localStorage.getItem("user")) || []);


  const navi = useNavigate()

  function add() {
    navi('/ADDTASK')
  }
  function shoooow() {
    // console.log(location.state.change)
    // console.log(typeof location.state.change)
    // console.log(location.state.change["Title"])



    // console.log(localStorage.getItem("user"))
    // console.log(typeof localStorage.getItem("user"))
    // console.log(JSON.parse(localStorage.getItem("user")))
    // console.log(typeof JSON.parse(localStorage.getItem("user")) )
    // console.log(t["Title"])
    console.log(array1)



  }

  function EDIT(task) {
    navi('/EDITTASK', { state: { task } })
  }

  function DELE(task) {

    const updatedTasks = array.filter(obj => obj.id !== task.id);

    localStorage.setItem("user", JSON.stringify(updatedTasks))
    
    setarray1(updatedTasks)


  }






  
  function complete(obj) {


    let previous = JSON.parse(localStorage.getItem("completedtasks"))  || []
    // localStorage.removeItem("completedtasks") 

    for(let object of array){
      if(object.id==obj.id){
        let newarrr= [...previous,object]
        localStorage.setItem('completedtasks',JSON.stringify(newarrr))
      }
    }


    



    const updatedTasks = array.filter(objecttt => objecttt.id !== obj.id);
    localStorage.setItem("user", JSON.stringify(updatedTasks))
    setarray1(updatedTasks)



    // let completed = array1.map((object) => {
    //   if (obj.id == object.id) {
    //     let com = JSON.parse(localStorage.getItem("completedtasks"))
    //     let newest = [...com, obj]
    //     localStorage.setItem("completedtasks", JSON.stringify(newest))
    //   }
    // })
    // const udate = array1.filter((objectt) => { objectt.id !== obj.id })



  }










  function completedlist() {
    navi('/completedtasks')
  }





  return (
    <>
      <div className='body'>
        <div className='firstnav9'>
          <h2 className='logo'>TODO APP</h2>
          <span className='icons22'><BiCalendar /></span>
        </div>
        <div className='secondnav'>
          <div className='align purple'>
            <span className='icons1'><BsThreeDots /></span>
            <p>ALL</p>
          </div>
          <div className='align' onClick={completedlist}>
            <span className='icons1'><TiTick /></span>
            <p>Completed</p>
          </div>
        </div>
        <div className='actualbody'>
          {
            array1.map((obj) => (
              <div className='box'>
                <div className='headings'>
                  <h2 className='purple'>{obj.Title}</h2>
                  <p>{obj.description}</p>
                </div>
                <ul className='box-icons'>
                  <li onClick={() => EDIT(obj)}><BiPencil /></li>
                  <li onClick={() => DELE(obj)}><BiBasket /></li>
                  <li onClick={() => complete(obj)}><TiTick /></li>
                </ul>
              </div>

            ))

          }








          <button className='add' onClick={add}><BiPlus /></button>


        </div>

      </div>


    </>
  )
}

export default Todo
