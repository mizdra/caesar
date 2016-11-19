'use strict';

// 大文字: 'upper'
// 小文字:'lower'
// アルファベット以外: null
function checkLetterCase(c) {
    const code = c.charCodeAt(0);
    // 大文字
    if (code >= 65 && code <= 90) return 'upper';
    if (code >= 97 && code <= 122) return 'lower';
    return null;
}

function shift(c, index) {
    const letterCase = checkLetterCase(c);
    if (letterCase === null) return c;

    let code = c.charCodeAt(0);
    if (letterCase === 'upper') {
        code -= 65;
        code += index;
        code = ((code + 26) % 26) + 65;
    } else {
        code -= 97;
        code += index;
        code = ((code + 26) % 26) + 97;
    }

    return String.fromCharCode(code);
}

function caesar(str, index) {
    return [...str].map(c => shift(c, index)).join('');
}

module.exports = caesar;
