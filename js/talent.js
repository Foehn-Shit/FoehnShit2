$.ajaxSettings.async = false;
var nameLn = [];
var descLn = [];
var proNameLn = [];
var proDescLn = [];
var proRankLen = [];
let stars = num =>{
    switch(num){
        case "TIER_1":
            return 1;
        case "TIER_2":
            return 2;
        case "TIER_3":
            return 3;
        case "TIER_4":
            return 4;
        case "TIER_5":
            return 5;
        case "TIER_6":
            return 6;
    }
}
$.getJSON("/zh_CN/gamedata/excel/character_table.json", function (a) {
    $.each(a, function (nameid, value) {
        if (stars(value.rarity) >= 3 && value.talents != null && value.profession != "TOKEN") {
            for (let i = 0; i < value.talents.length; i++) {
                if (value.talents[i].candidates[value.talents[i].candidates.length - 1].requiredPotentialRank == 0) {
                    nameLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 1].name);
                    descLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 1].description);
                } else {
                    proNameLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 1].name);
                    proDescLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 1].description);
                    proRankLen.push(value.talents[i].candidates[value.talents[i].candidates.length - 1].requiredPotentialRank);
                    nameLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 2].name);
                    descLn.push(value.talents[i].candidates[value.talents[i].candidates.length - 2].description);
                }
            }
        }
    })
})
function talents(obj) {
    for(let izz = 0; izz < nameLn.length;izz++){
        if(obj == nameLn[izz]){
            return descLn[izz];
        }
    }
}
function proTalents(obj) {
    for(let icc = 0; icc < proNameLn.length;icc++){
        if(obj == proNameLn[icc]){
            return proDescLn[icc];
        }
    }
}
function proRank(obj){
    for(let iee = 0; iee < proNameLn.length;iee++){
        if(obj == proNameLn[iee]){
            return proRankLen[iee];
        }
    }
}