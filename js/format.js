// 实现类似于Python的format函数，在chatgpt的指导下完成。（chatgpt真nb）
// 告诉未来的我，以防忘记用法： str.format({akt:0.1, ......})
// 1.0
// String.prototype.format = function (values) {
//     let result = this;
//     Object.keys(values).forEach(key => {
//         const regExp = new RegExp(`{${key}(?::([0-9.%]+))?}`, 'g');
//         const value = values[key];
//         result = result.replace(/-{-/g, "{").replace(regExp, (match, format) => {
//             if (format) {
//                 if (format.endsWith('%')) {
//                     return `${(value * 100).toFixed(parseInt(format))}%`;
//                 } else {
//                     //return value.toFixed(parseInt(format));
//                     return value;
//                 }
//             } else {
//                 return value;
//             }
//         });
//     });
//     return result;
// };
// 1.1
// 缝缝补补又是几块码啊，语异丁真，鉴定为没码的家伙
// 告诉未来的我可以匹配[].等乱七八糟的键值对了（真傻批啊这些键名字
String.prototype.format = function (values) {
    let result = this;
    Object.keys(values).forEach(key => {
        // 转义特殊字符，确保能够匹配方括号和点
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regExp = new RegExp(`{${escapedKey}(?::([0-9.%]+))?}`, 'g'); // 使用转义后的键
        const value = values[key];
        result = result.replace(/-{-/g, "{").replace(regExp, (format) => {
            if (format) {
                if (format.endsWith('%}')) {
                    return `${(value * 100).toFixed(parseInt(format))}%`;
                } else {
                    return value;
                }
            } else {
                return value;
            }
        });
    });
    return result;
};

