import React from 'react';
import { Map, List } from 'immutable';

import Task from './Task';
import TaskForm from './TaskForm';
import TodoInfo from './TodoInfo';

//temp
import todos from './todoData';
const todoList = todos.toJS();


const TodoList = (props) => {
  return (
    <section className='todo-list section'>
      <div className='container'>
        <div className='columns'>
          {/* the left column, for a 3 column layout */}
          <div className='column'></div>

          {/* the center column, with content, as a box */}
          <div className='column box'>
            <div className='tile'>
              <div className='tile is-ancestor'>
                <div className='tile is-vertical is-parent control'>

                  {/* tasklist info bar tile */}
                  <TodoInfo todoList={todoList} />

                  {/* enter a new task for this todo list */}
                  <TaskForm {...props} />

                  {/* tasks - each task list item is one tile */}
                  <ul className='task-list'>
                    {todoList.tasks.map((task) =>
                      <Task task={task} key={task.id} index={task.id} />
                    )}
                  </ul>

                </div>
              </div>
            </div>
          </div>

          {/* the right column, for a 3 column layout */}
          <div className='column'></div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
