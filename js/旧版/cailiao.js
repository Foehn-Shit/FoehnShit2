//材料          3301            3302            3303
var jnsLen = ["技巧概要·卷1", "技巧概要·卷2", "技巧概要·卷3"];
//T1 6          30011   30061     30031    30021     30041    30051
var T1clLen = ["源岩", "破损装置", "酯原料", "代糖", "异铁碎片", "双酮"];
//T2 6          30012   30062   30032  30022    30042     30052
var T2clLen = ["固源岩", "装置", "聚酸酯", "糖", "异铁", "酮凝集"];
//T3 15         30013   30063         30033     30023     30043     30053      30073    30083      30093        30103
var T3clLen = ["固源岩组", "全新装置", "聚酸酯组", "糖组", "异铁组", "酮凝集组", "扭转醇", "轻锰矿", "研磨石", "RMA70-12",
    // 31013   31023   31033       31043       31053           31063
    "凝胶", "炽合金", "晶体元件", "半自然溶剂", "化合切削液", "转质盐组"];
//T4 15         30014       30064      30034     30024       30044   30054      30074    30084       30094       30104
var T4clLen = ["提纯源岩", "改量装置", "聚酸酯块", "糖聚块", "异铁块", "酮阵列", "白马醇", "三水锰矿", "五水研磨石", "RMA70-24",
    // 31014       31024      31034    31044       31054         31064
    "聚合凝胶", "炽合金块", "晶体电路", "精炼溶剂", "切削原液", "转质盐聚块"];
//T5 4          30115    30125         30135     30145          30155
var T5clLen = ["聚合剂", "双极纳米片", "D32钢", "晶体电子单元", "烧结核凝晶"];
//T1芯片        3211        3221      3231      3241        3251      3261      3271        3281
var T1Chip = ["先锋芯片", "近卫芯片", "重装芯片", "狙击芯片", "术师芯片", "医疗芯片", "辅助芯片", "特种芯片"];
//T2芯片        3212        3222      3232      3242        3252      3262      3272        3282
var T2Chip = ["先锋芯片组", "近卫芯片组", "重装芯片组", "狙击芯片组", "术师芯片组", "医疗芯片组", "辅助芯片组", "特种芯片组"];
//T3芯片        3213        3223      3233      3243        3253      3263      3273        3283
var T3Chip = ["先锋双芯片", "近卫双芯片", "重装双芯片", "狙击双芯片", "术师双芯片", "医疗双芯片", "辅助双芯片", "特种双芯片"];
//作战记录       2001       2002              2003          2004
var Exp = ["基础作战记录", "初级作战记录", "中级作战记录", "高级作战记录"]
// 奇奇怪怪     mod_unlock_token   4001    4002     3003  mod_update_token_1 mod_update_token_2     32001
var qiqiguaiguai = ["模组数据块", "龙门币", "至纯源石", "赤金", "数据增补条", "数据增补仪", "芯片助剂"];
//活动材料                 act18side_token_pieces       act19side_token_reagents
var activity = ["蚀刻弹蛋壳", "乐谱草稿", "神秘试剂"]
//材料集合
function ms(num) {
    if (num == 3301) {
        return jnsLen[0]
    } else if (num == 3302) {
        return jnsLen[1]
    } else if (num == 3303) {
        return jnsLen[2]
    }
    // T1材料 从左往右
    else if (num == 30011) {
        return T1clLen[0]
    } else if (num == 30061) {
        return T1clLen[1]
    } else if (num == 30031) {
        return T1clLen[2]
    } else if (num == 30021) {
        return T1clLen[3]
    } else if (num == 30041) {
        return T1clLen[4]
    } else if (num == 30051) {
        return T1clLen[5]
    }
    // T2
    else if (num == 30012) {
        return T2clLen[0]
    } else if (num == 30062) {
        return T2clLen[1]
    } else if (num == 30032) {
        return T2clLen[2]
    } else if (num == 30022) {
        return T2clLen[3]
    } else if (num == 30042) {
        return T2clLen[4]
    } else if (num == 30052) {
        return T2clLen[5]
    }
    //T3
    else if (num == 30013) {
        return T3clLen[0]
    } else if (num == 30063) {
        return T3clLen[1]
    } else if (num == 30033) {
        return T3clLen[2]
    } else if (num == 30023) {
        return T3clLen[3]
    } else if (num == 30043) {
        return T3clLen[4]
    }

    else if (num == 30053) {
        return T3clLen[5]
    } else if (num == 30073) {
        return T3clLen[6]
    } else if (num == 30083) {
        return T3clLen[7]
    } else if (num == 30093) {
        return T3clLen[8]
    } else if (num == 30103) {
        return T3clLen[9]
    }

    else if (num == 31013) {
        return T3clLen[10]
    } else if (num == 31023) {
        return T3clLen[11]
    } else if (num == 31033) {
        return T3clLen[12]
    } else if (num == 31043) {
        return T3clLen[13]
    } else if (num == 31053) {
        return T3clLen[14]
    } else if (num == 31063) {
        return T3clLen[15]
    }
    //T4
    else if (num == 30014) {
        return T4clLen[0]
    } else if (num == 30064) {
        return T4clLen[1]
    } else if (num == 30034) {
        return T4clLen[2]
    } else if (num == 30024) {
        return T4clLen[3]
    } else if (num == 30044) {
        return T4clLen[4]
    }

    else if (num == 30054) {
        return T4clLen[5]
    } else if (num == 30074) {
        return T4clLen[6]
    } else if (num == 30084) {
        return T4clLen[7]
    } else if (num == 30094) {
        return T4clLen[8]
    } else if (num == 30104) {
        return T4clLen[9]
    }

    else if (num == 31014) {
        return T4clLen[10]
    } else if (num == 31024) {
        return T4clLen[11]
    } else if (num == 31034) {
        return T4clLen[12]
    } else if (num == 31044) {
        return T4clLen[13]
    } else if (num == 31054) {
        return T4clLen[14]
    } else if (num == 31064) {
        return T4clLen[15]
    }
    //T5
    else if (num == 30115) {
        return T5clLen[0]
    } else if (num == 30125) {
        return T5clLen[1]
    } else if (num == 30135) {
        return T5clLen[2]
    } else if (num == 30145) {
        return T5clLen[3]
    } else if (num == 30155) {
        return T5clLen[4]
    }
    //T1芯片
    else if (num == 3211) {
        return T1Chip[0]
    } else if (num == 3221) {
        return T1Chip[1]
    } else if (num == 3231) {
        return T1Chip[2]
    } else if (num == 3241) {
        return T1Chip[3]
    } else if (num == 3251) {
        return T1Chip[4]
    } else if (num == 3261) {
        return T1Chip[5]
    } else if (num == 3271) {
        return T1Chip[6]
    } else if (num == 3281) {
        return T1Chip[7]
    }
    //T2芯片
    else if (num == 3212) {
        return T2Chip[0]
    } else if (num == 3222) {
        return T2Chip[1]
    } else if (num == 3232) {
        return T2Chip[2]
    } else if (num == 3242) {
        return T2Chip[3]
    } else if (num == 3252) {
        return T2Chip[4]
    } else if (num == 3262) {
        return T2Chip[5]
    } else if (num == 3272) {
        return T2Chip[6]
    } else if (num == 3282) {
        return T2Chip[7]
    }
    //T3芯片
    else if (num == 3213) {
        return T3Chip[0]
    } else if (num == 3223) {
        return T3Chip[1]
    } else if (num == 3233) {
        return T3Chip[2]
    } else if (num == 3243) {
        return T3Chip[3]
    } else if (num == 3253) {
        return T3Chip[4]
    } else if (num == 3263) {
        return T3Chip[5]
    } else if (num == 3273) {
        return T3Chip[6]
    } else if (num == 3283) {
        return T3Chip[7]
    }
    // 奇奇怪怪
    else if (num == "mod_unlock_token") {
        return qiqiguaiguai[0]
    } else if (num == 4001) {
        return qiqiguaiguai[1]
    } else if (num == 4002) {
        return qiqiguaiguai[2]
    } else if (num == 3003) {
        return qiqiguaiguai[3]
    } else if (num == "mod_update_token_1") {
        return qiqiguaiguai[4]
    } else if (num == "mod_update_token_2") {
        return qiqiguaiguai[5]
    } else if (num == "32001") {
        return qiqiguaiguai[6]
    }
    // 作战记录
    else if (num == 2001) {
        return Exp[0]
    } else if (num == 2002) {
        return Exp[1]
    } else if (num == 2003) {
        return Exp[2]
    } else if (num == 2004) {
        return Exp[3]
    }
    //活动材料
    else if (num == "act16side_token_bolt") {
        return activity[0]
    } else if (num == "act18side_token_pieces") {
        return activity[1]
    } else if (num == "act19side_token_reagents") {
        return activity[2]
    } else {
        return num
    }
};