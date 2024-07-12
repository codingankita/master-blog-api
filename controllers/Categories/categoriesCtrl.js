const createCategoriesCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "category registered"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getCategoryCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "categories route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getCategoriesCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "categories route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const deleteCategoryCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "category deleted"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const updateCategoryCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "category updated"
        })
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createCategoriesCtrl,
    getCategoryCtrl,
    getCategoriesCtrl,
    deleteCategoryCtrl,
    updateCategoryCtrl
}