import inquirer from 'inquirer'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const fileMap = {
    '01_get_info': './examples/01_get_info.js',
    '01b_get_info': './examples/01b_get_info.js',
    '02_generate_seed': './examples/02_generate_seed.js',
    '03_generate_addresses': './examples/03_generate_addresses.js',
    '04_get_balance': './examples/04_get_balance.js',
    '05a_get_address_outputs': './examples/05a_get_address_outputs.js',
    '05b_get_output': './examples/05b_get_output.js',
    '05c_find_outputs': './examples/05c_find_outputs.js',
    '06_simple_message': './examples/06_simple_message.js',
    '07_get_message_data': './examples/07_get_message_data.js',
    '08_data_message': './examples/08_data_message.js',
    '09_transaction': './examples/09_transaction.js',
    '10_mqtt': './examples/10_mqtt.js',
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
  const filePath = fileMap[answers.file]

  if (filePath) {
    const selectedFile = await import(filePath)
    await selectedFile.run()
    setTimeout(() => process.exit(), 1000)
  }
})