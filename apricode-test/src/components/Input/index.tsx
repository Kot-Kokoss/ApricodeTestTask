import { FunctionComponent, ComponentPropsWithoutRef } from 'react';

import styles from './input.module.scss';

const Input: FunctionComponent<ComponentPropsWithoutRef<'input'>> = ({ ...props }) => {
  return <input {...props} className={styles.input} type="text" />;
};

export default Input;
