import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
        <Head>
            <title>First Post</title>
            <link rel="icon" href="/favicon.png" />
             {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="The Rock" />
            <meta property="og:type" content="video.movie" />
            <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
            <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
             {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy='lazyOnload'
        onLoad={()=>console.log('script lazyOnload properly')}
        />
        <h1>First Post
            {' '}
        <Link  href='/'>
            <a className='backToHome'>Back to home</a>
        </Link>
        </h1>
        
        </Layout>
    )
}