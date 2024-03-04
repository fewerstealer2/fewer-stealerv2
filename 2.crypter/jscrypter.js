// Import `js-confuser`
const JsConfuser = require("js-confuser");
const { readFileSync, writeFileSync } = require("fs");
const path = require('path');
const fs = require('fs');

// Read the file's code
const file = readFileSync("./input.js", "utf-8");

// Obfuscate the code
JsConfuser.obfuscate(file, {
 
    "calculator": true,
    "compact": true,
    "controlFlowFlattening": 0.5,
    "deadCode": 0.025,
    "dispatcher": 0.75,
    "duplicateLiteralsRemoval": 0.5,
    "globalConcealing": true,
    "hexadecimalNumbers": true,
    "identifierGenerator": "randomized",
    "minify": true,
    "movedDeclarations": true,
    "objectExtraction": true,
    "opaquePredicates": 0.5,
    "preset": "medium",
    "renameGlobals": true,
    "renameVariables": true,
    "shuffle": true,
    "stack": 0.5,
    "stringConcealing": true,
    "stringSplitting": 0.25,
    "target": "browser"

 }).then((obfuscated) => {
  // Write output to file
const hedefKlasorAdi = '../main'; // Hedef klasör adı
const dosyaAdi = 'gayy.js'; // Hedef dosya adı

const hedefKlasor = path.join(__dirname, hedefKlasorAdi);

// Hedef klasörü oluştur (eğer yoksa)
if (!fs.existsSync(hedefKlasor)) {
  fs.mkdirSync(hedefKlasor);
}

const hedefDosya = path.join(hedefKlasor, dosyaAdi);

// Dosyayı yazdır
fs.writeFileSync(hedefDosya, obfuscated, { encoding: 'utf-8' });

console.log(`${dosyaAdi} dosyası ${hedefKlasorAdi} klasörüne yazıldı.`);
});