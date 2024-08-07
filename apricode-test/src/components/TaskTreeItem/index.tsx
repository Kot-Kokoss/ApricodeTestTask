import React, { FunctionComponent } from 'react';
import arrow from '../../icon/icon_sloy.svg';
import styles from './TaskTreeItem.module.scss';

const TaskTreeItem: FunctionComponent = () => {
  return (
    <>
      <div className={`${styles.item} ${styles.parent}`}>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            className={styles.customCheckbox}
            name="checkbox_1"
            id="checkbox_1"
          />
          <label htmlFor="checkbox_1"></label>
        </div>
        <img className={styles.arrow} src={arrow} alt="" />
        <div className={`${styles.title} ${styles.grand}`}>Задача 1</div>
      </div>
    </>
  );
};

export default TaskTreeItem;
