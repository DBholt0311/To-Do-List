import Grid from '@mui/material/Grid';

import ToDoListItem from '../ToDoListItem/ToDoListItem';

function ToDoList({ toDoList, toDoRefreshCallback }) {
    return (
        <Grid>
            {toDoList.map((toDoData) => {
                return (
                    <ToDoListItem
                        key={toDoData.id}
                        toDoData={toDoData}
                        toDoRefreshCallback={toDoRefreshCallback}
                    />
                );
            })}
        </Grid>
    );
}

export default ToDoList;