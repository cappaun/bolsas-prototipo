import { Base } from './base.interface';
import { Agencia } from './agencia.interface';

export interface TipoBolsa extends Base {
    agencia?: Agencia;
    programa?: string;
    nivel?: string;
    modalidade?: string;
}
