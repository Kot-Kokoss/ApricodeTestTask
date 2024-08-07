import React, { useState } from 'react';
import Header from '../Header';
import TaskTree from '../TaskTree';
import TaskData from '../TaskData';
import Modal from '../Modal';
import Btn from '../Btn';

import styles from './App.module.scss';

import mainStore from '../../store/MainStore';

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalToggler() {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  return (
    <>
      <Header modalToggler={modalToggler} />
      <div className={styles.main}>
        {isModalShown && (
          <Modal modalToggler={modalToggler}>
            <Btn btnText="Добавить задачу" onClick={() => mainStore.addTask()} />
          </Modal>
        )}
        <TaskTree />
        <TaskData />
      </div>
    </>
  );
}

export default App;
