import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import bs58 from "bs58";
import dotenv from "dotenv";

dotenv.config();

const connection = new Connection("https://api.devnet.solana.com");


const feePayer = Keypair.fromSecretKey(
    bs58.decode(`${process.env.SOLANA_PRIVATE_KEY}`)
);

const airDropSol = async() => {
    let transactionHash = await connection.requestAirdrop(feePayer.publicKey, 1e9);
    console.log(`txHash: ${transactionHash}`)
}

airDropSol();