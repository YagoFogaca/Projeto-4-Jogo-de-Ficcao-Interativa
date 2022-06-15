const prompt = require('prompt-sync')();
console.clear();

const cenas = {
    boasVindas: function teste() {
        console.log('BEM VINDO AO SURVIVING IN THE AMAZON');
        console.log('Um jogo do estilo ficção interativa');
        console.log('<<<<Aperte ENTER para continuar>>>>');
        prompt();
        console.clear();
    },
    ato1: () => {
        console.log();
        console.log(
            'Avião está preste a cair, preciso pensar em alguma coisa....',
        );
        console.log();
        console.log(
            `Eu posso tentar pousar o avisão fazendo de duas formas:\n\nEsvaziando o tanque; \n  ---------  \nOu tentar pousar ele sem esvaziar o tanque e manter contato com a torre.`,
        );
        cenas.decisao1();
    },
    ato2: ato1 => {
        if (ato1 == 'X') {
            console.clear();
            console.log(
                'Piloto: \nTorre na escuta? \n\nTorre: \nNa escuta piloto. \n\nPiloto: \nDecidi esvaziar o tanque para tentar pousar com mais segurança. \n\nTorre: \nVoce tem certeza dessa escolha? \n\nPiloto: \nSim, torre.',
            );
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log(
                'Piloto: \nMinha ultima coordenada é: \n2°35"19.19"S, 60° 1"59.91"O. \nEntendido torre? \n\nTorre: \nSim piloto. \nBoa sorte piloto, aguarde o resgate o mais proximo do local em que você aterrizar. \nQue Deus te proteja!',
            );
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('  ..<Esvaziando o tanque>..');
            console.log('...............................');
            console.log('  ..<75% de combustível>..');
            console.log('...............................');
            console.log('  ..<50% de combustível>..');
            console.log('...............................');
            console.log('  ..<25% de combustível>..');
            console.log('...............................');
            console.log('  ..<0% de combustível>..');
            console.log('...............................');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('  ..<Tanque vazio>..');
            console.log('...............................');
            console.log('  ..<Motores desligados>..');
            console.log('...............................');
            console.log('  ..<Sem comunicação>..');
            console.log('...............................');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('Seja o que Deus quiser');
            console.log();
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('....<CHEGANDO PROXIMO DAS ARVORES>....');
            console.log();
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('....<AVIÃO ESBARRANDO NOS TOPOS DAS ARVORES>....');
            console.log();
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('....<PLAFT>....');
            console.log();
            return 1;
        } else if (ato1 == 'C') {
            console.clear();
            // \n
            console.log(
                'Piloto: \nTorre na escuta? \n\nTorre: \nNa escuta piloto. \n\nPiloto: \nDecidi não esvaziar o tanque para tentar pousar, e continuar mantendo contato com vocês. \n\nTorre: \nVoce tem certeza dessa escolha? \n\nPiloto: \nSim, torre. \n\nTorre: \nBoa sorte piloto, estaremos aqui para te auxiliar no possivel.\nQue Deus te proteja!',
            );
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log(
                'Piloto: \nEstou chegando proximo das arvores, torre. \nEntendido torre? \n\nTorre: \nSim piloto.',
            );
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('Piloto: \nSeja o que Deus quiser');
            console.log();
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('....<CHEGANDO PROXIMO DAS ARVORES>....');
            console.log();
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log('....<TUM-TUM>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log(
                'Piloto: \nEstou batendo nas arvores, torre. \n\nTorre: \nMantenha a calma piloto, vai dar tudo certo!',
            );
            console.log();
            console.log('....<AVIÃO ESBARRANDO NOS TOPOS DAS ARVORES>....');
            console.log();
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log('....<CRASH>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log('....<PLAFT>....');
            console.log();
            return 2;
        }
    },
    ato3: ato2 => {
        if (ato2 == 1) {
        } else if (ato2 == 2) {
            console.log('....<BUM>....');
            console.log('....<BUM>....');
            console.log('....<BUM>....');
            console.log();
            console.log('....<BBBUUUUUUUUUUUUUUMMMMMMMMMM>....');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
            console.log(`
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀
            ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼
            ██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀
            ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼
            ███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼
            ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼
            ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼
            ██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼
            ███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄
            `);
            console.log();
            console.log('O avião explodiu na aterrissagem');
            console.log();
            console.log('<<<<Aperte ENTER para continuar>>>>');
            prompt();
            console.clear();
        }
    },
    decisao1: () => {
        console.log();
        let esvaziarTanque = prompt(
            'APERTE X PARA ESVAZIAR O TANQUE  OU  APERTE C PARA NÃO ESVAZIAR O TANQUE:  ',
        ).toUpperCase();
        while (esvaziarTanque != 'X' && esvaziarTanque != 'C') {
            esvaziarTanque = prompt(
                'APERTE X PARA ESVAZIAR O TANQUE  OU  APERTE C PARA NÃO ESVAZIAR O TANQUE:  ',
            ).toUpperCase();
        }
        let ato2 = cenas.ato2(esvaziarTanque);
        cenas.ato3(ato2);
    },
    // jogo: () => {
    //     boasVindas();
    // },
};
const jogo = () => {
    cenas.boasVindas();
};
jogo();
