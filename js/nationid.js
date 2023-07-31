// 阵营
function nationIdLen(obj) {
    let nationEn = [];
    let nationZh = [];
    $.getJSON(`zh_CN/gamedata/excel/handbook_team_table.json`, data => {
        $.each(data, (id, name) => {
            nationEn.push(name.powerId);
            nationZh.push(name.powerName)
        });
    });
    for (var i = 0; i < nationEn.length; i++) {
        switch (obj) {
            case nationEn[i]:
                return nationZh[i];
        }
    }
}
