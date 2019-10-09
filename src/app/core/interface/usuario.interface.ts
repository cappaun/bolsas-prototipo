import { Base } from './base.interface';

export interface Usuario extends Base {
    nome?: string;
    cpf?: string;
    matricula?: string;
    email?: string;
    telefone?: string;
}
