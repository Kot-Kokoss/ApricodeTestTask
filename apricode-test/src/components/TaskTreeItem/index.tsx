import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';

import arrow from '../../icon/icon_sloy.svg';
import styles from './TaskTreeItem.module.scss';

import { TaskType } from '../../types/types';
import MainStore from '../../store/MainStore';

type TaskTreeItemProps = {
  TaskTreeItem: TaskType;
}

const TaskTreeItem: FunctionComponent<TaskTreeItemProps> = observer(() => {
  const {id, title, isCompited, children} = TaskTreeItem;
  const {isModalShown, setIsModalShown} = useState(false)
  const [isChildrenShown, setIsChildrenShown] = useState(false);

  function modaltoggler () {
    setIsModalShown(prevModalState => !prevModalState)
  }

  function childrenToggler() {
    setIsSubTasksShown(prevSubTasks => !prevSubTasks);
  }

  return (
    <>
      {
        isModalShown && (
          <Modal modalToggler={modalToggler}>
            <Button
              btnText='Добавить задачу'
              onClick={() => MainStore.addChildren(id)}
            />
          </Modal>
        )
      }
      <div className={`${styles.item} ${styles.parent}`}>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            className={styles.customCheckbox}
            name="checkbox_1"
            id="checkbox_1"
            checked={isActive}
            onChange={() => }
          />
          <label htmlFor="checkbox_1"></label>
        </div>
        <img className={styles.arrow} src={arrow} alt="" />
        <div className={`${styles.title} ${styles.grand}`}>Задача 1</div>
      </div>
    </>
  );
});

export default TaskTreeItem;
