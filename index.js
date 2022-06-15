import express from 'express';


const server = express();

const holidays = [
    { date: "6/1/2022", name: "Confraternização mundial" },
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/1/2022", name: "Carnaval" },
    { date: "4/1/2022", name: "Páscoa" },
    { date: "4/1/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get('/holidays', (req, res)=>{
    res.send(holidays)
});

const hoje = new Date();
const mes = (hoje.toLocaleDateString('en-US'))

server.get('/is-today-holiday', (req, res)=>{
    for(let i = 0; i<holidays.length; i++){
        if(holidays[i].date == hoje.toLocaleDateString('en-US')){
            return res.send(`Sim, hoje é ${holidays[i].name}`);
        }else{
            return res.send(`Não, hoje não é feriado`);
        }
    }

});

server.get('/holiday/:month', (req, res)=>{
    let meses = [];
    for(let i = 0; i<holidays.length; i++){
        if((holidays[i].date.split("/"))[1] == req.params.month){
            console.log("teste");
            meses.push(holidays[i]);
        }
    }
    return res.send(meses)
});

server.listen(4000);