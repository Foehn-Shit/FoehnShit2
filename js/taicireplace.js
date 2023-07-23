function taicireplace(obj) {
    return obj.
        replace(/\n/g,"&#060;br/&#062;").
        replace(/\\n/g,"&#060;br/&#062;").
        replace(/<@lv.item>/g,"{{字体|加粗|").
        replace(/<\/>/g,"}}")
}