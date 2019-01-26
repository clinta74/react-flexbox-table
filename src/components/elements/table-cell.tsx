﻿import React from 'react';
import classNames from 'classnames';


const TableCell = ({ children, className, cellClassName, item, hideHeader, ...attrs }: DT.Header & DT.Element & DT.Item<any>) => {
    const _cellClassName = typeof cellClassName === 'function' ? cellClassName(item) : cellClassName as string;
    return (
        <div className={classNames(_cellClassName, className, 'td')} {...attrs}>
            {children}
        </div>
    );
}

export default TableCell;