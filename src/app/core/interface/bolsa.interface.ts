import { Base } from './base.interface';
import { TipoBolsa } from './tipo-bolsa.interface';

export interface Bolsa extends Base {
    situacao?: string;
    tipoBolsa?: TipoBolsa;
    centroDeCusto?: string;
}
