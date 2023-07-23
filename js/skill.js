var en = [];
var cn = [];
// 传统艺能
$.ajaxSettings.async = false;
function skill(obj){
    $.getJSON("/zh_CN/gamedata/excel/skill_table.json",function(data){
        for(i in data){
            en.push(data[i].skillId);
            cn.push(data[i].levels[0].name);
        }
    });
    for (let i = 0; i < en.length; i++) {
        switch (obj) {
            case en[i]:
                return cn[i];
        }
    }
}
// 关卡携带技能限定 干员id  技能下标         
function checkSkill(obj, obj2) {
  var a ;
    $.getJSON("/zh_CN/gamedata/excel/character_table.json", function (char) {
      for (let i in char) {
        for (let j = 0; j < char[i].phases.length; j++) {           
          if (char[i].skills != 0 && obj == char[i].phases[j].characterPrefabKey) {
             a = skill(char[i].skills[obj2].skillId)
          }
        }
      }
    })
    return a
  };
