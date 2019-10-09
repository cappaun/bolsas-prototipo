import { Base } from './base.interface';

export interface DadosBancarios extends Base {
    banco?: string;
    agencia?: number;
    conta?: number;
}
