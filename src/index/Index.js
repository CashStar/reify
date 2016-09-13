import React from 'react';

import TodoGrid from '../todo/TodoGrid';


const Index = (props) => {
  return (
    <div className='app-index'>
      <h1>Your To-do Lists</h1>
      <TodoGrid {...props} />
    </div>
  );
};

export default Index;
