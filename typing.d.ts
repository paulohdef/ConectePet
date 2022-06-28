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