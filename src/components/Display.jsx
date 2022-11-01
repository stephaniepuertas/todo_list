import React from 'react'

const strikethrough= {
    textDecoration: "line-through"
}

const Display = ({allTasks, deleteTask, checkbox}) => {

    return (
        <fieldset>
            <legend>Display</legend>
            {
                allTasks.map((oneTask,idx)  => {
                    return(
                        <>
                        <p style={oneTask.isComplete? strikethrough: null}> {oneTask.task}</p>
                        <button onClick={() => deleteTask(idx)}>delete</button>
                        <input type="checkbox" checked={oneTask.isComplete}  onChange={() => checkbox(idx)}/>
                        </>
                    )
                })

            }
        </fieldset>
    )
}

export default Display