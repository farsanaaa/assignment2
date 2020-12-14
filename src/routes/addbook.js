const express = require("express");
const booksRouter = express.Router();

function router(nav){
    
    booksRouter.get("/", function(req,res){
        
        res.render("addbook",
        {
            nav,
            title:'Add Books'
        });
        
    });

    return booksRouter;
}


module.exports = router;