import React from 'react';


const Task = (props) => {
  const { task } = props;
  return (
      <li className='task tile is-child'>
        <label className='title' htmlFor='toggle-task'>
          <input className='toggle-task is-large' type='checkbox' />
          {task.text}
        </label>
      </li>
  );
};

export default Task;
