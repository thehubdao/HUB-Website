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

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            (function(h,o,t,j,a,r){
                                h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                                h._hjSettings={hjid:2850691,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');ƒ
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