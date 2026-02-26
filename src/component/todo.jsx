import { use, useEffect, useState } from 'react'
import './todo.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { BiCalendar } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import { BsThreeDots } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
import React from 'react'
import { data, useLocation } from "react-router";
import { BiPencil } from 'react-icons/bi'
import { BiBasket } from 'react-icons/bi'


const Todo = () => {

  const location = useLocation();
  const navi = useNavigate();

  const [data, setData] = useState([])

  useEffect(() => {

    async function getData() {
      let response = await fetch('http://localhost:3000', {
        method: "GET"
      })

      let result = await response.json() || []
      setData(result)
      console.log(data)
    };

    getData();

  }, [])







  function add() {
    navi('/ADDTASK')
  }



  function EDIT(task) {
    navi('/EDITTASK', { state: { task } })
  }

  async function DELE(task) {

    let response = await fetch(`http://localhost:3000/delete/${task.id}`, {
      method: "DELETE"
    });


    let data = await response.json();
    console.log(data);


    setData(prev =>
      prev.filter(object => object.id !== task.id)
    );




  }







  async function complete(obj) {

    let response = await fetch(`http://localhost:3000/transfer/${obj.id}`, {
      method: "DELETE"
    })

    let data = await response.json();
    console.log(data)

    setData(prev =>
      prev.filter(object => object.id !== obj.id)
    );



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
            data.map((obj) => (
              <div className='box'>
                <div className='headings'>
                  <h2 className='purplee'>{obj.Title}</h2>
                  <p className='puop'>{obj.description}</p>
                </div>
                <ul className='box-icons'>
                  <li className='lll' onClick={() => EDIT(obj)}><BiPencil /></li>
                  <li className='lll' onClick={() => DELE(obj)}><BiBasket /></li>
                  <li className='lll' onClick={() => complete(obj)}><TiTick /></li>
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
