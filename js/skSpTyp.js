//回复类型
function skSpTyp(obj) {
    switch (obj) {
        case "INCREASE_WITH_TIME":
            return "自动回复"
            break;
        case "INCREASE_WHEN_ATTACK":
            return "攻击回复"
            break;
        case 8:
            return ""
            break;
        case "INCREASE_WHEN_TAKEN_DAMAGE":
            return "受击回复"
            break;
        default:
            return "未知"
    }
}