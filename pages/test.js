import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {daysInYear} from 'date-fns'

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test Page: Number of days in the year is {daysInYear}
        </h1>
      </main>
    </div>
  )
}