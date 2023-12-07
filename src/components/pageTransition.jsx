import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './pageTransition.css';

const PageTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      classNames="page"
      timeout={500}
      {...props}
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default pageTransition;