"use strict";

function controller(view, model) {
  return {
    setData(data, dbKey) {
      if (!this.validateData(data)) throw new Error("No data in controller");
      model.saveData(data, dbKey);
    },

    getData(dbKey) {
      if (!dbKey) throw new Error("No dbKey");

      return model.getData(dbKey);
    },

    validateData(data) {
      if (Object.keys(data).length === 0) return false;
      for (const key in data) {
        if (data[key] === "") return false;
      }
      return true;
    },

    changeCompleted(itemId, dbKey, status) {
      if (!itemId) throw new Error("itemId is not defined");

      model.changeCompleted(itemId, dbKey, status);
    },

    removeElement(elementId, dbKey) {
      if (!elementId) throw new Error("No elementId");
      model.deleteItem(elementId, dbKey);
    },

    removeAll(dbKey) {
      model.clearStorage(dbKey);
    },
  };
}
