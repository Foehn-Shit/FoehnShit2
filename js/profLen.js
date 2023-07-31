// 分支
function subProf(obj) {
    let subProfEn = [];
    let subProfZh = [];
    $.getJSON(`zh_CN/gamedata/excel/uniequip_table.json`, data => {
        $.each(data.subProfDict, (id, name) => {
            subProfEn.push(id);
            subProfZh.push(name.subProfessionName);
        })
    })
    const sub = subProfEn.indexOf(obj);
    return (sub !== -1) ? subProfZh[sub] : undefined;
}