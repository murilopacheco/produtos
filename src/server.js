const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// Configurações de conexão com o MongoDB Atlas
const uri = "mongodb+srv://muriloredes:TKeSRneUMI57zdjA@cluster0.lgrkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Insira sua string de conexão do MongoDB Atlas
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.post('/produtos', async (req, res) => {
  try {
    const { nome, preco } = req.body;
    await client.connect();
    const database = client.db("ecommerce");
    const collection = database.collection("produtos");

    const result = await collection.insertOne({ nome, preco });
    res.status(201).send({ message: "Produto adicionado com sucesso!", result });
  } catch (error) {
    res.status(500).send({ message: "Erro ao adicionar o produto.", error });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
