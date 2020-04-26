import express from 'express';
import render from './helpers/rendrer'

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
   
    res.send(render(req));
    
})


app.listen(3000, ()=>{
    console.log('listining port 3000');
})