import { useState } from 'react';
import { ethers } from 'ethers';

function MintButton() {
    // var v = await isUnlocked()

    // console.log(v);

    return (
        <h1>"Hey!"</h1>
    );
}

export async function isUnlocked() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    let unlocked;
    console.log("isUnlocked?");
    
    try {
        const accounts = await provider.listAccounts();
        console.log(accounts);
        unlocked = accounts.length > 0;
        console.log(accounts.length);
        console.log(unlocked);
    } catch (e) {
        unlocked = false;
    }
    return unlocked;
}