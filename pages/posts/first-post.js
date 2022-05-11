import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
    return(
        <>
        <Head>
            <title>First Post</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
            <meta property="og:title" content="My new title" key="title" />
        </Head>
        <h1>First Post</h1>
        <Link href='/'>
            <a>Back to home</a>
        </Link>
        </>
    )
}