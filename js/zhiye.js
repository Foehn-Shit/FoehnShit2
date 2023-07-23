var zhiye2 = ["WARRIOR", "SNIPER", "MEDIC", "SUPPORT", "SPECIAL", "TANK", "PIONEER", "CASTER"];
var zhiye = ["近卫", "狙击", "医疗", "辅助", "特种", "重装", "先锋", "术师"];
function zhiyelen(obj){
    for (var i = 0; i < zhiye.length; i++)
    switch (obj) {
        case zhiye2[i]:
            return zhiye[i];
            break;
    };
}