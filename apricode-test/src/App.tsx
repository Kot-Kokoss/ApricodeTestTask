import React from 'react';
import TaskTree from './components/TaskTree';
import TaskData from './components/TaskData';

import './styles/app.scss';

function App() {
  return (
    <>
      <header>Список задач</header>
      <div className="main">
        <TaskTree />
        <TaskData />
      </div>
    </>
  );
}

export default App;
