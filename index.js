const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const port = process.env.PORT || 3004

const app = express()

app.use(express.static(path.join(__dirname, 'dist1')))
console.log(__dirname)
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/formulario', function (req, res) {
    let data = req.body;

    let smtpTransport = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
            user: "testalvorada@gmail.com",
            pass: "testalvorada2017"
        }
    });

    let mailOptions = { //email options
        from: "testalvorada@gmail.com",
        to: "fuchienhsu12@gmail.com", // receiver
        subject: `Site (${data.nome} / ${data.titulo}) `, // subject
        html: `
            <h3>Título: ${data.titulo}</h3>
            <h4>Enviado de: ${data.nome} / ${data.email}</h4>
            <p>Mensagem:</p>
            <p>${data.mensagem}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response) => { //callback
        if (error) {
            console.log(error);
            res.json({error: "API Error!"})
        } else {
            res
                .status(200)
                .json({msg: "Mensagem enviada com sucesso!"});
        }

        smtpTransport.close();
    });
});

app.get('/ip', (req, res) => {

    let resp = `<h1>Seu ip é ${req.headers['x-forwarded-for']}</h1>`
    res.send(resp);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist1/index.html'))
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})