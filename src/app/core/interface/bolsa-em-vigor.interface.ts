import { Base } from './base.interface';
import { Usuario } from './usuario.interface';

export interface BolsaEmVigor extends Base {
    situacao?: string;
    inicio?: Date;
    termino?: Date;
    observacao?: string;
    parcelasPagas?: string;
    linhaPesquisa?: string;
    orientador?: Usuario;
}
