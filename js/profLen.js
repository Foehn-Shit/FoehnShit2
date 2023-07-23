//分支
var subProfEn = ["pioneer", "charger", "tactician", "bearer",
    "centurion", "fighter", "artsfghter", "instructor",
    "lord", "sword", "musha", "fearless", "reaper",
    "librator", "protector", "guardian", "unyield",
    "artsprotector", "duelist", "fortress", "fastshot",
    "closerange", "aoesniper", "longrange", "reaperrange",
    "siegesniper", "bombarder", "corecaster", "splashcaster",
    "funnel", "phalanx", "mystic", "chain", "blastcaster",
    "physician", "ringhealer", "healer", "wandermedic", "slower",
    "underminer", "bard", "blessing", "summoner", "craftsman",
    "executor", "pusher", "stalker", "hookmaster",
    "geek", "merchant", "traper", "dollkeeper","incantationmedic"];

var subProfZh = ["尖兵", "冲锋手", "战术家", "执旗手", "强攻手", "斗士", "术战者",
    "教官", "领主", "剑豪", "武者", "无畏者", "收割者", "解放者", "铁卫", "守护者",
    "不屈者", "驭法铁卫", "决战者", "要塞", "速射手", "重射手", "炮手", "神射手",
    "散射手", "攻城手", "投掷手", "中坚术师", "扩散术师", "驭械术师", "阵法术师",
    "秘术师", "链术师", "轰击术师", "医师", "群愈师", "疗养师", "行医", "凝滞师",
    "削弱者", "吟游者", "护佑者", "召唤师", "工匠", "处决者", "推击手", "伏击客",
    "钩索师", "怪杰", "行商", "陷阱师", "傀儡师","咒愈师"];
function subProf(obj) {
    for (var i = 0; i < subProfEn.length; i++) {
        switch (obj) {
            case subProfEn[i]:
                return subProfZh[i];
                break;
        }
    }

}