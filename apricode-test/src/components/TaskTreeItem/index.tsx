import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';

import arrow from '../../icon/icon_sloy.svg';
import styles from './TaskTreeItem.module.scss';

import { TaskType } from '../../types/types';
import mainStore from '../../store/MainStore';

import Modal from '../Modal';
import Btn from '../Btn';

type TaskTreeItemProps = {
  TaskTreeItem: TaskType;
};

const TaskTreeItem: FunctionComponent<TaskTreeItemProps> = observer(({ taskItem }) => {
  const { id, title, isCompleted, children } = taskItem;
  const [isModalShown, setIsModalShown] = useState(false);
  const [isChildrenShown, setIsChildrenShown] = useState(false);

  function modalToggler() {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  function childrenToggler() {
    setIsChildrenShown((prevChildren) => !prevChildren);
  }

  return (
    <>
      {isModalShown && (
        <Modal modalToggler={modalToggler}>
          <Btn btnText="Добавить задачу" onClick={() => mainStore.addChildren(id)} />
        </Modal>
      )}
      <div className={`${styles.item} ${styles.parent}`}>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            className={styles.customCheckbox}
            name={id}
            id={id}
            checked={isCompleted}
            onChange={() => mainStore.completeToggler(id)}
          />
          <label htmlFor={id}></label>
        </div>
        <img
          className={isChildrenShown ? `${styles.arrow} ${styles.active}` : styles.arrow}
          src={arrow}
          alt=""
          onClick={childrenToggler}
        />
        <h3 className={`${styles.title} ${styles.grand}`} onClick={() => mainStore.chooseTask(id)}>
          {title}
        </h3>
      </div>
    </>
  );
});

export default TaskTreeItem;
