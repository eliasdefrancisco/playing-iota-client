import { ClientBuilder } from '@iota/client';

export async function run() {
    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const messageId = await client.message().submit();
    console.log(messageId);
}

