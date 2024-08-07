import React, { FunctionComponent } from 'react';

import addIcon from '../../icon/add.svg';

import styles from './Header.module.scss';

type HeaderProps = {
  modalToggler: () => void;
};

const Header: FunctionComponent<HeaderProps> = ({ modalToggler }) => {
  return (
    <header className={styles.header}>
      <h1>Список задач</h1>
      <div className={styles.btnsGroup}>
        <img
          className={styles.icon}
          src={addIcon}
          alt="Добавить задачу"
          tabIndex={0}
          onClick={modalToggler}
        />
      </div>
    </header>
  );
};

export default Header;
