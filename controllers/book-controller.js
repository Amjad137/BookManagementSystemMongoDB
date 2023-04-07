const {BookModel, UserModel} = require("../models");

const {issuedBookDto} = require("../dtos/book-dto");




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

    //DTO comes to play
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

exports.addNewBook = async (req,res) => {
    const {data} = req.body;

    if (!data) {
        return res
                .status(404)
                .json({
                    Success: false,
                    message: "No Data to Add a Book",
                });
    }

    await BookModel.create(data);
    //to add a new data

    const allBooks = await BookModel.find();

    return res
            .status(200)
            .json({
                Success: true,
                message: "New Book Added Successfully",
                data: allBooks,
            });
};

exports.updateBookByID = async (req,res) => {
    const {id} =req.params;
    const {data} =req.body;

    const updatedBook = await BookModel.findOneAndUpdate(
        {
            _id : id,
        },

        data,

        {
            new : true,
        }
    );

    return res
            .status(200)
            .json({
                Success: true,
                message: `The Book on id: ${id} is Updated Successfully`,
                data: updatedBook,
            });
};