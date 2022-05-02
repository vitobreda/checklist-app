import React from 'react';
import Styles from './Container.styles';

function Container({children}) {
    return (
        <Styles.Container>
            {children}
        </Styles.Container>
    )
}

export default Container;