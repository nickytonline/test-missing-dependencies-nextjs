import Head from 'next/head'
import Link from 'next/link'
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
          Main Page: Number of days in the year is {daysInYear}
        </h1>
        <Link href="/test">Test Page</Link>
      </main>
    </div>
  )
}
