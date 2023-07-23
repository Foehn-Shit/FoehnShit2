// 攻击范围
function rangeLen(obj) {
    switch (obj) {
        case "0-1":
            return "1";
            break;
        case "1-1":
            return "1*2"
            break;
        case "1-3":
            return "银灰二技能"
            break;
        case "2-1":
            return "2-1"
            break;
        case "2-2":
            return "1*3"
            break;
        case "2-3":
            return "3*3-2"
            break;
        case "2-4":
            return "送葬人"
            break;
        case "2-5":
            return "送葬人精一"
            break;
        case "2-6":
            return "假日威龙陈三技能"
            break;
        case "3-1":
            return "{{攻击范围/个|111,2111,111}}"
            break;
        case "3-2":
            return "1*4"
            break;
        case "3-3":
            return "3*4"
            break;
        case "3-4":
            return "阿米娅三技能"
            break;
        case "3-5":
            return "3-5"
            break;
        case "3-6":
            return "3*3"
            break;
        case "3-7":
            return "银灰三技能"
            break;
        case "3-8":
            return "3*5-2"
            break;
        case "3-9":
            return "5*5-6"
            break;
        case "3-10":
            return "3*5"
            break;
        case "3-11":
            return "3-11"
            break;
        case "3-12":
            return "3*4-4"
            break;
        case "3-13":
            return "爱丽丝"
            break;
        case "3-14":
            return "崖心二技能"
            break;
        case "3-15":
            return "3-15"
            break;
        case "3-16":
            return "卡夫卡二技能"
            break;
        case "3-17":
            return "3-17"
            break;
        case "4-1":
            return "1*5"
            break;
        case "4-3":
            return "早露精一"
            break;
        case "4-4":
            return "早露攻击范围"
            break;
        case "4-5":
            return "4-5"
            break;
        case "4-6":
            return "4-6"
            break;
        case "4-7":
            return "4-7"
            break;
        case "5-1":
            return "1*6"
            break;
        case "x-1":
            return "空精一"
            break;
        case "x-2":
            return "塞雷娅二技能"
            break;
        case "x-3":
            return "塞雷娅三技能"
        case "x-4":
            return "空"
            break;
        case "x-5":
            return "推进之王二技能"
            break;
        case "x-6":
            return "嵯峨二技能"
            break;
        case "y-1":
            return "调香师"
            break;
        case "y-2":
            return "调香师精1"
            break;
        case "y-3":
            return "{{攻击范围/个|1111,12111,1111}}"
            break;
        case "y-4":
            return "安洁莉娜三技能"
            break;
        case "y-6":
            return "初雪精1"
            break;
        case "y-7":
            return "白面鸮二技能"
            break;
        case "y-8":
            return "铃兰三技能"
            break;
        case "b-1":
            return "b-1"
            break;
        case "null":
            return ""
            break;
        // case 
        // case 
        // case 
        // case 
        // case 
        // case 
        // case 
        // case 
        // case 
        // case 
        default:
            return obj
    }
}