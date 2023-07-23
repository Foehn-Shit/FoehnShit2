var id = [];
var cnms = [];
// 传统艺能
$.ajaxSettings.async = false;
function ms(num) {
    $.getJSON("/zh_CN/gamedata/excel/item_table.json", function (data) {
        for (jzs in data.items) {
            id.push(data.items[jzs].itemId);
            cnms.push(data.items[jzs].name);
        }
    });
    for (let mtrl = 0; mtrl < id.length; mtrl++) {
        // switch (num) {
        //     case id[mtrl]:
        //         return cnms[mtrl];
        // }
        if(id[mtrl] == num){
            return cnms[mtrl]
        }
    }
};