const express = require("express");
const { createCategoriesCtrl, getCategoryCtrl, getCategoriesCtrl, deleteCategoryCtrl, updateCategoryCtrl } = require("../../controllers/Categories/categoriesCtrl");
const categoriesRouter = express.Router();

//routes
categoriesRouter.post("", createCategoriesCtrl);

categoriesRouter.get("/:id", getCategoryCtrl);

categoriesRouter.get("", getCategoriesCtrl);

categoriesRouter.delete("/:id", deleteCategoryCtrl);

categoriesRouter.put("/:id", updateCategoryCtrl);

module.exports = categoriesRouter;