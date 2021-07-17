export default function handler(req, res) {
  res.status(200).json([
    {
      title: "O Guia do Mochileiro das Galáxias",
      author: "Douglas Adams",
      price: 18.71,
      image: "",
      description:
        "Mestre da sátira, Douglas Adams cria personagens inesquecíveis e situações mirabolantes para debochar da burocracia, dos políticos, da 'alta cultura' e de diversas instituições atuais. Seu livro, que trata em última instância da busca do sentido da vida, não só diverte como também faz pensar.",
      highlight: true,
      rate: "4.9",
    },
    {
      title: "O Sol É Para Todos",
      author: "Harper Lee",
      price: 38.61,
      image: "",
      description:
        "O sol é para todos conta a história de um advogado branco que defende um homem negro acusado de estuprar uma mulher branca nos Estados Unidos dos anos 1930 e enfrenta represálias da comunidade racista. O livro é narrado pela sensível Scout, filha do advogado e ainda criança na época. Uma história atemporal sobre tolerância, perda da inocência e conceito de justiça.",
      highlight: true,
      rate: "4.8",
    },
    {
      title: "Clara dos Anjos",
      author: "Lima Barreto",
      price: 23.9,
      image: "",
      description:
        "Tendo como pano de fundo a vida nos subúrbios cariocas, Clara dos Anjos, concluído em 1922 e publicado em livro, pela primeira vez, em 1948, retrata a realidade brasileira do início do século XX e é uma denúncia contundente – com foco na discriminação da mulher negra e pobre que era seduzida e abandonada – da desigualdade social, do preconceito racial, da divisão de classes que ainda hoje, quase um século depois, ocorrem no Brasil.",
      highlight: true,
      rate: "5.0",
    },
    {
      title: "Vidas Secas",
      author: "Graciliano Ramos",
      price: 28.49,
      image: "",
      description:
        "Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos, que não têm nome, sendo chamados apenas de “filho mais velho” e “filho mais novo”. São também acompanhados pela cachorrinha da família, Baleia, cujo nome é irônico, pois a falta de comida a fez muito magra.Vidas secas pertence à segunda fase modernista da literatura brasileira, conhecida como “regionalista” ou “romance de 30”.",
      highlight: false,
      rate: "4.7",
    },
    {
      title: "Vale Tudo: O Som e a Fúria de Tim Maia",
      author: "Nelson Motta",
      price: 1.5,
      image: "",
      description:
        "A biografia é uma viagem pela vida do cantor, a começar pela infância e juventude, no bairro carioca da Tijuca. É o próprio Tim quem dá o tom bem-humorado da narrativa: 'No dia 28 de setembro de 1942, na rua Afonso Pena 24, minha mãe, Maria Imaculada, concebeu o gordinho mais simpático da Tijuca. E recebi o nome de Sebastião Rodrigues Maia'.",
      highlight: false,
      rate: "4.5",
    },
    // {
    //   title: "O Grande Gatsby",
    //   author: "Franz Fitzgerald",
    //   price: 1.5,
    //   image: "",
    //   description: "",
    //   highlight: false,
    //   rate: "4.7",
    // },
    // {
    //   title: "Eu Sou O Mensageiro",
    //   author: "Marcus Zusak",
    //   price: 1.5,
    //   image: "",
    //   description: "",
    //   highlight: true,
    //   rate: "4.8",
    // },
    // {
    //   title: "Quarto de Despejo",
    //   author: "Carolina de Jesus",
    //   price: 1.5,
    //   image: "",
    //   description: "",
    //   highlight: false,
    //   rate: "5.0",
    // },
    // {
    //   title: "Quadros de Guerra",
    //   author: "Judith Butler",
    //   price: 1.5,
    //   image: "",
    //   description: "",
    //   highlight: false,
    //   rate: "4.7",
    // },
    // {
    //   title: "O Genocídio do Negro Brasileiro",
    //   author: "Abdias Nascimentos",
    //   price: 1.5,
    //   image: "",
    //   description: "",
    //   highlight: true,
    //   rate: "5.0",
    // },
  ]);
}
