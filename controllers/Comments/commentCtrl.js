const createCommentCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comment registered"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getCommentCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comments route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getAllCommentsCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comments route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const deleteCommentCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comment deleted"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const updateCommentCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "comment updated"
        })
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createCommentCtrl,
    getCommentCtrl,
    getAllCommentsCtrl,
    deleteCommentCtrl,
    updateCommentCtrl
}