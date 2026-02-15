import { use, useState } from 'react'
import './edittask.css'
import { BiLeftArrow } from 'react-icons/bi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const EDITTASK = () => {
    let navi = useNavigate()
    let location = useLocation()
    let selectedtask = location.state.task

    const [wholefunction, setwholefunction] = useState(JSON.parse(localStorage.getItem("user")))

    const [update, setupdate] = useState({ Title: "", description: "" })
    function submit(e) {
        const { name, value } = e.target;
        setupdate((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    function back() {
        navi(-1)
    }

    function updatee() {

        const updatedTasks = wholefunction.map(task => {
            if (task.id == selectedtask.id) {
                return { ...task, ...update };
            }
            return task;
        });


        setwholefunction(updatedTasks)


        localStorage.setItem("user", JSON.stringify(updatedTasks))

        navi("/")

    }

    return (
        <>
            <div className='firstnav11'>
                <span className='icons' onClick={back} ><BiLeftArrow /></span>
                <h2 className='tooodo'>EDIT TASK</h2>
            </div>
            <div className='body12'>
                <input type="text" placeholder='Title' name='Title' onChange={submit} className='in' />
                <input type="text" placeholder='Detail' name='description' onChange={submit} className='in' />
                <div className='buttons'>
                    <button onClick={updatee} className='btn1'>UPDATE</button>
                    <button onClick={back} className='btn2'>CANCEL</button>
                </div>
            </div>
        </>
    )
}
export default EDITTASK

