import { Commitment, PublicKey } from '@solana/web3.js';
import { Connection, Keypair } from '@solana/web3.js';
import * as bs58 from 'bs58';

export const rpc_https_url = "https://white-aged-glitter.solana-mainnet.quiknode.pro/743d4e1e3949c3127beb7f7815cf2ca9743b43a6/";

export const blockEngineUrl = 'tokyo.mainnet.block-engine.jito.wtf';
// const jito_auth_private_key = "aaaaaaaaaaaaaaaa";
// const wallet_2_pay_jito_fees = "aaaaaaaaaaaaaaaa";
// export const jito_auth_keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(jito_auth_private_key)));
export const connection = new Connection(rpc_https_url, "confirmed");
// export const wallet_2_pay_jito_fees_keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(wallet_2_pay_jito_fees)));
export const global_mint = new PublicKey("p89evAyzjd9fphjJx7G3RFA48sbZdpGEppRcfRNpump")