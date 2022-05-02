import React from 'react';
import Styles from './Row.styles';

function Row({children}) {
  return <Styles.Container>{children}</Styles.Container>;
}

export default Row;
