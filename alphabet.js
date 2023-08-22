/* eslint-disable */
const alphabetEng = {
  'a': '(([ ]?)([а|a|á|à|â|ã|@|4]+)([ ]?))',
  'b': '(([ ]?)([б|b|β|в|в̌|ʙ|ƀ|ʚ|6]+)([ ]?))',
  'c': '(([ ]?)([с|c|ç|ć|č|ċ|ƈ|ς|¢|<|(|[|{|©|₡|€]+)([ ]?))',
  'd': '(([ ]?)([д|d|ð|đ|ԁ|ժ|ɗ|₫|∂]+)([ ]?))',
  'e': '(([ ]?)([е|e|é|è|ê|ẽ|ē|ė|ɛ|3|€|є]+)([ ]?))',
  'f': '(([ ]?)([ф|f|ƒ|ʄ|ħ|ғ|ϝ|ſ|🝠|#|ƭ|ʃ|ʈ|ʂ]+)([ ]?))',
  'g': '(([ ]?)([г|g|ɢ|ɡ|ʛ|ǥ|ϥ|ʕ|9|6|&|ж|ʒ|ʐ|ʑ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))',
  'h': '(([ ]?)([н|h|ĥ|ħ|ɦ|ʜ|ћ|Η|н|х|x|х|χ|ẋ|ⅹ]+)([ ]?))',
  'i': '(([ ]?)([і|и|u|i|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'j': '(([ ]?)([ј|j|ʝ|ѳ|ʲ|ʴ|ɉ|ϳ|ʖ]+)([ ]?))',
  'k': '(([ ]?)([к|k|κ|ķ|қ|ʞ|ҡ|ҝ|ⲕ|₭|κ]+)([ ]?))',
  'l': '(([ ]?)([л|l|і|l|ĺ|ļ|ł|ʟ|ɭ|ʃ|1|ℓ|£|]+)([ ]?))',
  'm': '(([ ]?)([м|m|ʍ|ʏ|ɱ|м|ɯ|ʍ|₥|♏|т|t|ț|ť|ṫ|ƭ|ʈ|ʇ|θ|τ]+)([ ]?))',
  'n': '(([ ]?)([н|ʜ|Η|н|п|n|ñ|ń|ņ|ŋ|ɲ|ɳ|η|₦|π]+)([ ]?))',
  'o': '(([ ]?)([о|o|ó|ò|ô|õ|ø|ō|ɵ|0|Θ|¤]+)([ ]?))',
  'p': '(([ ]?)([р|p|ƿ|ρ|þ|ƥ|₱|¶|ρ|ρ|п|n|ñ|ń|ņ|ŋ|ɲ|ɳ|η|π]+)([ ]?))',
  'q': '(([ ]?)([q|q|ʠ|ɋ|q|ჿ|к|k|κ|ķ|қ|ʞ|ҡ|ҝ|ⲕ|₭|κ]+)([ ]?))',
  'r': '(([ ]?)([г|r|ɹ|ɾ|ʁ|ʀ|ɼ|ʳ|г|®|р|p|ƿ|ρ|þ|ƥ|₱|¶|ρ|ρ]+)([ ]?))',
  's': '(([ ]?)([ѕ|s|š|ș|ʂ|ʃ|ʆ|ʐ|ʑ|§|$|с|c|ç|ć|č|ċ|ƈ|ς|¢|<|(|[|{|©|₡|€]+)([ ]?))',
  't': '(([ ]?)([т|t|ț|ť|ṫ|ƭ|ʈ|ʇ|θ|τ|м|m|ʍ|ʏ|ɱ|м|ɯ|ʍ|₥|♏]+)([ ]?))',
  'u': '(([ ]?)([ц|u|ú|ù|û|ũ|ū|ʊ|µ|บ]+)([ ]?))',
  'v': '(([ ]?)([в|v|b|v|v|ʋ|ƴ|ⱱ|۷|ѡ|w|ʍ|ω|ẁ|ẃ|ẅ|ŵ|₩|ω]+)([ ]?))',
  'w': '(([ ]?)([в|v|b|v|v|ƴ|ⱱ|۷|ѡ|w|ʍ|ω|ẁ|ẃ|ẅ|ŵ|₩|ω]+)([ ]?))',
  'x': '(([ ]?)([х|x|х|χ|ẋ|ⅹ|н|h|ĥ|ħ|ɦ|ʜ|ћ|Η|н]+)([ ]?))',
  'y': '(([ ]?)([у|y|ý|ỳ|ŷ|ÿ|ɏ|ʎ|¥|ү|і|и|u|i|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'z': '(([ ]?)([з|z|z|ʐ|ʑ|ʒ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))'
};

const engA = alphabetEng.a;
const engB = alphabetEng.b;
const engC = alphabetEng.c;
const engD = alphabetEng.d;
const engE = alphabetEng.e;
const engF = alphabetEng.f;
const engG = alphabetEng.g;
const engH = alphabetEng.h;
const engI = alphabetEng.i;
const engJ = alphabetEng.j;
const engK = alphabetEng.k;
const engL = alphabetEng.l;
const engM = alphabetEng.m;
const engN = alphabetEng.n;
const engO = alphabetEng.o;
const engP = alphabetEng.p;
const engQ = alphabetEng.q;
const engR = alphabetEng.r;
const engS = alphabetEng.s;
const engT = alphabetEng.t;
const engU = alphabetEng.u;
const engV = alphabetEng.v;
const engW = alphabetEng.w;
const engX = alphabetEng.x;
const engY = alphabetEng.y;
const engZ = alphabetEng.z;

const alphabetUa = {
  'а': '(([ ]?)([а|a|á|à|â|ã|@|4]+)([ ]?))',
  'б': '(([ ]?)([б|6|β|b|в|ʙ|ƀ|ʚ]+)([ ]?))',
  'в': '(([ ]?)([в|b|ʙ|6|v|ѵ|ⱱ|ⱴ|∨|ѡ|w|ʍ|ω|ẁ|ẃ|ẅ|ŵ|₩|ω]+)([ ]?))',
  'г': '(([ ]?)([г|g|ɢ|ɡ|ʛ|ǥ|ϥ|ʕ|9|6|&]+)([ ]?))',
  'ґ': '(([ ]?)([ґ|g|ʛ|ǥ|6]+)([ ]?))',
  'д': '(([ ]?)([д|d|ð|đ|ԁ|ժ|ɗ|₫|∂]+)([ ]?))',
  'е': '(([ ]?)([е|e|é|è|ê|ẽ|ē|ė|ɛ|3|€|є]+)([ ]?))',
  'є': '(([ ]?)([є|e|é|è|ê|ẽ|ē|ė|ɛ|3|€|е]+)([ ]?))',
  'ж': '(([ ]?)([ж|ʒ|ʐ|ʑ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))',
  'з': '(([ ]?)([з|3|ʐ|ʑ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))',
  'и': '(([ ]?)([и|i|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'і': '(([ ]?)([і|и|u|i|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'ї': '(([ ]?)([ї|i|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'й': '(([ ]?)([й|і|i|y|у|í|ì|î|ï|ı|ɪ|1|!|\|]+)([ ]?))',
  'к': '(([ ]?)([к|k|κ|ķ|қ|ʞ|ҡ|ҝ|ⲕ|₭|κ]+)([ ]?))',
  'л': '(([ ]?)([л|l|ĺ|ļ|ł|ʟ|ɭ|ʃ|1|ℓ|£]+)([ ]?))',
  'м': '(([ ]?)([м|m|ʍ|ʏ|ɱ|м|ɯ|ʍ|₥|♏|т|t|ț|ť|ṫ|ƭ|ʈ|ʇ|θ|τ]+)([ ]?))',
  'н': '(([ ]?)([н|h|ĥ|ħ|ɦ|ʜ|ћ|Η|н]+)([ ]?))',
  'о': '(([ ]?)([о|o|ó|ò|ô|õ|ø|ō|ɵ|0|Θ|¤]+)([ ]?))',
  'п': '(([ ]?)([п|n|ñ|ń|ņ|ŋ|ɲ|ɳ|η|₦|π]+)([ ]?))',
  'р': '(([ ]?)([р|p|ƿ|ρ|þ|ƥ|₱|¶|ρ|ρ|г|r|ɹ|ɾ|ʁ|ʀ|ɼ|ʳ|г|®]+)([ ]?))',
  'с': '(([ ]?)([с|c|ç|ć|č|ċ|ƈ|ς|¢|<|(|[|{|©|₡|€]+)([ ]?))',
  'т': '(([ ]?)([т|t|ț|ť|ṫ|ƭ|ʈ|ʇ|θ|τ|м|m|ʍ|ʏ|ɱ|м|ɯ|ʍ|₥|♏]+)([ ]?))',
  'у': '(([ ]?)([у|y|ý|ỳ|ŷ|ÿ|ɏ|ʎ|¥|ү]+)([ ]?))',
  'ф': '(([ ]?)([ф|f|ƒ|ʄ|ħ|ғ|ϝ|ſ||🝠||#|ƭ|ʃ|ʈ|ʂ]+)([ ]?))',
  'х': '(([ ]?)([х|x|х|χ|ẋ|ⅹ|н|h|ĥ|ħ|ɦ|ʜ|ћ|Η|н]+)([ ]?))',
  'ц': '(([ ]?)([ц|c|ć|ĉ|ċ|č|ƈ|ς|¢|¢]+)([ ]?))',
  'ч': '(([ ]?)([ч|č|ć|c|ʧ|ʨ|ʩ|ʪ|ʫ]+)([ ]?))',
  'ш': '(([ ]?)([ш|sh|ʃ|ʆ|ʐ|ʑ|ʒ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))',
  'щ': '(([ ]?)([щ|sh|ʃ|ʆ|ʐ|ʑ|ʒ|ʓ|ʕ|ź|ż|ζ]+)([ ]?))',
  'ь': '(([ ]?)([ь|b|6|β|b|ʙ|ƀ|ʚ]+)([ ]?))',
  'ю': '(([ ]?)([ю|u|10|ΰ|Υ|∪]+)([ ]?))',
  'я': '(([ ]?)([я|y|ya|yа|yá|yà|yâ|yã|y@|y4]+)([ ]?))'
};

const uaA = alphabetUa['а'];
const uaB = alphabetUa['б'];
const uaV = alphabetUa['в'];
const uaH = alphabetUa['г'];
const uaG = alphabetUa['ґ'];
const uaD = alphabetUa['д'];
const uaE = alphabetUa['е'];
const uaYe = alphabetUa['є'];
const uaZh = alphabetUa['ж'];
const uaZ = alphabetUa['з'];
const uaYi = alphabetUa['и'];
const uaI = alphabetUa['і'];
const uaYiAlt = alphabetUa['ї'];
const uaY = alphabetUa['й'];
const uaK = alphabetUa['к'];
const uaL = alphabetUa['л'];
const uaM = alphabetUa['м'];
const uaN = alphabetUa['н'];
const uaO = alphabetUa['о'];
const uaP = alphabetUa['п'];
const uaR = alphabetUa['р'];
const uaS = alphabetUa['с'];
const uaT = alphabetUa['т'];
const uaU = alphabetUa['у'];
const uaF = alphabetUa['ф'];
const uaKh = alphabetUa['х'];
const uaTs = alphabetUa['ц'];
const uaCh = alphabetUa['ч'];
const uaSh = alphabetUa['ш'];
const uaShch = alphabetUa['щ'];
const uaSoftSign = alphabetUa['ь'];
const uaYu = alphabetUa['ю'];
const uaYa = alphabetUa['я'];

const begin = '(?:[^a-zа-іїє_]|^)';
const end = '(?:[^a-zа-яіїє_]|$)';

module.exports = {
  engA,
  engB,
  engC,
  engD,
  engE,
  engF,
  engG,
  engH,
  engI,
  engJ,
  engK,
  engL,
  engM,
  engN,
  engO,
  engP,
  engQ,
  engR,
  engS,
  engT,
  engU,
  engV,
  engW,
  engX,
  engY,
  engZ,
  uaA,
  uaB,
  uaV,
  uaH,
  uaG,
  uaD,
  uaE,
  uaYe,
  uaZh,
  uaZ,
  uaYi,
  uaI,
  uaYiAlt,
  uaY,
  uaK,
  uaL,
  uaM,
  uaN,
  uaO,
  uaP,
  uaR,
  uaS,
  uaT,
  uaU,
  uaF,
  uaKh,
  uaTs,
  uaCh,
  uaSh,
  uaShch,
  uaSoftSign,
  uaYu,
  uaYa,
  begin,
  end
};