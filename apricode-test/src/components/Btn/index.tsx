import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from './Btn.module.scss';

interface BtnProps extends ComponentPropsWithoutRef<'button'> {
  btnText: string;
}

const Btn: FunctionComponent<BtnProps> = ({ btnText, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {btnText}
    </button>
  );
};

export default Btn;
