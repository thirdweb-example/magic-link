# Magic Link Wallet Connection

This project demonstrates how to use [Magic Link](https://magic.link/) with thirdweb using the [useMagic](https://docs.thirdweb.com/react/react.usemagic) hook from the [thirdweb React SDK](https://docs.thirdweb.com/react).

Magic Link enables users to connect to your dApp using **email**, **phone number**, or **social login**.

**Check out the Demo here**: https://magic-link.thirdweb-example.com

## Tools:

- [thirdweb React SDK](https://docs.thirdweb.com/react): We're using the [useAddress](https://docs.thirdweb.com/react/react.useaddress), [useMagic](https://docs.thirdweb.com/react/react.usemagic), and [useDisconnect](https://docs.thirdweb.com/react/react.usedisconnect) hooks from our React SDK to enable users to connect/disconnect to your dApp via their wallets, and to show information about their connected wallet.
- [thirdweb TypeScript SDK](https://docs.thirdweb.com/typescript): We're using the [ThirdwebProvider](https://docs.thirdweb.com/react) to configure the Network we want our user's to be on, and to configure the Magic Link Wallet Connector with our API key.
- [Magic Link](https://magic.link/): Under the hood, thirdweb's `useMagic` hook uses the Magic Link Web SDK to connect user's wallets to their email, phone number, or social media accounts.
- [Next.JS](https://nextjs.org/): Next.JS isn't really necessary for this project, but it's nice to have if you want to build more advanced features in the future.

## Using This Repo

- Create an account at https://magic.link/

- Copy your **Publishable API Key** from the Magic Link dashboard.

- Create a `.env.local` file at the root of your project, and add your key in the format: `NEXT_PUBLIC_MAGIC_LINK_API_KEY=xxx`, like as it is in `.env.example`.

- Clone this example project by running:

```bash
npx thirdweb create --template magic-link
```

# Guide

## Setting Up Magic Link WalletConnector

Over in [_app.tsx](./pages/_app.tsx) we are wrapping our application with the [ThirdwebProvider](https://docs.thirdweb.com/react) component, which allows us to configure the Network we want our user's to be on, and to configure the Magic Link Wallet Connector with our API key.

```ts
<ThirdwebProvider desiredChainId={activeChainId} walletConnectors={connectors}>
  <Component {...pageProps} />
</ThirdwebProvider>
```

**Configuring the Network**

```ts
const activeChain = "mumbai";
```

**Configuring the Magic Link Wallet Connector**

```ts
const magicLinkWalletConnector: WalletConnector = {
  name: "magic",
  options: {
    // Replace this with your own magic link api key
    apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    rpcUrls: {
      [activeChain]: "https://mumbai.magic.io/rpc",
    },
  },
};
```

## Logging Users In Via Email

On the [Home Page](./pages/index.tsx), we are using the `useMagic` hook to connect user's wallets' by submitting their email address.

Once the user enters their email and clicks the Login button, they will be connected to their wallet via a Magic Link (email with a link is sent to the user's email - they are signed in after they click this link).

```ts
const connectWithMagic = useMagic();

// ...

<a onClick={() => connectWithMagic({ email })}>Login</a>;
```

Once they're connected, we grab their address using the `useAddress` hook and hide the form!

```ts
const address = useAddress();
```

If the user wants to disconnect at any time, we allow them to, using the `useDisconnect` hook.

```ts
const disconnectWallet = useDisconnect();
```

---

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
