import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import mainStore from '../../store/MainStore';

import styles from './TaskData.module.scss';

const TaskData: FunctionComponent = observer(() => {
  return (
    <div className={styles.taskInfo}>
      {mainStore.activeTask && (
        <>
          <h3 className={styles.taskTitle}>{mainStore.activeTask.title}</h3>
          <p className={styles.text}>{mainStore.activeTask.text}</p>
        </>
      )}
    </div>
  );
});

export default TaskData;
