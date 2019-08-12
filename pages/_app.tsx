import App, { Container } from "next/app";
import React from "react";
import { GlobalStyle } from "../ResetCSS";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
