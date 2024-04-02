import Express from 'express';
import bodyParser from 'body-parser';
import con from './connection.js'
import cors from 'cors';

const app = Express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.post('/input-item', async (req, res) => {
    var {name, price} = req.body;
    const [rows] = await con.execute('INSERT INTO items (name, price) VALUES (?, ?)', [name, price])
    if(rows.affectedRows === 0) return res.json({message: 'Failed to add item'})
    res.json({
        message: 'Item added successfully',
        rows})

})

app.get('/get-items', async (req, res) => {
    const [rows] = await con.execute('SELECT * FROM items')
    res.json(rows)
})

app.get('/get-items/:id', async (req, res) => {
    const {id} = req.params
    const [rows] = await con.execute('SELECT * FROM items WHERE id = ?', [id])
    if(rows.length === 0) return res.json({message: 'Item not found'})
    res.json(rows)
})

app.delete('/delete-item/:id', async (req, res) => {
    const {id} = req.params
    const [rows] = await con.execute('DELETE FROM items WHERE id = ?', [id])
    if(rows.affectedRows === 0) return res.json({message: 'Failed to delete item'})
    res.json({message: 'Item deleted successfully'})
})

app.put('/update-item/:id', async (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    console.log("FIQRi")
    let query;
    let data;

    if (name) {
        query = 'UPDATE items SET name = ?, price = ? WHERE id = ?';
        data = [name, price, id];
    } else {
        query = 'UPDATE items SET price = ? WHERE id = ?';
        data = [price, id];
    }

    const [rows] = await con.execute(query, data);
    if(rows.affectedRows === 0) return res.json({message: 'Failed to update item'});
    res.json({message: 'Item updated successfully'});
});

app.listen(8020, () => {
    console.log('Server is running on PORT 8020')
})