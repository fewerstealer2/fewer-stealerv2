const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const colors = require('colors');

// Configuration
const targetFolder = path.join(__dirname, '..', 'b');
const fileName = 'oscilatoria.js';

// Encryption function
async function encrypt(text, masterKey) {
  const salt = crypto.randomBytes(16); // Salt for key derivation
  const iv = crypto.randomBytes(16); // IV for AES-GCM

  // Derive a key using scrypt with higher parameters
  const key = await new Promise((resolve, reject) => {
    crypto.scrypt(masterKey, salt, 64, { N: 16384, r: 8, p: 1 }, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey.slice(0, 32)); // Use the first 32 bytes as the AES key
    });
  });

  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');

  return {
    encryptedData: encrypted,
    authTag: authTag,
    salt: salt.toString('hex'),
    iv: iv.toString('hex')
  };
}

// Main function
async function main() {
  try {
    const stubPath = path.resolve(__dirname, 'xx.js');
    const stubCode = fs.readFileSync(stubPath, 'utf8');

    // Use a cryptographically strong random secret
    const secret = crypto.randomBytes(32).toString('hex');

    const { encryptedData, authTag, salt, iv } = await encrypt(stubCode, secret);

    // Runner Code (with decryption and authentication)
    const runnerCode = `
    const crypto = require('crypto');

    function decrypt(encdata, authTag, salt, iv, masterkey) {
      const key = crypto.scryptSync(masterkey, Buffer.from(salt, 'hex'), 64, { N: 16384, r: 8, p: 1 }).slice(0, 32);
      const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
      decipher.setAuthTag(Buffer.from(authTag, 'hex'));
      let decrypted = decipher.update(encdata, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    }

    const decrypted = decrypt('${encryptedData}', '${authTag}', '${salt}', '${iv}', '${secret}');
    try {
      new Function('require', decrypted)(require);
    } catch (error) {
      console.error('Decryption or execution failed:', error);
    }
    `;

    // Create folder if needed and write the file
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
    fs.writeFileSync(path.join(targetFolder, fileName), runnerCode, 'utf8');
    console.log(`${colors.green('Success:')} ${fileName} written to ${targetFolder}`);
  } catch (error) {
    console.error(`${colors.red('Error:')} ${error.message}`);
  }
}

main();
