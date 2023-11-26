const express = require('express');

const app = express();

app.get('/hora', (req, res) => {
    const hora = new Date().getHours()
    // console.log( hora);
    let mensaje = " "

if (hora >= 6 && hora <= 12) {
    mensaje = 'Buenos dias!';
} else if (hora >= 13 && hora <= 19) {
    mensaje = 'Buenas tardes!';
} else  {
    mensaje = 'Buenas noches!';
}
    
    res.send(`<h2> <style >
    body {
        background-color: #f2f2f2;
    }
    h2 {
        color: #00f;
        font-size: 24px;
        text-align: center;
        margin-top: 50px;
    }
    </style> ${mensaje} </h2>`);
});

const PORT = 8080   

app.listen(PORT, (req,res) => {
    console.log(`Servidor escuchando en el puerto : http://localhost:${PORT}/hora `);
});