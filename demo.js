const dotenv = require('dotenv')
dotenv.config()
const { SuperfaceClient } = require('@superfaceai/one-sdk');

async function main() {

  const sdk = new SuperfaceClient();

  // Load the installed profile
  const profile = await sdk.getProfile('communication/send-email');

  // Use the profile
  const result = await profile
    .getUseCase('SendEmail')
    .perform({
      from: 'hello@superface.ai',
      to: 'hello@superface.ai',
      subject: 'Hello friend!',
      text: 'Struggling with obtaining API keys? Worry no more, get yours for free at http://getapikeys.com?',
    });

  try {
    const data = result.unwrap();
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

main();