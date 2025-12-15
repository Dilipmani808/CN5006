app.get('/about',function(req,res)
{ res.send("This is basic express application ")
})
app.get('/users/:userId/books/:bookId', function (req, res) { res.send(req.params)
})
app.get('/GetStudents',function (req,res)
 { studentdata={}
 fs.readFile(__dirname + "/" + "Student.json", 'utf8', function (err,
data) { console.log( data );
 res.json({ 'status':true, 'Status_Code':200,
 'requested at': req.localtime, 'requrl':req.url,
 'request Method':req.method, 'studentdata':JSON.parse(data)});
});
 })
 