import { useState } from 'react';
import { postTask } from '../../taskApi/task.api';
import Button from '@mui/material/Button';
import AddTask from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField';
import './AddTaskForm.module.css';

function AddTaskForm(props) {
    const [taskValue, setTaskValue] = useState('');

    const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log('Values for submit:', {
            task: taskValue,
        });

        postTask({
            task: taskValue,
        })
            .then((response) => {
                props.toDoListRefreshCallback();

                setTaskValue('');
            })
            .catch((err) => {
                console.error('ERROR:', err);
            });
    };

    return (
        <form onSubmit={handleSubmitTask}>

            <TextField
                id='outlined-input'
                label="Enter Task"
                size='small'
                style={{ marginTop: "10px" }}
                className="input"
                onChange={(event) => setTaskValue(event.target.value)}
                value={taskValue}
            />
            <Button
                type='submit'
            >
                <AddTask
                    style={{ height: "40px", width: "30px", marginTop: "3px" }}
                ></AddTask>
            </Button>
        </form>
    );
}

export default AddTaskForm;