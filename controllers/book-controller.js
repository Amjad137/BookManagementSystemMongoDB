const {BookModel, UserModel} = require("../models");

const {issuedBookDto} = require("../dtos/book-dto");
const userModel = require("../models/user-Model");

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

exports.getIssuedBooks = async (req,res) => {
    const userWithIssdBook = await userModel.find({
        issuedBook: {$exists: true},                
    })
    .populate("issuedBook");

    //DTO is not involved yet

    const allIssuedBook = userWithIssdBook.map((each) => new issuedBookDto(each));
    /**
     * the each passed in issuedbookDto is the each which present in the map,
     * this line of code is assisgning all datas which present in userWithIssdBook to the issuedBookDto
     */
    
    if (allIssuedBook.length === 0) {
        return res
                .status(404)
                .json({
                    Success: false,
                    message: "No IssuedBooks Found",
                });
    }

    return res
            .status(200)
            .json({
                Success: true,
                message: "issuedBooks Found",
                data: allIssuedBook,
            });
};