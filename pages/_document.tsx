import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/** Start of HubSpot Embed Code */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/21354278.js"
          ></script>
          {/** End of HubSpot Embed Code */}
          <script
            id="clarity-script-loader"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                          c[a]=c[a]function(){(c[a].q=c[a].q[]).push(arguments)};
                          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "anx7hnyhbh");
                      `,
            }}
          />
          <script
            id="linkedIn-script-loader"
            dangerouslySetInnerHTML={{
              __html: `_linkedin_partner_id = "3742620";
                      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                      window._linkedin_data_partner_ids.push(_linkedin_partner_id);              
                      `,
            }}
          />
          <script
            id="link-track"
            dangerouslySetInnerHTML={{
              __html: `(function(l) {
                          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                          window.lintrk.q=[]}
                          var s = document.getElementsByTagName("script")[0];
                          var b = document.createElement("script");
                          b.type = "text/javascript";b.async = true;
                          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                          s.parentNode.insertBefore(b, s);
                        })(window.lintrk);                           
                      `,
            }}
          />
          <noscript
            id="linkedin-img"
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=3742620&fmt=gif" />`,
            }}
          ></noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
