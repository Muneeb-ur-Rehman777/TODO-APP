import './comletedtasks.css'
import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import React from 'react'
const Completedtasks = () => {

    let navi = useNavigate()
    let [array, setarray] = useState(JSON.parse(localStorage.getItem("completedtasks")) || [])

    useEffect(() => {
        async function get() {
            let response = await fetch("http://localhost:3000/completedTasks", {
                method: "GET"
            })

            let data = await response.json()
            console.log(data)
            setarray(data)
        }
        get()

    }, [])

    function back() {
        navi('/')
    }

    



    return (
        <>
            <div className='body'>
                <div className='firstnav49'>
                    <span className='icons' onClick={back} ><BiLeftArrow /></span>
                    <h2 className='logo'>COMPLETED TASKS</h2>
                </div>

                <div className='actualbody'>
                    {/* <button onClick={shoooow}>clickme</button> */}
                    {
                        array.map((obj) => (
                            <div className='box1'>
                                <div className='headings1'>
                                    <h2 className='purple'>{obj.Title}</h2>
                                    <p>{obj.description}</p>
                                </div>
                            </div>

                        ))

                    }










                </div>

            </div>


        </>
    )

}
export default Completedtasks