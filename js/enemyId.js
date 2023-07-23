var enemyEn = [];
var enemyCn = [];
// 传统异步以false为止
$.ajaxSettings.async = false;
function enemyId(obj) {
    $.getJSON("/zh_CN/gamedata/excel/enemy_handbook_table.json", function (data) {
        for (aana in data.enemyData) {
            enemyEn.push(data.enemyData[aana].enemyId);
            enemyCn.push(data.enemyData[aana].name);
        }
    });
    for (var ije = 0; ije < enemyEn.length; ije++) {
        switch (obj) {
            case enemyEn[ije]:
                return enemyCn[ije];
        }
    }
}