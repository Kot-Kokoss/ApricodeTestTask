import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './Modal.module.scss';

import mainStore from '../../store/MainStore';

import Btn from '../Btn';
import Input from '../Input';
import TextArea from '../TextArea';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  modalToggler: () => void;
};

const Modal: FunctionComponent<ModalProps> = observer(({ children, modalToggler }) => {
  return (
    <div className={styles.blackout}>
      <div className={`${styles.flexColumn} ${styles.controls}`}>
        <div className={styles.flexColumn}>
          <Input
            value={mainStore.taskTitle}
            onChange={(e) => mainStore.titleHandler(e.target.value)}
            placeholder="Название задачи..."
          />
          <TextArea
            value={mainStore.taskText}
            onChange={(e) => mainStore.textHandler(e.target.value)}
            placeholder="Содержимое задачи..."
          />
        </div>
        {children}
        <Btn btnText="Закрыть" onClick={modalToggler} />
      </div>
    </div>
  );
});

export default Modal;
