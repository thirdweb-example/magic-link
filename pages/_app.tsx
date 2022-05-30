import React from "react";
import type { AppProps } from "next/app";
import {
  ChainId,
  ThirdwebProvider,
  WalletConnector,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

// Our Magic Link Wallet Connector configuration
const magicLinkWalletConnector: WalletConnector = {
  name: "magic",
  options: {
    // Replace this with your own magic link api key
    apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    rpcUrls: {
      [ChainId.Mumbai]: "https://mumbai.magic.io/rpc",
    },
  },
};

// Array of wallet connectors you want to use for your dApp.
const connectors = [magicLinkWalletConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
    >
      <Head>
        <title>thirdweb Magic.Link Wallet Connector</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's useMagic Hook To Connect User's To Your dApp Via Their Email, Phone Number, Or Social Media Account."
        />
        <meta
          name="keywords"
          content="Thirdweb, Magic, Magic.Link, Wallet Connector, Social Media Wallet Connector, Email Address Wallet Connector, Phone Number Wallet Connector"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
