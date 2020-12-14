const express=require('express');

const app=express();
const nav=[
    {
        link: '/books', name:'Books'
    },
    {
        link:'/authors',name: 'authors'
    },
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(navb);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);

const authorsRouter=require('./src/routes/authorRoutes')(nav);
app.use('/authors',authorsRouter);

app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        title: 'Library'
    });
});

app.listen(5040);