const {BookModel, UserModel} = require("../models");


exports.getAllUsers = async (req,res) => {
    const allUsers = await UserModel.find();

    if (allUsers.length === 0) {
        return res
                .status(404)
                .json({
                    success: false,
                    message: "No Users Found",
                });
    }

    return res
            .status(200)
            .json({
                success: true,
                message: "Users Found",
                data: allUsers,
            });
};

exports.getUserByID = async (req,res) => {
    const { id } = req.params;

    
        const foundUser = await UserModel.findById({_id:id});
        if (!foundUser) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "User not found",
                });
            }

        return res
            .status(200)
            .json({
                success: true,
                message: `User found with ID: ${id}`,
                data: foundUser,
            });
};

exports.createNewUser = async (req,res) => {
    const {data} = req.body;

    // if (data.length === 0) {
        if (!data) {
        return res
                .status(404)
                .json({
                    success: false,
                    message: "No Data to Create a New Book",
                });
    }

    await UserModel.create(data);
    
/**
 * the method used above will not work becoz the column detail should be provided to apend new data to a database
 */

// const {name,surname,email,subscriptionDate,subscriptionType} = req.body;
    const newUserData = await UserModel.find();
    return res
            .status(200)
            .json({
                success: true,
                message: "Bood Added",
                data: newUserData,
            });

          
};

exports.updateUserByID = async (req,res) => {
    const {id} = req.params;
    const {data} = req.body;

    const updatedData = await UserModel.findOneAndUpdate(
        {_id:id},

        {$set: {
            ...data,
               },
        },

        {new: true}
        );

        return res
                .status(200)
                .json({
                    success: true,
                    message: "Updated User Data",
                    data: updatedData,
                });

};

exports.deleteUserByID = async (req,res) => {
    const {id} = req.params;

    const userData = await UserModel.findById({_id:id});
    // wasted more time as not added await here
    if (!userData) {
        return res
                .status(404)
                .json({
                    success: false,
                    message: "User Not found",
                });
    }
    
    const dataAfterDeletion = await UserModel.findOneAndDelete({_id:id},{new:true});

    return res
            .status(200)
            .json({
                success: true,
                message: "User Deleted",
                data: dataAfterDeletion,
            });
};