# Solana SPL Token Minter

This repository provides a professional, production-ready script to interact with the Solana Program Library (SPL). It handles the full lifecycle of a token: creation, minting to a specific wallet, and revoking mint authority for fixed-supply assets.

## Features
* **Full Lifecycle**: Create Mint, Create ATA (Associated Token Account), and Minting.
* **Metadata Ready**: Designed to work with the Metaplex standard.
* **Safety**: Includes error handling for RPC connection and transaction confirmation.

## Prerequisites
* Node.js (v16 or higher)
* A Solana wallet `keypair.json`
* Some Devnet/Mainnet SOL for transaction fees

## Installation
1. `npm install @solana/web3.js @solana/spl-token`
2. Update the `RPC_URL` in `index.ts`.
3. Run with: `npx ts-node index.ts`

## License
MIT
