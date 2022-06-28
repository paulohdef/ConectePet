export interface Tutores {
    id: string;
    nome: string;
    email: string;
    celular: string;
    dataNascimento: string;
    cep: string;
    
}

export interface Vacinas {
    id: string;
    nome: string;
    dataInicio: string;
    dataFim: string;
    fornecedor: string;
    atendeGenero: string;
}

export interface Hospedagem { 
    id: number 
    id_requerimento: number
    hotel_hospedagem: string
    data_entrada: Date
    data_saida: Date
    tipo_tratamento: string 
  }  
