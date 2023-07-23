// 触发类型
function skTyp(obj) {
    switch (obj) {
        case "PASSIVE":
            return "被动"
        case "MANUAL":
            return "手动触发"
        case "AUTO":
            return "自动触发"
        default:
            return "未知"
    }
}