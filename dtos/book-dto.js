class issuedBookDto{
    _id;
    name;
    genre;
    price;
    publisher;
    price;
    issuedBy;
    issuedDate;
    returnDate;


    constructor(userParam){
        this._id= userParam._id;
        this.name= userParam.name;
        this.genre= userParam.genre;
        this.price= userParam.price;
        this.publisher= userParam.publisher;
        this.price= userParam.price;
        this.issuedBy= userParam.issuedBy;
        this.issuedDate= userParam.issuedDate;
        this.returnDate= userParam.returnDate;
    }
}

module.exports=issuedBookDto;
