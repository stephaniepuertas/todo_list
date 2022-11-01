import React, {useState} from 'react'

const Form= ({addNewTask}) => {

    //state
    const [task, setTask] = useState("")

    //handler functions
    const taskHandler = (e) =>{ 
        setTask(e.target.value)
    }

    //submit handler func
    const submithandler = (e) =>{
        e.preventDefault();
        console.log("ADDING TASK", task)
        addNewTask({
            task,
            isComplete:false
        })
    
    }
    
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit= {submithandler}>
                <p>
                    Task:
                    <input type="text" value={task} onChange={taskHandler} />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form