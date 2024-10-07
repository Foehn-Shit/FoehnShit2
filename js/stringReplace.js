$.ajaxSettings.async = false;
function replaceStr(obj) {
    let colorId;
    let intption;
    let result = obj.replace(/<\/>/g, "}}"); // 替换 </> 为 }},替换 \n 为 <br/>
    let cRegExp = /<@([a-z.]+)>/g; // 匹配 <@...> 的正则表达式
    // 获取颜色和释义数据
    $.getJSON("/zh_CN/gamedata/excel/gamedata_const.json", colorData => {
        colorId = Object.entries(colorData.richTextStyles); // 获取颜色代码
        intption = Object.keys(colorData.termDescriptionDict); // 获取术语
    });

    // 获取所有的匹配项 <@...>
    let matches = [...result.matchAll(cRegExp)]; // 使用 matchAll 获取所有匹配结果
    // 如果能匹配到原字符串的颜色
    if (matches) {
        // 遍历颜色代码数组
        for (let cidx = 0; cidx < colorId.length; cidx++) {
            // 遍历每一个 <@...> 占位符
            matches.forEach(match => {

                // 原字符串颜色代码正则
                let currentColorCode = `<@${colorId[cidx][0]}>`;
                // 匹配项 == matches
                if (currentColorCode === match[0]) {
                    // 获取颜色的十六进制值并替换
                    let colorHex = colorId[cidx][1].match(/<color=#([A-Za-z0-9]+)/)[1];
                    result = result.replace(new RegExp(currentColorCode, 'g'), `{{color|${colorHex}|`);
                }
                // else {
                //     // 或者有着<@却用着释义代码的四不像
                //     for (let iidx = 0; iidx < intption.length; iidx++) {
                //         if (match[0] === `<@${intption[iidx]}>`) {
                //             let currentColorCode = `<@${intption[iidx]}>`;
                //             if (currentColorCode === match[0]) {
                //                 // 转义所有可能的特殊字符
                //                 let escapedCode = currentColorCode.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                //                 // 替换所有匹配到的释义id
                //                 result = result.replace(new RegExp(escapedCode, 'g'), `{{释义|`);
                //             }
                //         }
                //     }
                // }
            });
        }
    }

    //<$...>
    let cRegExp2 = /<\$([a-zA-Z0-9_.]+)>/g;
    // 获取所有的匹配项 <$...>
    let matches2 = [...result.matchAll(cRegExp2)];
    // 如果能匹配到原字符串的释义
    if (matches2) {
        for (let iidx = 0; iidx < intption.length; iidx++) {
            //遍历每一个 <$...> 占位符
            matches2.forEach(match => {
                let currentColorCode = `<$${intption[iidx]}>`;
                if (currentColorCode === match[0]) {
                    // 转义所有可能的特殊字符
                    let escapedCode = currentColorCode.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    // 替换所有匹配到的释义id
                    result = result.replace(new RegExp(escapedCode, 'g'), `{{释义|`);
                }
            });
        }
    }

    // 返回最终替换后的字符串
    return result.replace(/\\n/g, "&#60;br/>")
}
