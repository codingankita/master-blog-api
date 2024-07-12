const createPostCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "post registered"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getOnePostCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Posts route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const getAllPostsCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Posts route"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const deletePostCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Profile deleted"
        })
    } catch (error) {
        res.json(error.message);
    }
}

const updatePostCtrl = async(req, res)=>{
    try {
        res.json({
            status: "success",
            data: "Profile updated"
        })
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = {
    createPostCtrl,
    getOnePostCtrl,
    getAllPostsCtrl,
    deletePostCtrl,
    updatePostCtrl
}