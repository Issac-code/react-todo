import React from 'react';
import {Link} from 'react-router-dom'
import style from './BottomNavigation.module.css'

function BottomNavigation() {
    return (
        <div className={style.wrapper}>
            <Link className={style.bnItem}>
                <span>اضافه کردن</span>
            </Link>
            <Link className={style.bnItem}>
                <span>لیست کارها</span>
            </Link>
        </div>
    );
}

export default BottomNavigation;