const prompt = require('prompt-sync')();
console.clear();
const personagem = {
    fome: 0,
    sede: 0,
    cansaco: 0,
    projeto: 10,
    mudarFome: function (minMax, fome) {
        if (minMax == 1) {
            this.fome += fome;
        } else {
            this.fome -= fome;
        }
    },
    mudarSede: function (minMax, sede) {
        if (minMax == 1) {
            this.sede += sede;
        } else {
            this.sede -= sede;
        }
    },
    mudarCansaco: function (minMax, cansaco) {
        if (minMax == 1) {
            this.cansaco += cansaco;
        } else {
            this.cansaco -= cansaco;
        }
    },
    mudarProjeto() {
        this.projeto -= 10;
    },
};

const apresentacao = () => {
    console.log('Você tem o projeto final para ser entregue na faculdade, e você tem apenas cinco dias para concluir. \nPara isso você precisa fazer escolhas precisas para conseguir concluir e entregar seu projeto dentro do prazo.\n');
    console.log('APERTE ENTER PARA CONTINUAR');
    prompt();
    console.clear();
    console.log(
        `O jogo funciona da seguinte forma \nSuas escolhas geram empactos na historia. \nVocê precisa ficar atendo a 4 coisas: \n\nFome: ${personagem.fome}\n\nSede: ${personagem.sede}\n\nCansaço: ${personagem.cansaco}\n\nEsses tres podem levar o persoagem durante a historia ao hospital e game over. \n\nQuanto falta para o projeto ser finalizado: ${personagem.projeto} \n\nEsse por sua vez, determina se voce ganhou ou perdeu o jogo. `,
    );
    console.log('\nAPERTE ENTER PARA CONTINUAR');
    prompt();
    console.clear();
};
const tempo = {
    hora: 8,
    minutos: 0,
    passarMin: function (min) {
        this.minutos += min;
        if (this.minutos >= 60) {
            this.hora++;
            this.minutos -= 60;
            if (this.minutos >= 60) {
                this.hora++;
                this.minutos -= 60;
            }
        }
        return this.minutos;
    },
    passarHoras: function (horas) {
        return (this.hora += horas);
    },
    mostrarHoras: function () {
        return console.log(`São ${this.hora} : ${this.minutos}`);
    },
};
const perguntas = () => {
    // INICIO
    tempo.hora = 8;
    tempo.minutos = 0;
    tempo.mostrarHoras();

    // PERGUNTA 1
    console.log('\nPERGUNTA 1.\n');
    console.log('\nHora de acordar.\n');
    console.log('O que você deseja fazer? \n1- Acordar\n2-ficar mais meia hora na cama?');
    let acordar = +prompt('1 ou 2 ');
    while (acordar != 1 && acordar != 2) {
        console.log('Opção invalida\n');
        console.log('o que você deseja fazer? \n1- Acordar\n2-ficar mais meia hora na cama?');
        acordar = +prompt('1 ou 2 ');
    }
    if (acordar == 1) {
        tempo.passarMin(30);
        console.log('\nVocê levantou da cama');
    } else {
        tempo.passarHoras(1);
        console.log('\nVocê vai dormir mais 30 minutos');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 2
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 2.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar café\n2- mexer no Instagram?');
    let segundaPergunta = +prompt('1 ou 2 ');
    while (segundaPergunta != 1 && segundaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('O que você deseja fazer? \n1- Tomar café\n2- mexer no Instagram?');
        segundaPergunta = +prompt('1 ou 2 ');
    }
    if (segundaPergunta == 1) {
        console.log('\nVocê foi tomar café');
        tempo.passarMin(15);
    } else {
        tempo.passarMin(15);
        console.log('\nVocê está mexendo no Instagram');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 3
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 3.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let terceiraPergunta = +prompt('1 ou 2 ');
    while (terceiraPergunta != 1 && terceiraPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        terceiraPergunta = +prompt('1 ou 2 ');
    }
    if (terceiraPergunta == 1) {
        console.log('\nVocê tomou água');
        tempo.passarMin(15);
    } else {
        tempo.passarMin(15);
        console.log('\nVocê não tomou tomou água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 4
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 4.\n');
    console.log('\nO que você deseja fazer? \n1- Mexer no TikTok\n2- Começar projeto');
    let quartaPergunta = +prompt('1 ou 2 ');
    while (quartaPergunta != 1 && quartaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Mexer no TikTok\n2- Começar projeto');
        quartaPergunta = +prompt('1 ou 2 ');
    }
    if (acordar == 1) {
        if (quartaPergunta == 1) {
            console.log('\nVocê está mexendo no TikTok');
            tempo.passarHoras(1);
            tempo.passarMin(25);
        } else {
            tempo.passarHoras(1);
            tempo.passarMin(25);
            console.log('\nVocê começou o projeto');
        }
    } else {
        if (quartaPergunta == 1) {
            console.log('\nVocê está mexendo no TikTok');
            tempo.passarMin(55);
        } else {
            tempo.passarMin(55);
            console.log('\nVocê começou o projeto');
        }
    }

    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 5
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 5.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let quintaPergunta = +prompt('1 ou 2 ');
    while (quintaPergunta != 1 && quintaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        quintaPergunta = +prompt('1 ou 2 ');
    }
    if (quintaPergunta == 1) {
        console.log('\nVocê tomou água');
        tempo.passarMin(35);
        tempo.passarHoras(1);
    } else {
        tempo.passarMin(35);
        tempo.passarHoras(1);
        console.log('\nVocê não tomou água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 6
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 6.\n');
    console.log('\nO que você deseja fazer? \n1- Almoçar\n2- Continuar/Começar projeto');
    let sextaPergunta = +prompt('1 ou 2 ');
    while (sextaPergunta != 1 && sextaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Almoçar\n2- Continuar/Começar projeto');
        sextaPergunta = +prompt('1 ou 2 ');
    }
    if (sextaPergunta == 1) {
        console.log('\nVocê foi almoçar');
        tempo.passarMin(30);
        tempo.passarHoras(1);
    } else {
        tempo.passarMin(30);
        tempo.passarHoras(1);
        console.log('\nVocê foi fazer/continuar o projeto');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 7
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 7.\n');
    console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Continuar/Começar projeto');
    let setimaPergunta = +prompt('1 ou 2 ');
    while (setimaPergunta != 1 && setimaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Continuar/Começar projeto');
        setimaPergunta = +prompt('1 ou 2 ');
    }
    if (setimaPergunta == 1) {
        console.log('\nVocê foi dormir');
        tempo.passarHoras(3);
    } else {
        tempo.passarMin(15);
        console.log('\nVocê foi fazer/continuar o projeto');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 8
    if (setimaPergunta == 2) {
        console.log('\nPERGUNTA 8.\n');
        tempo.mostrarHoras();
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        let oitavaPergunta = +prompt('1 ou 2 ');
        while (oitavaPergunta != 1 && oitavaPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
            oitavaPergunta = +prompt('1 ou 2 ');
        }
        if (oitavaPergunta == 1) {
            console.log('\nVocê tomou água');
            tempo.passarHoras(2);
            tempo.passarMin(45);
        } else {
            tempo.passarHoras(2);
            tempo.passarMin(45);
            console.log('\nVocê não tomou água');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
    }

    // PERGUNTA 9
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 9.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar café\n2- Responder wpp');
    let nonaPergunta = +prompt('1 ou 2 ');
    while (nonaPergunta != 1 && nonaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar café\n2- Responder wpp');
        nonaPergunta = +prompt('1 ou 2 ');
    }
    if (nonaPergunta == 1) {
        console.log('\nVocê tomou café');
        tempo.passarMin(30);
    } else {
        tempo.passarMin(30);
        console.log('\nVocê foi responder o wpp');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 10
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 10.\n');
    console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- ir jogar LOL');
    let decimaPergunta = +prompt('1 ou 2 ');
    while (decimaPergunta != 1 && decimaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- ir jogar LOL');
        decimaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaPergunta == 1) {
        console.log('\nVocê foi fazer/continuar o projeto');
        tempo.passarMin(45);
    } else {
        tempo.passarMin(45);
        console.log('\nVocê foi jogar LOL');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 11
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 11.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let decimaPrimeiraPergunta = +prompt('1 ou 2 ');
    while (decimaPrimeiraPergunta != 1 && decimaPrimeiraPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        decimaPrimeiraPergunta = +prompt('1 ou 2 ');
    }
    if (decimaPrimeiraPergunta == 1) {
        console.log('\nVocê foi tomar água');
        tempo.passarMin(15);
        tempo.passarHoras(2);
    } else {
        tempo.passarMin(15);
        tempo.passarHoras(2);
        console.log('\nVocê foi não foi tomar água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 12
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 12.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar banho\n2- Ir jantar');
    let decimaSegundaPergunta = +prompt('1 ou 2 ');
    while (decimaSegundaPergunta != 1 && decimaSegundaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        decimaSegundaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaSegundaPergunta == 1) {
        console.log('\nVocê foi tomar banho');
        tempo.passarMin(30);
    } else {
        tempo.passarMin(30);
        console.log('\nVocê foi jantar');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    if (decimaSegundaPergunta == 1) {
        // PERGUNTA 13
        tempo.mostrarHoras();
        console.log('\nPERGUNTA 13.\n');
        console.log('\nSe você quiser, pode ir jantar. \n1- Ir jantar \n2- Não ir jantar');
        let decimaQuartaPergunta = +prompt('1 ou 2 ');
        while (decimaQuartaPergunta != 1 && decimaQuartaPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nSe você quiser, pode ir jantar. \n1- Ir jantar \n2- Não ir jantar');
            decimaQuartaPergunta = +prompt('1 ou 2 ');
        }
        if (decimaQuartaPergunta == 1) {
            console.log('\nVocê foi jantar');
            tempo.passarMin(30);
        } else {
            tempo.passarMin(30);
            console.log('\nVocê não foi jantar');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
    } else if (decimaSegundaPergunta == 2) {
        // PERGUNTA 14
        tempo.mostrarHoras();
        console.log('\nPERGUNTA 14.\n');
        console.log('\nSe você quiser, pode ir tomar banho. \n1- Tomar banho \n2- Não tomar banho');
        let decimaTerceiraPergunta = +prompt('1 ou 2 ');
        while (decimaTerceiraPergunta != 1 && decimaTerceiraPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nSe você quiser, pode ir tomar banho. \n1- Tomar banho \n2- Não tomar banho');
            decimaTerceiraPergunta = +prompt('1 ou 2 ');
        }
        if (decimaTerceiraPergunta == 1) {
            console.log('\nVocê foi tomar banho');
            tempo.passarMin(30);
        } else {
            tempo.passarMin(30);
            console.log('\nVocê não foi banho');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
    }

    // PERGUNTA 15
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 15.\n');
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let decimaQuintaPergunta = +prompt('1 ou 2 ');
    while (decimaQuintaPergunta != 1 && decimaQuintaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        decimaQuintaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaQuintaPergunta == 1) {
        console.log('\nVocê foi tomar água');
        tempo.passarMin(15);
    } else {
        tempo.passarMin(15);
        console.log('\nVocê foi não foi tomar água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 16
    tempo.mostrarHoras();
    console.log('\nPERGUNTA 16.\n');
    console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir dormir');
    let decimaSextaPergunta = +prompt('1 ou 2 ');
    while (decimaSextaPergunta != 1 && decimaSextaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir dormir');
        decimaSextaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaSextaPergunta == 1) {
        console.log('\nVocê foi fazer/continuar o projeto');
        tempo.passarHoras(1);
        tempo.passarMin(15);
    } else {
        tempo.passarHoras(1);
        tempo.passarMin(15);
        console.log('\nVocê foi dormir');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();

    // PERGUNTA 17
    if (decimaSextaPergunta == 1) {
        tempo.mostrarHoras();
        console.log('\nPERGUNTA 17.\n');
        console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Ir jogar LOL');
        let decimaSetimaPergunta = +prompt('1 ou 2 ');
        while (decimaSetimaPergunta != 1 && decimaSetimaPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nO que você deseja fazer? \n1- It dormir\n2- Ir jogar LOL');
            decimaSetimaPergunta = +prompt('1 ou 2 ');
        }
        if (decimaSetimaPergunta == 1) {
            console.log('\nVocê foi dormir');
        } else {
            tempo.passarMin(15);
            tempo.passarHoras(1);
            console.log('\nVocê foi jogar LOL');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
        if (decimaSetimaPergunta == 2) {
            tempo.mostrarHoras();
            console.log('Indo dormir...');
        }
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
};

function jogo() {
    const diasEntrega = 5;
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    const dias = ['13/06', '14/06', '15/06', '16/06', '17/06'];
    apresentacao();
    for (let d = 0; d < diasEntrega; d++) {
        console.log(`Hoje é ${diasSemana[d]}, dia ${dias[d]}\n`);
        perguntas();
    }
}
jogo();
