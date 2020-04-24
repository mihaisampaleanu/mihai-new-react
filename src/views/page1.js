import React from 'react'
import Helmet from 'react-helmet'

import styles from './page1.module.css'

const Page1 = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Page1 - mihai new</title>
        <meta property="og:title" content="Page1 - mihai new" />
      </Helmet>
    </div>
  )
}

export default Page1
