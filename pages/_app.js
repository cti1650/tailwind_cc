import "../styles.css";

import React from "react";
import App from "next/app";

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
