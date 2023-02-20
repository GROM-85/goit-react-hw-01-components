import PropTypes from 'prop-types';
import React from 'react';
import style from './Section.module.css';

export function Section({ title, children }) {
  return (
    <div className={style.section}>
      {title && <h2>{title}</h2>}
      <div className={style.children}>
        {/* {children && <p>{React.Children.count(children)}</p>} */}
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
