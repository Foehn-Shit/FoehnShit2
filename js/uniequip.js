var uniequipEn = [];
var uniequipCn = [];
// 同步
$.ajaxSettings.async = false;
function uniequip(obj) {
    $.getJSON("/zh_CN/gamedata/excel/uniequip_table.json", function (data) {
        for (let i in data.equipDict) {
            uniequipEn.push(data.equipDict[i].uniEquipId);
            uniequipCn.push(data.equipDict[i].uniEquipName);
        }
    });
    for (let i = 0; i < uniequipEn.length; i++) {
        switch (obj) {
            case uniequipEn[i]:
                return uniequipCn[i];
        }
    }
}
