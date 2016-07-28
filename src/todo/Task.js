import React from 'react';
import classnames from 'classnames';


const Task = (props) => {
  const { task, isCompleted, isEditing } = props;
  const itemClass = classnames({
    'todo': true,
    'task': true,
    'tile': true,
    'is-child': true,
    'completed': isCompleted,
    'editing': isEditing
  });

  return (
      <li className={itemClass}>
        <label className='title' htmlFor='toggle-task'>
          <input className='toggle-task is-large' type='checkbox'
            defaultChecked={isCompleted} />
          {task.text}
        </label>
      </li>
  );
};

export default Task;
