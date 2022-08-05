import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";
import dotenv from "dotenv";

dotenv.config();

//Keypair generates keypairs, from secret keys can take an array and decode a string.

const connection = new Connection("https://api.devnet.solana.com")

const feePayer = Keypair.fromSecretKey(
    bs58.decode(`${process.env.SOLANA_PRIVATE_KEY}`)
);



const getWalletBalance = async() => {
    let balance = await connection.getBalance(feePayer.publicKey);
    console.log(`${balance/LAMPORTS_PER_SOL} SOL`)
}

getWalletBalance();