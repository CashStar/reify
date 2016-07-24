import React from 'react';


const TaskForm = (props) => {
  return (
    <p className='control has-icon has-icon-right'>
      <input autoFocus={true} className='add-task input is-large' type='text' placeholder='Add a task' />
      <i className='fa fa-plus'></i>
    </p>
  );
};

export default TaskForm;
