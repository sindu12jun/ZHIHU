/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  render() {
    const tabs = [{label: '首页'}, {label: '发现'}, {label: '等你来答'}];

    function getTabs() {
      return tabs.map(tab => <li className={s.AppHeader_Tab}>
          <a className={s.AppHeader_TabsLink} href=""></a>
        </li>
      )
    }

    return (
      <header className={s.AppHeader}>
        <div className={s.AppHeader_Inner}>
          <a href="//www.zhihu.com">
            <div className={s.ZhihuLogo}/>
          </a>
          <ul className={s.AppHeader_Tabs}>
            {
            }
          </ul>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
