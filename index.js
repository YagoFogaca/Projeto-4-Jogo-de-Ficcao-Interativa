const prompt = require('prompt-sync')();
console.clear();
const personagem = {
    fome: 100,
    cede: 100,
    sono: 0,
    mochila: [],
};
const configuracaoJogo = {
    //Cenas do jogo
    boasVinhas: function () {
        console.clear();
        let mensagenBoasVindas =
            'BEM VINDO AO SURVIVING IN THE AMAZON\n\nUm jogo do estilo ficção interativan\n\n<<<<Aperte ENTER para continuar>>>>';
        console.log(mensagenBoasVindas);
        prompt();
        console.clear();
    },
    cena2: function () {
        console.log(
            'Avião está preste a cair, preciso pensar em alguma coisa....',
        );
        console.log();
        console.log(
            `Eu posso tentar pousar o avisão fazendo de duas formas:\n\nEsvaziando o tanque; \n  ---------  \nOu tentar pousar ele sem esvaziar o tanque e manter contato com a torre.`,
        );
        console.log();
    },
    cena3: function (decisao1) {
        if (decisao1 == 1) {
            console.log('Esvaziando o tanque');
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return 1;
        } else {
            console.log('Não esvaziando o tanque');
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            return 0;
        }
    },
    cena4: function (cena3) {
        if (cena3 == 1) {
            console.log('Estou vivo');
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
        } else {
            console.log('BUMMM');
            console.log();
            console.log('VOCÊ MORREU \nGAME OVER');
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
        }
    },
    cena_5_1: function () {},
    //Decisões que o personagem tem que fazer durante o jogo
    decisao1: function () {
        this.boasVinhas();
        this.cena2();
        console.log();
        let esvaziarTanque = prompt(
            'APERTE X PARA ESVAZIAR O TANQUE  OU  APERTE C PARA NÃO ESVAZIAR O TANQUE:  ',
        ).toUpperCase();
        while (esvaziarTanque != 'X' && esvaziarTanque != 'C') {
            esvaziarTanque = prompt(
                'APERTE X PARA ESVAZIAR O TANQUE  OU  APERTE C PARA NÃO ESVAZIAR O TANQUE:  ',
            ).toUpperCase();
        }
        console.clear();
        if (esvaziarTanque == 'X') {
            esvaziarTanque = 1;
        } else {
            esvaziarTanque = 2;
        }
        this.cena3(esvaziarTanque);
        this.cena4(esvaziarTanque);
        if (esvaziarTanque == 1) {
            return 1;
        } else {
            return 0;
        }
    },

    //
};
const jogo = () => {
    let inicio = configuracaoJogo.decisao1();
    dia: for (let i = 0; i < 7; i++) {
        // A cada repetição nesse for será um dia
        if (inicio == 0) {
            let jogarDnv = prompt('Deseja jogar novamente? ').toLowerCase();
            while (jogarDnv != 'sim' && jogarDnv != 'nao') {
                console.log('palavra invalida');
                jogarDnv = prompt('Deseja jogar novamente? ').toLowerCase();
            }
            if (jogarDnv == 'sim') {
                console.log('Boa escolha');
                inicio = configuracaoJogo.decisao1();
                continue dia;
            } else {
                console.log('Até uma proxima');
                break dia;
            }
        } else {
            // console.log('Mandou facil');
        }
    }
};
jogo();
