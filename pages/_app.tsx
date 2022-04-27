import "./styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChainId,
  ThirdwebProvider,
  WalletConnector,
} from "@thirdweb-dev/react";

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
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
