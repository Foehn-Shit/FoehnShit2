function attribute(obj) {
    attren = ["max_hp", "atk", "def", "magical","move_speed"]
    attrcn = ["生命值", "攻击", "防御", "法抗","移动速度"]
    for (let bbindex = 0; bbindex < obj.length; bbindex++) {
        for (let atternIndex = 0; atternIndex < attren.length; atternIndex++) {
            switch (obj) {
                case attren[atternIndex]:
                    return attrcn[atternIndex]
                    break;
            }
        }
    }
}