import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is Me!" />
        <p className="description">
          <code>Eat, Code, Repeat</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
