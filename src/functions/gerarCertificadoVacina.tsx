import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export default function gerarCertificadoVacina(data: any, pets: any) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle: any = [
    {
      text: "Certificado de Vacinação",
      fontSize: 20,
      alignment: "center",

      bold: true,
      margin: [0, 10, 0, 25],
    },
  ];

  const structure = data.map((vacina: any) => {
    return [
      { text: vacina.nome, fontSize: 10, margin: [20, 20, 20, 20] },
      { text: vacina.dataInicio, fontSize: 10, margin: [20, 20, 20, 20] },
      { text: vacina.dataFim, fontSize: 10, margin: [20, 20, 20, 20] },
      { text: vacina.atendeGenero, fontSize: 10, margin: [20, 20, 20, 20] },
      { text: vacina.fornecedor, fontSize: 10, margin: [20, 20, 20, 20] },
    ];
  });
  const details: any = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*"],
        body: [
          [
            {
              text: `Nome: ${pets.nome}`,
              fontSize: 12,
              margin: [0, 10, 0, 10],
            },
            {
              text: `Raça: ${pets.raca}`,

              fontSize: 12,
              margin: [0, 10, 0, 10],
            },
            {
              text: `Gênero: ${pets.genero}`,
              fontSize: 12,
              margin: [0, 5, 0, 5],
            },
          ],
          [
            {
              text: `Peso: 10 kg`,
              fontSize: 12,
              margin: [0, 5, 0, 5],
            },
            {
              text: `Idade: ${pets.idade} ano(s)`,
              fontSize: 12,
              margin: [0, 5, 0, 5],
            },
            {
              text: `Sexo: ${pets.sexo}`,
              fontSize: 12,
              margin: [0, 5, 0, 5],
            },
            {
              text: `Castrado?: ${pets.castrado}`,
              fontSize: 12,
              margin: [0, 5, 0, 5],
            },
          ],
        ],
      },
      layout: "noBorders",
      alignment: "center",
    },

    {
      text: `Histórico de vacinas`,
      fontSize: 14,
      bold: true,
      alignment: "left",
      margin: [0, 50, 0, 20],
    },

    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Nome",
              style: "tableHeader",
              fontSize: 12,
              margin: [0, 2, 0, 10],
            },
            {
              text: "Início campanha",
              style: "tableHeader",
              fontSize: 12,
              margin: [0, 2, 0, 10],
            },
            {
              text: "Fim campanha",
              style: "tableHeader",
              fontSize: 12,
              margin: [0, 2, 0, 10],
            },
            {
              text: "Atende gênero",
              style: "tableHeader",
              fontSize: 12,
              margin: [0, 2, 0, 10],
            },
            {
              text: "Fornecedor",
              style: "tableHeader",
              fontSize: 12,
              margin: [0, 2, 0, 10],
            },
          ],
          ...structure,
        ],
      },
      layout: "headerLineOnly",
    },
  ];

  function rodape(currentPage: any, pageCount: any) {
    return [
      {
        text: currentPage + "/" + pageCount,
        alignment: "right",
        fontSize: 9,
        bold: false,
        margin: [0, 10, 20, 0],
      },
    ];
  }

  const docDefinitions: any = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40], //l,t,r,b

    header: [reportTitle],
    content: [details],
    footer: rodape,
  };

  pdfMake
    .createPdf(docDefinitions)
    .download(`CertificadoVacina${pets.nome.toUpperCase()}.pdf`);
}
