import { ClientBuilder } from '@iota/client';

export function run() {
    // client will connect to testnet by default
    const client = new ClientBuilder()
        .localPow(true)
        .build();

    client.getInfo().then(console.log).catch(console.error);
}

