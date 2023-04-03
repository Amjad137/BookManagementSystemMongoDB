const {BookModel, UserModel} = require("../models");

exports.getAllBooks = async (req,res) => {
const books = await BookModel.find(); //get all datas from books

if (books.length === 0) //!books was not working here
 { 
    return res
            .status(404)
            .json({
                message: "No Books Found",
                Success: false,
            });
}

return res
        .status(200)
        .json({
            Success: false,
            message: "Books Found",
            data: books,
        });
};

exports.getSingleBookbyID = async (req,res) => {
    const {id} = req.params;
    const foundBook = await BookModel.findById(id);

    if (!foundBook) {
        return res
                .status(404)
                .json({
                    Success: false,
                    message: "No Books Found on This ID",
                });
    }

    return res
            .status(200)
            .json({
                Success: true,
                message: "Book Found",
                data: foundBook,
            });
};

