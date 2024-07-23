import {environment} from '../../environments/environment';

export abstract class ConfigAPI {
    private static readonly URL_BASE = environment.apiUrl;

    public static readonly LOGIN = ConfigAPI.URL_BASE.concat('login');
    public static readonly PRODUCT = ConfigAPI.URL_BASE.concat('product');
    public static readonly CATEGORY = ConfigAPI.URL_BASE.concat('category');
    
    public static readonly EXCHANGE = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)";

}
