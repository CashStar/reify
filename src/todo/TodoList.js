import React from 'react';

import { Map, List } from 'immutable';

import Task from './Task';
import TaskForm from './TaskForm';
import TodoInfo from './TodoInfo';

//temp
import todoLists from './todoData';


// named export for testing purposes only!
export const TodoContent = (props) => {
  const { todoList, filter } = props;

  const filterTasks = (tasks) => {
    return tasks.filter((task) => filter === 'all' || task.status === filter);
  };

  const isCompleted = (task) => {
      return task.status === 'completed';
  };

  return (
    <div className='tile is-vertical is-parent'>
      {/* tasklist info bar tile */}
      <TodoInfo todoList={todoList} filter={filter} />

      {/* enter a new task for this todo list */}
      <TaskForm />

      {/* tasks - each task list item is one tile */}
      <ul className='task-list tile is-child'>
      {filterTasks(todoList.tasks).map((task) =>
        <Task task={task}
          key={task.id}
          index={task.id}
          isCompleted={isCompleted(task)}
          isEditing={task.editing}
          toggleComplete={props.toggleComplete}
          deleteItem={props.deleteItem}
          editItem={props.editItem} />
      )}
      </ul>
    </div>
  );
};

const TodoNotFound = (props) => {
  return (
    <div className='tile is-vertical is-parent control'>
      <h1 className='title'>Todo list not found!</h1>
    </div>
  );
};

const TodoList = (props) => {
  const { todoId } = props.params,
    lists = todoLists.toJS(),
    todoList = lists.filter((list) => list.id === parseInt(todoId))[0],
    filter = 'all';

  const todoContent = typeof(todoList) === 'undefined' ?
    <TodoNotFound /> :
    <TodoContent todoList={todoList} filter={filter} />;

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

                {todoContent}

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
