import inquirer from 'inquirer'
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const fileMap = {
    ' 0 - Get information about the node': './examples/00_get_info.js',
    ' 1 - Generate a random BIP39 mnemonic': './examples/01_mnemonic.js',
    ' 2 - Create addresses from a mnemonic defined in .env': './examples/02_generate_addresses.js',
    ' 3 - Get the outputs of a known address': './examples/03_get_address_outputs.js',
    ' 4 - Get output from a known outputId': './examples/04_get_output.js',
    ' 5 - Get the outputs of an address': './examples/05_get_address_balance.js',
    ' 6 - Send a block without a payload': './examples/06_simple_block.js',
    ' 7 - Send a block and get the data and metadata': './examples/07_get_block_data.js',
    ' 8 - Send a block with a tagged data payload': './examples/08_data_block.js',
    ' 9 - Send a transaction': './examples/09_transaction.js',
    '10 - Initialize MQTT listener': './examples/10_mqtt.js',
    '11 - Build a basic output': './examples/11_build_output.js',
    '12 - Get the raw bytes of a block': './examples/12_get_raw_block.js',
    '13 - Build a basic output': './examples/13_build_alias_output.js',
    '14 - Build a foundry output': './examples/14_build_foundry_output.js',
    '15 - Build an nft output': './examples/15_build_nft_output.js',
    'Consolidate all funds in a range of addresses': './examples/consolidation.js',
    'Get the ledger status and generate an address': './examples/ledger_nano.js',
    'Store a seed in the Stronghold vault and generate an address': './examples/stronghold.js'
}

const questions = [
    {
        type: 'list',
        name: 'file',
        message: '¿Qué archivo deseas ejecutar?',
        choices: Object.keys(fileMap)
    }
]

inquirer.prompt(questions).then(async answers => {
  const filePath = fileMap[answers.file];

  if (filePath) {
      const selectedFile = await import(filePath);
      await selectedFile.run().then(() => process.exit());
  }
})