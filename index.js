const prompt = require('prompt-sync')();
console.clear();
const personagem = {
    fome: 0,
    sede: 0,
    cansaco: 0,
    projeto: 0,
    mudarFome: function (minMax) {
        if (minMax == 1) {
            this.fome += 5;
        } else {
            this.fome -= 5;
            if (this.sede < 0) {
                this.sede = 0;
            }
        }
    },
    mudarSede: function (minMax) {
        if (minMax == 1) {
            this.sede += 5;
        } else {
            this.sede -= 5;
            if (this.sede < 0) {
                this.sede = 0;
            }
        }
    },
    mudarCansaco: function (minMax) {
        if (minMax == 1) {
            this.cansaco += 5;
        } else if (minMax == 2) {
            this.cansaco -= 25;
        } else {
            this.cansaco -= 5;
            if (this.cansaco < 0) {
                this.cansaco = 0;
            }
        }
    },
    mudarProjeto: function (hora) {
        if (hora == 0) {
            this.projeto += 2.5;
            if (this.projeto > 100) {
                this.projeto = 100;
            }
        } else {
            this.projeto += 6.7;
            if (this.projeto > 100) {
                this.projeto = 100;
            }
        }
    },
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
    zeraHora: function () {
        tempo.hora = 8;
        tempo.minutos = 0;
    },
};
const apresentacao = () => {
    console.log('Você tem o projeto final para ser entregue na faculdade, e você tem apenas cinco dias para concluir. \nPara isso você precisa fazer escolhas precisas para conseguir concluir e entregar seu projeto dentro do prazo.\n');
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    console.log(
        `O jogo funciona da seguinte forma: \nSuas escolhas geram impactos na história. \nVocê tem três necessidades: \n\nFome: ${personagem.fome}\n\nSede: ${personagem.sede}\n\nCansaço: ${personagem.cansaco}\n\nEsses três podem levar o personagem durante a história ao hospital e consequentemente, game over. \n\nEsse por sua vez, determina se você ganhou ou perdeu o jogo e para ganhar o jogo você precisa de no minímo 70 pontos no projeto. \n\nProjeto: ${personagem.projeto}\n `,
    );
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
};
const primeiraPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nHora de acordar.\n');
    console.log('O que você deseja fazer? \n1- Acordar\n2- Ficar mais meia hora na cama?');
    let primeiraPergunta = +prompt('1 ou 2 ');
    while (primeiraPergunta != 1 && primeiraPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('O que você deseja fazer? \n1- Acordar\n2- Ficar mais meia hora na cama?');
        primeiraPergunta = +prompt('1 ou 2 ');
    }
    if (primeiraPergunta == 1) {
        tempo.passarMin(30);
        personagem.mudarFome(1);
        personagem.mudarSede(1);
        console.log('\nVocê levantou da cama');
    } else {
        tempo.passarHoras(1);
        personagem.mudarFome(1);
        personagem.mudarCansaco(0);
        personagem.mudarSede(1);
        console.log('\nVocê vai dormir mais 30 minutos');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return primeiraPergunta;
};
const segundaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar café\n2- Mexer no Instagram?');
    let segundaPergunta = +prompt('1 ou 2 ');
    while (segundaPergunta != 1 && segundaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('O que você deseja fazer? \n1- Tomar café\n2- Mexer no Instagram?');
        segundaPergunta = +prompt('1 ou 2 ');
    }
    if (segundaPergunta == 1) {
        tempo.passarMin(15);
        personagem.mudarFome(0);
        personagem.mudarSede(0);
        console.log('\nVocê foi tomar café');
    } else {
        tempo.passarMin(15);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê está mexendo no Instagram');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return segundaPergunta;
};
const terceiraPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let terceiraPergunta = +prompt('1 ou 2 ');
    while (terceiraPergunta != 1 && terceiraPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        terceiraPergunta = +prompt('1 ou 2 ');
    }
    if (terceiraPergunta == 1) {
        tempo.passarMin(15);
        personagem.mudarSede(0);
        console.log('\nVocê tomou água');
    } else {
        tempo.passarMin(15);
        personagem.mudarSede(1);
        console.log('\nVocê não tomou água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return terceiraPergunta;
};
const quartaPergunta = primeiraPergunta => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Mexer no TikTok\n2- Começar projeto');
    let quartaPergunta = +prompt('1 ou 2 ');
    while (quartaPergunta != 1 && quartaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Mexer no TikTok\n2- Começar projeto');
        quartaPergunta = +prompt('1 ou 2 ');
    }
    if (primeiraPergunta == 1) {
        if (quartaPergunta == 1) {
            tempo.passarHoras(1);
            tempo.passarMin(25);
            personagem.mudarFome(1);
            personagem.mudarCansaco(1);
            personagem.mudarSede(1);
            console.log('\nVocê está mexendo no TikTok');
        } else {
            tempo.passarHoras(1);
            tempo.passarMin(25);
            personagem.mudarCansaco(1);
            personagem.mudarProjeto(1);
            console.log('\nVocê começou o projeto');
        }
    } else {
        if (quartaPergunta == 1) {
            tempo.passarMin(55);
            personagem.mudarFome(1);
            personagem.mudarCansaco(1);
            personagem.mudarSede(1);
            console.log('\nVocê está mexendo no TikTok');
        } else {
            tempo.passarMin(55);
            personagem.mudarProjeto(1);
            personagem.mudarCansaco(1);
            console.log('\nVocê começou o projeto');
        }
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return quartaPergunta;
};
const quintaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let quintaPergunta = +prompt('1 ou 2 ');
    while (quintaPergunta != 1 && quintaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        quintaPergunta = +prompt('1 ou 2 ');
    }
    if (quintaPergunta == 1) {
        tempo.passarMin(35);
        tempo.passarHoras(1);
        personagem.mudarSede(0);
        console.log('\nVocê tomou água');
    } else {
        tempo.passarMin(35);
        tempo.passarHoras(1);
        personagem.mudarSede(1);
        console.log('\nVocê não tomou água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return quintaPergunta;
};
const sextaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Almoçar\n2- Continuar/Começar projeto');
    let sextaPergunta = +prompt('1 ou 2 ');
    while (sextaPergunta != 1 && sextaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Almoçar\n2- Continuar/Começar projeto');
        sextaPergunta = +prompt('1 ou 2 ');
    }
    if (sextaPergunta == 1) {
        tempo.passarMin(30);
        tempo.passarHoras(1);
        personagem.mudarFome(0);
        personagem.mudarSede(0);
        console.log('\nVocê foi almoçar');
    } else {
        tempo.passarMin(30);
        tempo.passarHoras(1);
        personagem.mudarProjeto(0);
        personagem.mudarFome(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi continuar / começar o projeto');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return sextaPergunta;
};
const setimaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Continuar/Começar projeto');
    let setimaPergunta = +prompt('1 ou 2 ');
    while (setimaPergunta != 1 && setimaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Continuar/Começar projeto');
        setimaPergunta = +prompt('1 ou 2 ');
    }
    if (setimaPergunta == 1) {
        tempo.passarHoras(3);
        personagem.mudarFome(1);
        personagem.mudarCansaco(0);
        personagem.mudarSede(1);
        console.log('\nVocê foi dormir');
    } else {
        tempo.passarMin(15);
        personagem.mudarProjeto(1);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi continuar / começar o projeto');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return setimaPergunta;
};
const oitavaPergunta = setimaPergunta => {
    if (setimaPergunta == 2) {
        tempo.mostrarHoras();
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        let oitavaPergunta = +prompt('1 ou 2 ');
        while (oitavaPergunta != 1 && oitavaPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
            oitavaPergunta = +prompt('1 ou 2 ');
        }
        if (oitavaPergunta == 1) {
            tempo.passarHoras(2);
            tempo.passarMin(45);
            personagem.mudarSede(0);
            console.log('\nVocê tomou água');
        } else {
            tempo.passarHoras(2);
            tempo.passarMin(45);
            personagem.mudarSede(1);
            console.log('\nVocê não tomou água');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
        return oitavaPergunta;
    }
};
const nonaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar café\n2- Responder wpp');
    let nonaPergunta = +prompt('1 ou 2 ');
    while (nonaPergunta != 1 && nonaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar café\n2- Responder wpp');
        nonaPergunta = +prompt('1 ou 2 ');
    }
    if (nonaPergunta == 1) {
        tempo.passarMin(30);
        personagem.mudarFome(0);
        personagem.mudarCansaco(1);
        personagem.mudarSede(0);
        console.log('\nVocê foi tomar café');
    } else {
        tempo.passarMin(30);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi responder o wpp');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return nonaPergunta;
};
const decimaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir jogar LOL');
    let decimaPergunta = +prompt('1 ou 2 ');
    while (decimaPergunta != 1 && decimaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir jogar LOL');
        decimaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaPergunta == 1) {
        personagem.mudarProjeto(1);
        tempo.passarMin(45);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi continuar / começar o projeto');
    } else {
        tempo.passarMin(45);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi jogar LOL');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return decimaPergunta;
};
const decimaPrimeiraPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let decimaPrimeiraPergunta = +prompt('1 ou 2 ');
    while (decimaPrimeiraPergunta != 1 && decimaPrimeiraPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        decimaPrimeiraPergunta = +prompt('1 ou 2 ');
    }
    if (decimaPrimeiraPergunta == 1) {
        tempo.passarMin(15);
        tempo.passarHoras(2);
        personagem.mudarSede(0);
        console.log('\nVocê foi tomar água');
    } else {
        tempo.passarMin(15);
        tempo.passarHoras(2);
        personagem.mudarSede(1);
        console.log('\nVocê não foi tomar água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return decimaPrimeiraPergunta;
};
const decimaSegundaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar banho\n2- Ir jantar');
    let decimaSegundaPergunta = +prompt('1 ou 2 ');
    while (decimaSegundaPergunta != 1 && decimaSegundaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar banho\n2- Ir jantar');
        decimaSegundaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaSegundaPergunta == 1) {
        tempo.passarMin(30);
        personagem.mudarFome(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi tomar banho');
    } else {
        tempo.passarMin(30);
        personagem.mudarFome(0);
        personagem.mudarSede(0);
        console.log('\nVocê foi jantar');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return decimaSegundaPergunta;
};
const decimaTerceiraPergunta = decimaSegundaPergunta => {
    if (decimaSegundaPergunta == 1) {
        tempo.mostrarHoras();
        console.log('\nSe você quiser, pode ir jantar. \n1- Ir jantar \n2- Não ir jantar');
        let decimaTerceiraPergunta = +prompt('1 ou 2 ');
        while (decimaTerceiraPergunta != 1 && decimaTerceiraPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nSe você quiser, pode ir jantar. \n1- Ir jantar \n2- Não ir jantar');
            decimaTerceiraPergunta = +prompt('1 ou 2 ');
        }
        if (decimaTerceiraPergunta == 1) {
            tempo.passarMin(30);
            personagem.mudarFome(0);
            personagem.mudarSede(0);
            console.log('\nVocê foi jantar');
        } else {
            tempo.passarMin(30);
            personagem.mudarFome(1);
            personagem.mudarSede(1);
            console.log('\nVocê não foi jantar');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
        return decimaTerceiraPergunta;
    } else if (decimaSegundaPergunta == 2) {
        tempo.mostrarHoras();
        console.log('\nSe você quiser, pode ir tomar banho. \n1- Tomar banho \n2- Não tomar banho');
        let decimaTerceiraPergunta = +prompt('1 ou 2 ');
        while (decimaTerceiraPergunta != 1 && decimaTerceiraPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nSe você quiser, pode ir tomar banho. \n1- Tomar banho \n2- Não tomar banho');
            decimaTerceiraPergunta = +prompt('1 ou 2 ');
        }
        if (decimaTerceiraPergunta == 1) {
            tempo.passarMin(30);
            console.log('\nVocê foi tomar banho');
        } else {
            tempo.passarMin(30);
            console.log('\nVocê não foi tomar banho');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
        return decimaTerceiraPergunta;
    }
};
const decimaQuartaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
    let decimaQuartaPergunta = +prompt('1 ou 2 ');
    while (decimaQuartaPergunta != 1 && decimaQuartaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Tomar água\n2- Não tomar água');
        decimaQuartaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaQuartaPergunta == 1) {
        tempo.passarMin(15);
        personagem.mudarSede(0);
        console.log('\nVocê foi tomar água');
    } else {
        tempo.passarMin(15);
        personagem.mudarSede(1);
        console.log('\nVocê não foi tomar água');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return decimaQuartaPergunta;
};
const decimaQuintaPergunta = () => {
    tempo.mostrarHoras();
    console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir dormir');
    let decimaQuintaPergunta = +prompt('1 ou 2 ');
    while (decimaQuintaPergunta != 1 && decimaQuintaPergunta != 2) {
        console.log('Opção invalida\n');
        console.log('\nO que você deseja fazer? \n1- Continuar/Começar projeto \n2- Ir dormir');
        decimaQuintaPergunta = +prompt('1 ou 2 ');
    }
    if (decimaQuintaPergunta == 1) {
        personagem.mudarProjeto(0);
        tempo.passarHoras(1);
        tempo.passarMin(15);
        personagem.mudarFome(1);
        personagem.mudarCansaco(1);
        personagem.mudarSede(1);
        console.log('\nVocê foi continuar / começar o projeto');
    } else {
        tempo.passarHoras(1);
        tempo.passarMin(15);
        personagem.mudarFome(1);
        personagem.mudarCansaco(0);
        personagem.mudarSede(1);
        console.log('\nVocê foi dormir');
    }
    console.log('\n<<<<Aperte ENTER para continuar>>>>');
    prompt();
    console.clear();
    return decimaQuintaPergunta;
};
const decimaSextaPergunta = decimaQuintaPergunta => {
    if (decimaQuintaPergunta == 1) {
        tempo.mostrarHoras();
        console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Ir jogar LOL');
        let decimaSextaPergunta = +prompt('1 ou 2 ');
        while (decimaSextaPergunta != 1 && decimaSextaPergunta != 2) {
            console.log('Opção invalida\n');
            console.log('\nO que você deseja fazer? \n1- Ir dormir\n2- Ir jogar LOL');
            decimaSextaPergunta = +prompt('1 ou 2 ');
        }
        if (decimaSextaPergunta == 1) {
            personagem.mudarFome(0);
            personagem.mudarCansaco(2);
            personagem.mudarSede(0);
            console.log('\nVocê foi dormir');
        } else {
            tempo.passarMin(15);
            tempo.passarHoras(1);
            personagem.mudarFome(1);
            personagem.mudarCansaco(0);
            personagem.mudarSede(1);
            console.log('\nVocê foi jogar LOL');
        }
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
        if (decimaSextaPergunta == 2) {
            tempo.mostrarHoras();
            personagem.mudarCansaco(1);
            console.log('Indo dormir...');
            console.log('\n<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return decimaSextaPergunta;
        }
    }
};
const validaPersonagem = () => {
    if (personagem.cansaco >= 100) {
        console.log('\nVocê foi para o hospital por estar muito cansado. \nGAME OVER!!!!!!!!!');
        let jogarDeNovo = prompt('\nDeseja jogar novamente? [S/N] ').toUpperCase();
        while (jogarDeNovo != 'S' && jogarDeNovo != 'N') {
            console.log('\nOpção invalida');
            jogarDeNovo = prompt('\nDeseja jogar novamente? [S/N] ').toUpperCase();
        }
        if (jogarDeNovo == 'S') {
            personagem.cansaco = 0;
            personagem.fome = 0;
            personagem.sede = 0;
            console.log('Boa escolha');
            console.log('\n<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return 1;
        } else {
            console.log('Uma pena, nos vemos em outra oportunidade ');
            return 2;
        }
    } else if (personagem.fome >= 100) {
        console.log('Você foi para o hospital por estar sem comer por muitas horas. \nGAME OVER!!!!!!!!!');
        let jogarDeNovo = prompt('Deseja jogar novamente? [S/N] ').toUpperCase();
        while (jogarDeNovo != 'S' && jogarDeNovo != 'N') {
            console.log('\nOpção invalida');
            jogarDeNovo = prompt('\nDeseja jogar novamente? [S/N] ').toUpperCase();
        }
        if (jogarDeNovo == 'S') {
            personagem.cansaco = 0;
            personagem.fome = 0;
            personagem.sede = 0;
            console.log('Boa escolha');
            console.log('\n<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return 1;
        } else {
            console.log('Uma pena, nos vemos em outra oportunidade ');
            return 2;
        }
    } else if (personagem.sede >= 100) {
        console.log('Você foi para o hospital por estar sem desidratado. \nGAME OVER!!!!!!!!!');
        let jogarDeNovo = prompt('Deseja jogar novamente? [S/N] ').toUpperCase();
        while (jogarDeNovo != 'S' && jogarDeNovo != 'N') {
            console.log('\nOpção invalida');
            jogarDeNovo = prompt('\nDeseja jogar novamente? [S/N] ').toUpperCase();
        }
        if (jogarDeNovo == 'S') {
            personagem.cansaco = 0;
            personagem.fome = 0;
            personagem.sede = 0;
            console.log('Boa escolha');
            console.log('\n<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return 1;
        } else {
            console.log('Uma pena, nos vemos em outra oportunidade ');
            return 2;
        }
    } else {
        return 0;
    }
};
const validaFinal = () => {
    if (personagem.projeto >= 95) {
        console.log('\n\nVocê conseguiu entregar o trabalho.\nE tirou nota 10. Nota máxima. Parabéns!!');
    } else if (personagem.projeto >= 85) {
        console.log('\n\nVocê conseguiu entregar o trabalho.\nE tirou nota 9. Mandou bem. Parabéns!');
    } else if (personagem.projeto >= 80) {
        console.log('\n\nVocê conseguiu entregar o trabalho.\nE tirou nota 8. Está no caminho Parabéns');
    } else if (personagem.projeto >= 70) {
        console.log('\n\nVocê conseguiu entregar o trabalho.\nE tirou nota 7. Poderia ser melhor.');
    } else {
        console.log('\n\nVocê não conseguiu entregar o trabalho.\nE tirou nota 0. Vergonha da Profission.');
    }
};
function jogo() {
    const diasEntrega = 5;
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
    const dias = ['13/06', '14/06', '15/06', '16/06', '17/06'];
    let validador;
    apresentacao();
    dias: for (let d = 0; d < diasEntrega; ) {
        console.log(`Hoje é ${diasSemana[d]} - ${dias[d]}\n`);
        tempo.zeraHora();
        const resultado1 = primeiraPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        segundaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        terceiraPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        quartaPergunta(resultado1);
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        quintaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        sextaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        const resultado2 = setimaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        oitavaPergunta(resultado2);
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        nonaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        decimaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        decimaPrimeiraPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        const resultado3 = decimaSegundaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        decimaTerceiraPergunta(resultado3);
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        decimaQuartaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        const resultado4 = decimaQuintaPergunta();
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        decimaSextaPergunta(resultado4);
        validador = validaPersonagem();
        if (validador == 1) {
            continue dias;
        } else if (validador == 2) {
            break dias;
        }
        d++;
        console.log(`Depois de um dia inteiro você está com o seguinte status:\n\nFome: ${personagem.fome} \n\nSede: ${personagem.sede} \n\nCansaço: ${personagem.cansaco} \n\nAndamento do projeto final: ${personagem.projeto.toFixed(0)}%`);
        console.log(`\n\nLembre-se que se sua fome, sede ou cansaço chegar a 100 você vai para o hospital e é game over.\n\nE o projeto precisa ter no minimo 75% para ter nota, se não sua nota será zero.`);
        console.log('\n<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
    }
}
jogo();
validaFinal();
