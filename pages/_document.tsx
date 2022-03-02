import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-LRQJQN7NC2`}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-LRQJQN7NC2');
                            gtag('config', 'UA-220708011-1');
                        `,
                        }}
                    />

                    <meta property="og:image" content="/images/Logos/MGH/mgh_logo.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="2664" />
                    <meta property="og:image:height" content="2664" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument