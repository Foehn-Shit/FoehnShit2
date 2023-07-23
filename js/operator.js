var en = [];
var cn = [];
// 可不敢乱true
$.ajaxSettings.async = false;
function operator(obj) {
    $.getJSON("/zh_CN/gamedata/excel/character_table.json", function (data) {
        for (i in data) {
            en.push(data[i].phases[0].characterPrefabKey);
            cn.push(data[i].name);
        }
    });
    for (let i = 0; i < en.length; i++) {
        switch (obj) {
            case en[i]:
                return cn[i];
        }
    }
}
