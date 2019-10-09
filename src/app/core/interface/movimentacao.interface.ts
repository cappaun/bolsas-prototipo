import { Base } from './base.interface';
import { Bolsa } from './bolsa.interface';

export interface Movimentacao extends Base {
    bolsaAtual?: Bolsa;
    bolsaAnterior?: Bolsa;
    trocasRealizas?: string;
}
