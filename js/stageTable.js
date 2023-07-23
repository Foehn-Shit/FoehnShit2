cn = [];
en = [];
code = [];
stageName = (obj) => {
    $.getJSON("/zh_CN/gamedata/excel/stage_table.json", (stagename) => {
        for (let x in stagename.stages) {
            cn.push(stagename.stages[x].name);
            en.push(stagename.stages[x].stageId);
            
        };
    })
    for (let z = 0; z < en.length; z++) {
        if (obj == en[z]) {
            return cn[z]
        }
    };
};
stageCode = (obj2) => {
    $.getJSON("/zh_CN/gamedata/excel/stage_table.json", (stagename) => {
        for (let x in stagename.stages) {
            code.push(stagename.stages[x].code);
            en.push(stagename.stages[x].stageId);
            
        };
    })
    for (let a = 0; a < en.length; a++) {
        if (obj2 == en[a]) {
            return code[a]
        }
    };
};
