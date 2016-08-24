import React from 'react';
import classnames from 'classnames';


const Task = (props) => {
  const { task, isCompleted, isEditing } = props;
  const itemClass = classnames({
    'todo': true,
    'task': true,
    'control': true,
    'completed': isCompleted,
    'editing': isEditing
  });

  return (
      <li className={itemClass}>
        <label className='title' htmlFor='toggle-task'
          onDoubleClick={() => props.editItem(props.id)}>
          <input className='toggle-task is-large' type='checkbox'
            defaultChecked={isCompleted}
            onClick={() => props.toggleComplete(props.id)} />
          {task.text}
          <a className="button is-danger is-outlined is-pulled-right destroy"
            onClick={() => props.deleteItem(props.id)}>
           <span className="icon">
             <i className="fa fa-times"></i>
           </span>
           <span>Delete</span>
          </a>
        </label>
      </li>
  );
};

export default Task;
