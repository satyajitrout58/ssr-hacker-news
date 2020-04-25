import express from 'express';  
import render from './helpers/rendrer'

const app = express();
app.use(express.static('public'));
app.use('/', (req, res) => {
    res.send(render());
})

app.listen(3000, ()=>{
    console.log('app listining to 30000');
});