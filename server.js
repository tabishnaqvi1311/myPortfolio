const express = require('express');
const app = express();

const cors = require('cors')

const port = 3001;

const connectToMongo = require('./db')
const client = require('./models/msg')

connectToMongo();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
  res.send('Hello there from 3001');
})

app.post('/submit',(req,res) => {
  console.log(req.body);

  try {
    const { clientName, clientEmail, clientMessage } = req.body;

    const newClient = client.create({
      clientName: clientName,
      clientEmail: clientEmail,
      clientMessage: clientMessage
    });

    res.status(200).json(newClient);
    console.log("Form Submitted!");

  } catch (error) {
    console.log(error);
    res.status(500).json({error: "INTERNAL SERVER ERROR"});
  };
});

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
})