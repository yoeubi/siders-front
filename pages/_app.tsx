import App from "next/app";
import React from "react";
import { GlobalStyle } from "../ResetCSS";
import Head from "next/Head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Siders</title>
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
