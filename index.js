const prompt = require("prompt-sync")();

function pressioneEnter() {
  console.log("Pressione ENTER p/ prosseguir");
  prompt("");
  if (prompt() !== "") {
    console.log("Digite apenas ENTER");
    prompt("");
  }
}
function relogio() {
  tempo += 8;
  console.log(`Já se passaram ${tempo} horas!`);

  return tempo;
}
function sucesso(parametro = 10) {
  let chance = Math.floor(Math.random() * 20) + 1;

  return chance;
}
function addDia() {
  dias++;
  return dias;
}
function crescimento() {
  evolucaoDaTribo++;
  console.log("A tribo está crescendo graças aos teus esforços");
}
function diminuicao() {
  evolucaoDaTribo--;
  console.log("Cuidado, estamos perdendo nosa luta pela sobrevivencia!");
}
function cacar() {
  console.log(
    "A caça é uma atividade muito importante que traz alimento para toda tribo"
  );
  console.log("Que animal deseja caçar ?");
  console.log(
    "\n" + arrayPerguntasCaca[0],
    "\n" + arrayPerguntasCaca[1],
    "\n" + arrayPerguntasCaca[2]
  );
  escolhaCaca = prompt(": ");
  if (escolhaCaca == "1") {
    relogio();
    console.log("COELHO!\n");
    console.log(
      "O coelho é fonte nutritiva e dispõe de pele para calçados e roupas, porém tem pouca carne e teremos falta de carne."
    );
    console.log(`
    Você ganhou CARNE.\n
    Você ganhou PELE.\n`);
    personagem.recompensa();
    crescimento();
  } else if (escolhaCaca == "2") {
    relogio();
    console.log("VEADO!\n");
    console.log(
      "O Veado é uma excelente fonte de couro, e a carne vai nutrir vários aldeões"
    );
    console.log(`
    Você ganhou CARNE.\n
    Você ganhou COURO.\n`);
    personagem.recompensa();
    crescimento();
  } else if (escolhaCaca == "3") {
    relogio();
    console.log(
      "Se você deixar de fazer sua parte vamos acabar perdendo nossa Tribo."
    );
    personagem.penalidade();
    diminuicao();
  } else {
    console.log("Responda apenas com '1','2' ou '3'.");
    console.log("Que animal deseja caçar ?");
    console.log(
      "\n" + arrayPerguntasCaca[0],
      "\n" + arrayPerguntasCaca[1],
      "\n" + arrayPerguntasCaca[2]
    );
    escolhaCaca = prompt(": ");
    relogio();
  }
}
function pescar() {
  console.log(
    "A pesca nos ajuda muito a trazer alimento para nossos companheiros "
  );
  console.log("Aonde você vai pescar ?");
  console.log(
    "\n" + arrayPerguntasPesca[0],
    "\n" + arrayPerguntasPesca[1],
    " \n" + arrayPerguntasPesca[2]
  );
  let escolhaPesca = prompt(": ");
  if (escolhaPesca == "1") {
    console.log(
      `A pesca no rio é mais facil e rápida ,\nmas nos da uma quantidade pequena de peixe.\nTambém podemos coletar as água do rio , que será importante para consumo de todos!`
    );
    console.log(`
    Você ganhou PEIXE.\n
    Você ganhou ÁGUA.\n `);
    relogio();
    crescimento();
    personagem.recompensa();
    personagem.diminuiHp();
  }
  if (escolhaPesca == "2") {
    console.log(
      "A Pesca no mar é mais arriscada , mas pode nos trazer uma quantidade maior de peixe! "
    );
    pressioneEnter();
    console.log(
      `Achamos um objeto brilhando no fundo do mar numa profundidade segura para mergulho, deseja arriscar pega-la ? S/N `
    );
    let decisao = prompt(": ".toLocaleLowerCase);
    while (decisao !== "s" && decisao !== "n") {
      console.log("Insira sua resposta 's' ou 'n'.");
      decisao = prompt("".toLocaleLowerCase);
    }

    if (decisao !== "s") {
      console.log(
        "Sem problemas , apenas fazer a pesca já nos dará muitos recursos!"
      );
      relogio();
      personagem.diminuiHp();
    } else if (decisao == "s") {
      sucesso();
      let chance = sucesso();
      if (chance <= 10) {
        console.log(
          `Você conseguiu recuperar um artigo especial: ${premioPesca}.\n`
        );
        personagem.itens.push(premioPesca);
        console.log("Você ganhou PEIXE.\n");
        personagem.diminuiHp();
      } else {
        console.log("Falhamos em recuperar o item.\n");
        console.log("Você ganhou PEIXE.\n");
        personagem.diminuiHp();
      }
      relogio();
      personagem.recompensa();
      crescimento();
    } else if (escolhaPesca == "3") {
      console.log(
        "Se você deixar de fazer sua parte vamos acabar perdendo nossa Tribo."
      );
      relogio();
      diminuicao();
      personagem.penalidade();
    }
  }
}
function explorar() {
  console.log(
    "Você decidiu explorar o terreno. Você irá ajudar muito descobrindo sobre nosso território!"
  );
  console.log("Que local você deseja explorar ?");
  console.log(
    "\n" + arrayPerguntasExplorar[0],
    "\n" + arrayPerguntasExplorar[1],
    " \n" + arrayPerguntasExplorar[2]
  );
  let escolhaExplora = prompt(": ");
  relogio();
  if (escolhaExplora == "1") {
    console.log(
      "O Norte é uma região rica em minérios , olhe com atenção e veja se encontra algo valioso!"
    );
    pressioneEnter();
    console.log(
      "Soubemos por nossos companheiros, que mais ao Norte existe uma caverna inexplorada. "
    );
    console.log("Você deseja ir até lá ? S/N");
    let decisao = prompt(": ".toLocaleLowerCase);
    while (decisao !== "s" && decisao !== "n") {
      console.log("Insira sua resposta 's' ou 'n'.");
      decisao = prompt("".toLocaleLowerCase);
    }
    if (decisao !== "s") {
      console.log(
        "Sem problemas , apenas fazer o reconhecimento já é muito valoroso!"
      );
      relogio();
      personagem.diminuiHp();
    } else if (decisao == "s") {
      console.log(
        "Estamos na caverna.\n *****você terá uma chance de adquirir uma reliquia valiosa.*****"
      );
      pressioneEnter();
      sucesso();
      let exito = sucesso();
      if (exito < 10) {
        console.log();
        let itemRaro = premioExplorNorte;
        console.log(`Você encontrou: ${itemRaro}`);
        console.log(
          "Incrível, esse tesouro é imenso. Sua riqueza poderá nos fazer crescer e evoluir muito!"
        );
        personagem.itens.push(itemRaro);
        personagem.exibeItens();
        personagem.diminuiHp();
        exito = 0;
      } else console.log("Falhou , vamos retornar e fazer outro trabalho.");

      crescimento();
      personagem.abilidade++;
      personagem.recompensa();
      personagem.diminuiHp();
    }
  }
  if (escolhaExplora == "2") {
    console.log(
      "Explorar ao Sul é um bom movimento, lá existem criadores de gado que pode nos ensinar a suas técnica. "
    );
    console.log(
      "Você quer tentar aprender mais sobre como trabalhar com gado ? S/N"
    );
    let decisaoSul = prompt("".toLocaleLowerCase);
    while (decisaoSul !== "s" && decisaoSul !== "n") {
      console.log("Insira sua resposta 's' ou 'n'.");
      decisaoSul = prompt("".toLocaleLowerCase);
    }
    if (decisaoSul !== "s") {
      console.log(
        "Sem problemas , apenas fazer o reconhecimento já é muito valoroso!"
      );
      personagem.diminuiHp();
    } else if (decisaoSul == "s") {
      console.log(
        "***Você terá uma chance de adquirir um item especial ******"
      );
      pressioneEnter();
      sucesso();
      let exito;
      exito = sucesso();
      if (exito < 10) {
        let premioSul = premioExplorSul;
        console.log(`Você encontrou: ${premioSul}`);
        console.log(
          "Um presente maravilhoso. Agora temos mais um conhecimento que nos fará evoluir!"
        );
        personagem.itens.push(premioSul);
        personagem.exibeItens();
        personagem.diminuiHp();
        exito = 0;
      } else {
        console.log("Falhou , vamos retornar e fazer outro trabalho.");
      }
      personagem.experiencia++;
      personagem.recompensa();
      personagem.diminuiHp();
      relogio();
      crescimento();
    }
  }

  if (escolhaExplora == "3") {
    console.log(
      "Se você deixar de fazer sua parte vamos acabar perdendo nossa Tribo."
    );
    personagem.penalidade();
    diminuicao();
    personagem.diminuiHp();
    relogio();
  }
}

let personagem = {
  nome: "Indio Makauara",
  energia: 100,
  experiencia: 0,
  abilidade: 0,
  itens: ["Lança"],

  exibirStatus: function () {
    console.log("*-*-*-*-*-*");
    console.log("Status:");
    console.log(`Nome: ${this.nome}`);
    console.log(`HP: ${this.energia}`);
    console.log(`Xp: ${this.experiencia}`);
    console.log(`Abil: ${this.abilidade}`);
    console.log("*-*-*-*-*-*");
    console.log();
  },
  recompensa: function () {
    this.energia -= 10 ;
    this.experiencia += 10;
    this.abilidade += 10;
  },

  penalidade: function () {
    this.energia -= 20;
    this.experiencia -= 10;
    this.abilidade -= 10;
  },
  exibeItens: function () {
    for (let i of personagem.itens) {
      console.log(i);
    }
  },
  diminuiHp: function () {
    personagem.energia -= 10;
  },
};
let premioFinal = "Cocar do Herói";
let premioPesca = "Bússola";
let premioExplorSul = "Manta de Couro";
let premioExplorNorte = "Tesouro Perdido";
let continuar = true;
let tempo = 0;
let evolucaoDaTribo = 5;
let dias = 0;
const arrayPerguntasIniciais = ["Caçar?", "Pescar?", "Explorar o território?"];
const arrayPerguntasCaca = [
  "\n[1] Caçar um coelho ? ",
  "\n[2] Caçar um veado?",
  "\n[3] Desistir da caça.",
];
const arrayPerguntasPesca = [
  "\n[1] Pescar no rio ",
  "\n[2] Pescar no Mar ",
  " \n[3] Abandonar a pesca!",
];
const arrayPerguntasExplorar = [
  "\n[1] Explorar ao Norte",
  "\n[2] Explorar ao sul! ",
  " \n[3] Abandonar a exploração!",
];

while (continuar == true || dias <= 4) {
  
  if (tempo >= 24) {
    tempo = 0;
    addDia();
  }
  
  if (personagem.energia <= 0) {
    console.log(`Sua Energia chegou ao fim. Você precisa descansar .`);
    personagem.exibirStatus()
    tempo += 12;
    personagem.energia = 100;
    pressioneEnter()
    console.log(`Agora você pode retornar as suas atividades , sua energia é: HP = ${personagem.energia}
    Você descansou durante: ${tempo} horas. `);
    continue;
  }
  if (dias == 0) {
    console.log("**************************");
    console.log(
      `Nossa tribo está crescendo e precisamos dos mais fortes e corajosos para ajudar no crescimento dela.\nEstamos precisando dos seus serviços: 
      ${personagem.nome}! \nVocê pode escolher entre uma das 3 atividades para contribuir com os Makauara diariamente.\nPrecisamos manter a saúde da tribo estável para que não percamos nosso povo, e você precisa se manter saudavel para realizar seus trabalhos e evitar que a tribo acabe!?`
    );
    console.log("**************************");
    addDia();
  }
  if (dias <= 1) {
    console.log(`----------------------------\n
    Esperamos muito de você ${personagem.nome}\n
    ----------------------------\n
    Hoje é o dia ${dias}\n `);
  } else if (dias > 1 && dias <= 4) {
    console.log(`----------------------------\n
    Mais 1 dia. Dê o seu melhor !!!\n
    Hoje é o dia ${dias}\n
    ----------------------------\n`);
  }
  if (evolucaoDaTribo < 0) {
    console.log("---------------------------------");
    console.log(
      "Você não cumpriu bem suas tarefas e deixou a tribo se perder!"
    );
    console.log("---------------------------------");
    personagem.exibirStatus();
    console.log(personagem.item);
    continuar = false;
    break;
  } else if (evolucaoDaTribo >= 15 || dias > 4) {
    continuar = false;

    if (personagem.abilidade > 90 || personagem.experiencia > 90) {
      personagem.nome = "Chefe Makauara";
    }
    if (personagem.abilidade > 100 || personagem.experiencia > 100) {
      personagem.nome = "Cacique Makauara";
    }
    console.log(
      `Após toda esta jornada você se fortaleceu e contribuiu com seus irmãos Makauaras.\n
    A nossa tribo evoluiu bastante, e se tornou uma aldeia prospera!\n
    Você adquiriu uma recompensa por todo seu esforço: ${premioFinal}\n`
    );
    personagem.itens.push(premioFinal);
    personagem.exibirStatus();
    console.log("Você mostrou força e recolheu algumas recompensas:\n");
    personagem.exibeItens();
    console.log(`\n
    Você cumpriu sua tarefa e se tornou: ${personagem.nome},\n
    agradecemos por seu esforço e crescimento.\n
    Você foi recompensado por seus serviços até aqui,\npedimos que continue nos liderando 
    a lugares ainda maiores no futuro!\n`);

    pressioneEnter();
    console.log("FIM DE JOGO!");

    break;
  }

  console.log("\nO que deseja fazer ?");
  console.log(
    "\n[1]" + arrayPerguntasIniciais[0],
    "\n[2]" + arrayPerguntasIniciais[1],
    "\n[3]" + arrayPerguntasIniciais[2]
  );
  let atividade = prompt(": ");
  while (atividade !== "1" && atividade !== "2" && atividade !== "3") {
    console.log("Responda apenas com '1', '2' ou '3'! ");
    console.log("\nO que deseja fazer ?");
    atividade = prompt(": ");
    console.log(
      "\n[1]" + arrayPerguntasIniciais[0],
      "\n[2]" + arrayPerguntasIniciais[1],
      "\n[3]" + arrayPerguntasIniciais[2]
    );
  }
  if (atividade == "1") {
    console.log("Caçar.");
    cacar();
    personagem.exibirStatus();
    console.log("Pressione ENTER p/ prosseguir");
    pressioneEnter();
  } else if (atividade == "2") {
    console.log("Pescar .");
    pescar();
    personagem.exibirStatus();
    console.log("Pressione ENTER p/ prosseguir");
    pressioneEnter();
  } else if (atividade == "3") {
    console.log("Explorar.");
    explorar();
    personagem.exibirStatus();
    console.log("Pressione ENTER p/ prosseguir");
    pressioneEnter();
  }
 
}
