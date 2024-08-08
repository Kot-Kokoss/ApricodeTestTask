import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import TaskTreeItem from '../TaskTreeItem';

import mainStore from '../../store/MainStore';

import styles from './TaskTree.module.scss';

const TaskTree: FunctionComponent = observer(() => {
  return (
    <div className={styles.taskTree}>
      {mainStore.taskArray.map((taskItem) => (
        <TaskTreeItem key={taskItem.id} taskItem={taskItem} />
      ))}
    </div>
  );
});

export default TaskTree;
