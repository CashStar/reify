import React from 'react';


const TodoInfo = (props) => {
  const { todoList } = props;
  return (
    <div className='todo-info tile is-child level'>
      <div className='level-left'>
        <div className='level-item'>
          <p className='title'>{todoList.name}</p>
        </div>
      </div>
      <div className='level-right'>
        <div className='level-item'>
          <p className='tag is-primary is-medium'>
            {todoList.tasks.length} tasks left
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoInfo;
