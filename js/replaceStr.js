function replaceStr(obj) {
    return obj.
        replace(/\\n/g,"&#060;br/&#062;").
        replace(/\n/g,"&#060;br/&#062;").
        replace(/<\/>/g, "}}").
        // 释义类
        replace(/<\$ba.shield>护盾/g, "{{释义|护盾").
        replace(/<\$ba.camou>迷彩/g, "{{释义|迷彩").
        replace(/<\$ba.invisible>隐匿/g, "{{释义|隐匿").
        replace(/<\$ba.stun>晕眩/g, "{{释义|晕眩").
        replace(/<\$ba.fragile>脆弱/g,"{{释义|脆弱").
        replace(/<\$ba.frozen>冻结/g,"{{释义|冻结").
        replace(/<\$ba.binding>绑定/g,"{{释义|绑定").
        replace(/<\$ba.sleep>沉睡/g,"{{释义|沉睡").
        replace(/<\$ba.buffres>抵抗/g,"{{释义|抵抗").
        replace(/<\$ba.sluggish>停顿/g,"{{释义|停顿").
        replace(/<\$ba.root>束缚/g,"{{释义|束缚").
        replace(/<\$ba.cold>寒冷/g,"{{释义|寒冷").
        replace(/<\$ba.inspire>鼓舞/g,"{{释义|鼓舞").
        replace(/<\$ba.protect>庇护/g,"{{释义|庇护").
        replace(/<\$ba.dt.neural>神经损伤/g,"{{释义|神经损伤").
        replace(/<\$ba.charged>蓄力/g,"{{释义|蓄力").
        replace(/<\$ba.strong>精力充沛/g,"{{释义|精力充沛").
        replace(/<\$ba.float>近地悬浮/g,"{{释义|近地悬浮").
        replace(/<\$ba.refraction>折射/g,"{{释义|折射").
        replace(/<\$ba.overdrive>过载/g,"{{释义|过载").
        replace(/<\$ba.dt.apoptosis>凋亡损伤/g,"{{释义|凋亡损伤").
        replace(/<\$ba.debuff>异常状态/g,"{{释义|异常状态").
        replace(/<\$ba.levitate>浮空/g,"{{释义|浮空").
        replace(/<\$ba.physhield>物理护盾/g,"{{释义|物理护盾").
        replace(/<\$ba.magicfragile>法术脆弱/g,"{{释义|法术脆弱").
        replace(/<\$ba.dying>重伤/g,"{{释义|重伤").
        replace(/<\$ba.barrier>屏障/g,"{{释义|屏障").
        replace(/<\$ba.steal>偷取/g, "{{释义|偷取").
        replace(/<\$ba.weaken>虚弱/g, "{{释义|虚弱").
        replace(/<\$ba.weightless>失重/g, "{{释义|失重").
        replace(/<\$ba.berserk>坚忍/g, "{{释义|坚忍").
        replace(/<\$ba.dt.apoptosis2>凋亡损伤/g, "{{释义|凋亡损伤").


        replace(/<\$cc.bd_A_1>/g,"{{释义|").
        replace(/<\$cc.bd_A_2>/g,"{{释义|").
        replace(/<\$cc.bd_B_1>/g,"{{释义|").
        replace(/<\$cc.bd_B_2>/g,"{{释义|").
        replace(/<\$cc.bd_A>/g,"{{释义|").
        replace(/<\$cc.bd_B>/g,"{{释义|").
        replace(/<\$cc.bd_a1>/g,"{{释义|").
        replace(/<\$cc.bd_b1>/g,"{{释义|").
        replace(/<\$cc.bd_ash>/g,"{{释义|").
        replace(/<\$cc.bd_tachanka>/g,"{{释义|").
        replace(/<\$cc.bd_a1_a1>/g,"{{释义|").
        replace(/<\$cc.bd_a1_a2>/g,"{{释义|").
        replace(/<\$cc.bd_a1_a3>/g,"{{释义|").
        replace(/<\$cc.m.var1>/g,"{{释义|").
        replace(/<\$cc.m.var2>/g,"{{释义|").
        replace(/<\$cc.t.snsant1>/g,"{{释义|").
        replace(/<\$cc.t.snsant2>/g,"{{释义|").
        replace(/<\$cc.g.lgd>/g,"{{释义|").
        replace(/<\$cc.g.lda>/g,"{{释义|").
        replace(/<\$cc.g.ussg>/g,"{{释义|").
        replace(/<\$cc.g.R6>/g,"{{释义|").
        replace(/<\$cc.g.sp>/g,"{{释义|").
        replace(/<\$cc.g.abyssal>/g,"{{释义|").
        replace(/<\$cc.g.karlan>/g,"{{释义|").
        replace(/<\$cc.g.sui>/g,"{{释义|").
        replace(/<\$cc.c.abyssal2_1>/g,"{{释义|").
        replace(/<\$cc.c.abyssal2_2>/g,"{{释义|").
        replace(/<\$cc.c.abyssal2_3>/g,"{{释义|").
        replace(/<\$cc.t.strong2>/g,"{{释义|").
        replace(/<\$cc.m.pow1>/g,"{{释义|").
        replace(/<\$cc.m.pow2>/g,"{{释义|").
        replace(/<\$cc.m.pow3>/g,"{{释义|").
        replace(/<\$cc.t.flow_gold>/g,"{{释义|").
        replace(/<\$cc.w.ncdeer1>/g,"{{释义|").
        replace(/<\$cc.w.ncdeer2>/g,"{{释义|").
        replace(/<\$cc.sk.manu1>/g,"{{释义|").
        replace(/<\$cc.tag.op>/g,"{{释义|").
        replace(/<\$cc.tag.knight>/g,"{{释义|").
        replace(/<\$cc.tag.durin>/g,"{{释义|").
        // 颜色类
        replace(/<@mission.levelname>/g,"{{color|FFDE00|").
        replace(/<@mission.number>/g,"{{color|FFDE00|").
        replace(/<@tu.kw>/g,"{{color|0098DC|").
        replace(/<@tu.imp>/g,"{{color|FF0000|").
        replace(/<@tu.ht>/g,"{{color|ff8d00|").
        replace(/<@cc.vup>/g,"{{color|0098DC|").
        replace(/<@cc.vdown>/g,"{{color|FF6237|").
        replace(/<@cc.rem>/g,"{{color|F49800|").
        replace(/<@cc.kw>/g,"{{color|00B0FF|").
        replace(/<@ba.vup>/g,"{{color|0098DC|").
        replace(/<@ba.vdown>/g,"{{color|FF6237|").
        replace(/<@ba.rem>/g,"{{color|F49800|").
        replace(/<@ba.kw>/g,"{{color|00B0FF|").
        replace(/<@ba.talpu>/g,"{{color|0098DC|").
        replace(/<@ba.xa>/g,"{{color|FF0000|").
        replace(/<@ba.xb>/g,"{{color|FF7D00|").
        replace(/<@ba.xc>/g,"{{color|FFFF00|").
        replace(/<@ba.xd>/g,"{{color|00FF00|").
        replace(/<@ba.xe>/g,"{{color|00FFFF|").
        replace(/<@ba.xf>/g,"{{color|0291FF|").
        replace(/<@ba.xg>/g,"{{color|FF00FF|").
        replace(/<@eb.key>/g,"{{color|00FFFF|").
        replace(/<@eb.danger>/g,"{{color|FF0000|").
        replace(/<@ro.get>/g,"{{color|0098DC|").
        replace(/<@ro.lose>/g,"{{color|C82A36|").
        replace(/<@rolv.rem>/g,"{{color|FF4C22|").
        replace(/<@lv.item>/g,"{{字体|加粗|").
        replace(/<@lv.rem>/g,"{{color|FFFFFF|").
        replace(/<@lv.mhtx>/g,"{{color|1B1B1B|").
        replace(/<@lv.mhfs>/g,"{{color|A57F5B|").
        replace(/<@lv.mhitem>/g,"{{color|A57F5B|").
        replace(/<@lv.fs>/g,"{{color|FF0000|").
        replace(/<@lv.sp">/g,"{{color|fd4600|").
        replace(/<@lv.ez>/g,"{{color|0098dc|").
        replace(/<@lv.hdbg">/g,"{{color|7ba61f|").
        replace(/<@ro1.get>/g,"{{color|E5B684|").
        replace(/<@rc.title">/g,"{{color|FFFFFF|").
        replace(/<@rc.subtitle">/g,"{{color|FFC90E|").
        replace(/<@rc.em">/g,"{{color|FF7F27|").
        replace(/<@rc.eml">/g,"{{color|32CD32|").
        replace(/<@ga.title">/g,"{{color|FFFFFF|").
        replace(/<@ga.subtitle">/g,"{{color|FFC90E|").
        replace(/<@ga.up">/g,"{{color|FF7F27|").
        replace(/<@ga.adgacha">/g,"{{color|00C8FF|").
        replace(/<@ga.nbgacha">/g,"{{color|00DDBB|").
        replace(/<@ga.limadgacha">/g,"{{color|FF7E1F|").
        replace(/<@ga.percent">/g,"{{color|FFD800|").
        replace(/<@ga.attention">/g,"{{color|FF3126|").
        replace(/<@attainga.desc">/g,"{{color|FF3126|").
        replace(/<@attainga.desc2">/g,"{{color|FFD800|").
        replace(/<@attainga.attention">/g,"{{color|E1322C|").
        replace(/<@linkagega.charname">/g,"{{color|FFF6A9|").
        replace(/<@linkagega.title">/g,"{{color|FF8A00|").
        replace(/<@limtedga.title">/g,"{{color|FFFFFF|").
        replace(/<@limtedga.subtitle">/g,"{{color|FFC90E|").
        replace(/<@limtedga.up">/g,"{{color|FF7F27|").
        replace(/<@limtedga.21">/g,"{{color|D7BCFF|").
        replace(/<@limtedga.percent">/g,"{{color|FFD800|").
        replace(/<@limtedga.attention">/g,"{{color|E1322C|").
        replace(/<@limtedga.lattention">/g,"{{color|FF9E58|").
        replace(/<@vc.newyear10">/g,"{{color|FF3823|").
        replace(/<@vc.adgacha">/g,"{{color|0098DC|").
        replace(/<@vc.attention">/g,"{{color|FFD800|").
        replace(/<@vc.text">/g,"{{color|898989|").
        replace(/<@vc.endtime">/g,"{{color|ff0327|").
        replace(/<@act.missiontips>/g,"{{color|d9bd6a|").
        replace(/<@act.spreward>/g,"{{color|FF5001|").
        replace(/<@act.timelimit>/g,"{{color|ffe300|")
        +"<br/>"
}
