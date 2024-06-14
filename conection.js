//const mongoose=require('mongoose');
//mongodb+srv://AlvaroAlm3ida:TanjiroEsquisfrenico1@cluster0.b8hnv0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados
const url = 'mongodb://localhost:8080';

// Nome do banco de dados
const dbName = 'cluste0';

// Função para conectar ao banco de dados
async function connectToDatabase() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db(dbName);
}

// Exemplo de como usar a função de conexão
async function main() {
    const db = await connectToDatabase();
    console.log('Conectado ao banco de dados');
    // Faça operações no banco de dados aqui...
}

main().catch(console.error);


// Middleware para analisar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para lidar com o envio do formulário
app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        // Conectar ao banco de dados
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);

        // Inserir dados no banco de dados
        const result = await db.collection('nome-da-colecao').insertOne(formData);
        console.log(`Documento inserido com o ID: ${result.insertedId}`);

        res.send('Formulário enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao processar o formulário:', error);
        res.status(500).send('Ocorreu um erro ao processar o formulário. Por favor, tente novamente mais tarde.');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${8080}`);
});