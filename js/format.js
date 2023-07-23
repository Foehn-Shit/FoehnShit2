// 实现类似于Python的format函数，在chatgpt的指导下完成。（chatgpt真nb）
// 告诉未来的我，以防忘记用法： str.format({akt:0.1, ......})
String.prototype.format = function (values) {
    let result = this;
    Object.keys(values).forEach(key => {
        const regExp = new RegExp(`{${key}(?::([0-9.%]+))?}`, 'g');
        const value = values[key];
        result = result.replace(/-{-/g, "{").replace(regExp, (match, format) => {
            if (format) {
                if (format.endsWith('%')) {
                    return `${(value * 100).toFixed(parseInt(format))}%`;
                } else {
                    return value.toFixed(parseInt(format));
                }
            } else {
                return value;
            }
        });
    });
    return result;
};
// 技能专用

