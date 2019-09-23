/**
 * Created by lenovo on 2019/9/19.
 */
import React from 'react';

import styles from './BasicLayout.less'

class BasicLayout extends React.Component {

  render() {
    return (
      <div className={styles.basicLayout}>
        <div className={styles.header}>

        </div>
        <div>
          <div>Sidebar</div>
          <div>
            content
            content
          </div>
        </div>
      </div>
    )
  }
}

export default BasicLayout;