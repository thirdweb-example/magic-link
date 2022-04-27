import styles from "./styles/Home.module.css";
import { useAddress, useDisconnect, useMagic } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.
  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.

  return (
    <div className={styles.container}>
      {/* If there is a wallet connected, show disconnect and the user's address */}
      {address ? (
        <>
          <button className={styles.btn} onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
          <p>Your address: {address}</p>
        </>
      ) : (
        // If there is no wallet connected, show the email input and the Magic Link connect button.
        <>
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className={styles.btn}
            onClick={() => connectWithMagic({ email })}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
