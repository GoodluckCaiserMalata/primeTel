const express = require('express');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT  || 3000

app.use('/', )
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
