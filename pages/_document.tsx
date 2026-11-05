import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `(function(){try{var t=localStorage.getItem('site-theme');if(t!=='dark'&&t!=='light'){t='light'}document.documentElement.setAttribute('data-site-theme',t)}catch(e){document.documentElement.setAttribute('data-site-theme','light')}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
