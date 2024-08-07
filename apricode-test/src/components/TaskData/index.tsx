import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import MainStore from '../../store/MainStore';

import styles from './TaskData.module.scss';

const TaskData: FunctionComponent = observer(() => {
  return (
    MainStore.activeTask && (
      <div className={styles.taskInfo}>
        <div className={styles.taskTitle}>{MainStore.activeTask.title}</div>
        <p className={styles.text}>{MainStore.activeTask.text}</p>
      </div>
    )
  );
});

export default TaskData;
