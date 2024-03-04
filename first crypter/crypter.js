const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

if (fs.existsSync(path.join(__dirname, '\\build'))) {
  fs.rmSync(path.join(__dirname, '\\build'), {
    recursive: true,
    force: true
  });
}

const start = Date.now();

let coreCode = fs.readFileSync(path.join(__dirname, 'sa.js'), 'utf8')


		   
function encrypt(text, masterkey) {
  const iv = crypto.randomBytes(16);
  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(masterkey, salt, 100000, 32, 'sha512');
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return {
    encryptedData: encrypted,
    salt: salt.toString('base64'),
    iv: iv.toString('base64')
  };
}

function decrypt(encdata, masterkey, salt, iv) {
  const key = crypto.pbkdf2Sync(masterkey, Buffer.from(salt, 'base64'), 100000, 32, 'sha512');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'base64'));
  let decrypted = decipher.update(encdata, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const secret = crypto.randomBytes(32).toString('base64');
const encryptionKey = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);


runnerCode = `${coreCode}`


const { encryptedData, salt, iv } = encrypt(runnerCode, encryptionKey);

runnerCode = `
const crypto = require('crypto');

${decrypt.toString()}

const decrypted = decrypt("${encryptedData}", "${encryptionKey}", "${salt}", "${iv}");
new Function('require', decrypted)(require);
`;

const klasorAdi = '../2.crypter'; // Hedef klasör adı
const dosyaAdi = 'input.js'; // Hedef dosya adı

const hedefKlasor = path.join(__dirname, klasorAdi);

// Klasörü oluştur (eğer yoksa)
if (!fs.existsSync(hedefKlasor)) {
  fs.mkdirSync(hedefKlasor);
}

const hedefDosya = path.join(hedefKlasor, dosyaAdi);

// Dosyayı yazdır
fs.writeFileSync(hedefDosya, runnerCode, 'utf8');

console.log(`${dosyaAdi} dosyası ${klasorAdi} klasörüne yazıldı.`);

console.log(`Obfuscated and encrypted with AES-256: (${Date.now() - start} milliseconds)`)