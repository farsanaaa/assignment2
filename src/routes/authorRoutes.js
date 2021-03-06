const express=require('express');
const authorsRouter=express.Router();
function router(nav){

    var authors=[
        {
            Name:'Jack London',
            DoB: '12 January 1876',
            img: "jack.jpg"
        },
        {
            
            Name:'Harper Lee',
            DoB:'28 April 1926',
            img: "lee.jpg"
        },
        {
            
            Name:'Alexandre Dumas',
            DoB:'24 July 1802',
            img: "alex.jpg"
        },
        {
            
            Name:'Yann Martel',
            DoB:'25 June 1963 ',
            img: "yann.jpg"
        },
      
        {
            
            Name:'Alan Moore',
            DoB:' 18 November 1953',
            img: " alan.jpg"
        },
        {
            
            Name:' Toni Morrison',
            DoB:'18 February 1931',
            img: "toni.jpg"
        },
        {
            
            Name:'Charlie Mackesy',
            DoB:'1962',
            img: "charlie.jpg"
        },
        {
            
            Name:'Louisa May Alcott',
            DoB:'29 November 1832',
            img: "may.jpg"
        }
        ]  

    authorsRouter.get('/', function(req,res){
        
        res.render("authors",{
            nav,
            title: 'Library',
            books
        });
        
        });
        
        authorsRouter.get('/:i',function(req,res){
            const id= req.params.i;
            res.render('author',{
                nav,
                title: 'Library',
                author: authors[i]
            });
        
        });    

        return authorsRouter;
    }        
        module.exports=router;