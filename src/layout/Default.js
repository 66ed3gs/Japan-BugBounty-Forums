import Head from 'next/head'
import Header from '../components/Header'

const Layout = ({ children }) => {

  return (
    <div>
      <Head>
        <title>Japan-bugbounty-forums</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout;