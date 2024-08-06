import React from 'react';
import TaskTreeItem from '../TaskTreeItem';
import styles from './TaskTree.module.scss';
const TaskTree = () => {
  return (
    <div className={styles.taskTree}>
      <TaskTreeItem />
    </div>
  );
};

export default TaskTree;
