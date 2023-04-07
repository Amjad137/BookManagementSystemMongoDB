const {userModel} = require("../models/user-Model");

exports.getAllUsers = async (req,res) => {
    const allUsers = await userModel.find();

    if (allUsers.length === 0) {
        return res
                .status(404)
                .json({
                    success: false,
                    message: "No Books Found",
                });
    }

    return res
            .status(200)
            .json({
                success: true,
                message: "Books Found",
                data: allUsers,
            });
};

exports.getuserByID = async (req,res) => {
    const {id} = req.params;

    const foundUsers = await userModel.findById(id);

    if (foundUsers.length === 0) {
        return res  
                .status(404)
                .json({
                    success: false,
                    message: "No Book Found on this ID",
                });
    }

    return res
            .status(200)
            .json({
                success: true,
                message: `Book Found on id: ${id}`,
                data: foundUsers,
            });
};