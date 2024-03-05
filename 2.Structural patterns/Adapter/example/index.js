const adapter = function(objectAuto) {
  return {
    "id": objectAuto.Id || objectAuto.id,
    "title": objectAuto.Title || objectAuto.title,
    "data": objectAuto.Data || objectAuto.data
  }
}