import styles from './Footer.module.css'

import Button from '@mui/material/Button';


import {
  resetList,
} from '../../taskApi/task.api';

function Footer({ toDoData, toDoListRefreshCallback }) {
  const handleClickReset = () => {
    resetList()
      .then((response) => {
        toDoListRefreshCallback();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  };
  return (
    <div className={styles.appBottom}>
      <p>Congrats</p>
      <Button
        variant="contained"
        size="=small"
        onClick={(event) => handleClickReset(toDoData)}
      >
        reset
      </Button>
    </div>
  )
};

export default Footer;
