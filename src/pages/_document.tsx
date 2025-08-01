// _document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
                  rel="stylesheet"
               />
               <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                  rel="stylesheet"
               />
               <link rel="manifest" href="/manifest.json" />
               <meta name="theme-color" content="#000000" />
               <link rel="apple-touch-icon" href="/icon-192x192.png" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
