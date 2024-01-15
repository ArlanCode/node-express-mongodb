const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Integrando o roteador
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


mongoose.connect('mongodb+srv://admin:password@apicluster.bic7m0r.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });