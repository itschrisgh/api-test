import * as express from 'express';
import { createConnection } from 'typeorm';
import { ClientRepository } from './Repository/Client-Repositories';

const clienteRepo = new ClientRepository()

createConnection().then(connection => {
}).catch(error => console.log(error));

const app = express();
app.use(express.json);

app.get('/customer', (req, res) => {
    clienteRepo.getClientsList().then((resultado) => res.send(resultado));
});

app.get('/customer/:id', (req, res) => {
    clienteRepo.getClient(req.params.id).then((resultado) => res.send(resultado));
})

app.post('/customer', (req, res) => {
    clienteRepo.newClient(req.body).then((resultado) => res.send(resultado));
})

app.put('/customer/:id', (req, res) => {
    clienteRepo.updateClient(req.params.id, req.body).then(() => res.send('OK'));
})

app.delete('/customer/:id', (req, res) => {
    clienteRepo.deleteClient(req.params.id).then(() => res.send('OK'));
})

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});