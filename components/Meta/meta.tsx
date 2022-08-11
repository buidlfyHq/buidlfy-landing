// imported modules
import React from "react";

import Head from "next/head";

interface Props {
  title: string;
  desc: string;
  keyword: string;
  icon: string;
  metaImage: string;
  url: string;
}

function Meta({ title, desc, keyword, icon, metaImage, url }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <link rel="icon" href={icon} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={desc} />
        <meta itemProp="image" content={metaImage} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={title} />
      </Head>
    </div>
  );
}

export default Meta;
