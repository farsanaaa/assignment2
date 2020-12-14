const express = require("express");
const authorsRouter = express.Router();

function router(nav){
    
    authorsRouter.get("/", function(req,res){
        
        res.render("addauthor",
        {
            nav,
            title:'Add Author'
        });
        
    });

    return authorsRouter;
}


module.exports = router;
