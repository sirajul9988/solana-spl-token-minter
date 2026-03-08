import { 
    Connection, 
    Keypair, 
    LAMPORTS_PER_SOL, 
    clusterApiUrl 
} from '@solana/web3.js';
import { 
    createMint, 
    getOrCreateAssociatedTokenAccount, 
    mintTo 
} from '@solana/spl-token';

async function createMyToken() {
    // 1. Setup Connection and Payer
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const payer = Keypair.generate();

    console.log("Payer Public Key:", payer.publicKey.toBase58());

    // 2. Create New Token Mint
    const mint = await createMint(
        connection,
        payer,            // Payer
        payer.publicKey,  // Mint Authority
        payer.publicKey,  // Freeze Authority
        9                 // Decimals
    );

    console.log("Token Mint Address:", mint.toBase58());

    // 3. Create Associated Token Account (ATA) for the Payer
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        payer.publicKey
    );

    console.log("ATA Address:", tokenAccount.address.toBase58());

    // 4. Mint Tokens to the ATA
    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer.publicKey,
        1000000000000 // Mint 1000 tokens (considering 9 decimals)
    );

    console.log("Successfully minted 1000 tokens!");
}

createMyToken().catch(console.error);
