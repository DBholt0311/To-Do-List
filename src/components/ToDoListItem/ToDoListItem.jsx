import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  deleteTask,
  updateTaskComplete,
} from '../../taskApi/task.api';

function ToDoListItem({ toDoData, toDoRefreshCallback }) {
  const handleClickToggleComplete = (id) => {
    updateTaskComplete(id)
      .then((response) => {
        toDoRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  const handleClickDelete = (id) => {
    console.log('DELETE - toDoId:', id);
    deleteTask(id)
      .then((response) => {
        toDoRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };

  return (
    <Grid
      item
      xs={8}
      md={6}
      lg={3}
    >
      <div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr'
          }}
        >
          <Box
            marginLeft={1}
            fontStyle={
              toDoData.complete
                ? { textDecoration: 'line-through' }
                : {}}
          >
            <p>{toDoData.task}</p>
          </Box>
          <Box
            marginLeft={2}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                  checked={toDoData.complete === true}
                    onChange={(event) => handleClickToggleComplete(toDoData.id)}
                    size="small"
                  />}
                label="Toggle Status"
              />
            </FormGroup>
          </Box>
          <Box
            marginLeft={2}
          >
            <Button
              style={{ width: "20px", height: "20px" }}
              variant="contained"
              onClick={(event) => handleClickDelete(toDoData.id)}
            >
              delete
            </Button>
          </Box>
        </Box>
      </div>
    </Grid>
  )
}

export default ToDoListItem;