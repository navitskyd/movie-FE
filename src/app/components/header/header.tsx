import * as React from 'react';
import './header.less';
import {cn} from '@bem-react/classname';

const headerCL = cn('header');
const headerTitleCL = headerCL("title");
const bolderCL = cn('bolder');

export default () => {
    return (
        <div className={headerCL()}>
            <div className={headerCL('cover')}></div>
            <div className={headerTitleCL}><span className={bolderCL()}>netflix</span>roulette</div>
        </div>
    );
}