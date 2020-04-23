import exoress from 'express';  

const app = exoress();

app.use('/', (req, res) => {
    res.send('hiiiiii');
})

app.listen(3000, ()=>{
    console.log('app listining to 30000');
});