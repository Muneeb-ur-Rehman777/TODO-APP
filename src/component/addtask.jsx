import './addtask.css'
import { useState } from 'react'
import { BiLeftArrow } from 'react-icons/bi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Taskadd = () => {
    const navi = useNavigate()
    let count = 1



    const [Fulldata, setFulldata] = useState([])
    const [task, setTask] = useState({ Title: "", description: "" });

    function submit(e) {
        const { name, value } = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: value,
            id: Date.now(), // unique id
            date: new Date().toString()
        }));
    }

    function back() {
        navi(-1)
    }

    async function backtodashbooard() {
        // const newarr = [...Fulldata, task]
        // setFulldata(newarr);
        // localStorage.setItem("user"[count],JSON.stringify(task))
        // count++

        let response = await fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

        let data = await response.json();
        console.log(data);
        

        let count = localStorage.length
        if (count > 0) {
            let user = JSON.parse(localStorage.getItem("user"))
            let newarrayyy = [...user, task]
            localStorage.setItem("user", JSON.stringify(newarrayyy))
        }
        else {
            let newarrayyy = [task]
            localStorage.setItem("user", JSON.stringify(newarrayyy))
        }


        count++
        navi('/');


    }


    return (
        <>
            <div className='firstnav11'>
                <span className='icons' onClick={back} ><BiLeftArrow /></span>
                <h2 className='tooodo'>ADD TASK</h2>
            </div>
            <div className='body12'>
                <input type="text" placeholder='Title' name='Title' onChange={submit} className='in' />
                <input type="text" placeholder='Detail' name='description' onChange={submit} className='in' />
                <button onClick={backtodashbooard} className='addatadd'>ADD</button>
            </div>

        </>
    )
}

export default Taskadd
