export class ResourceUtil {
    /* Converte uma lista em JSON para uma lista de <T> */
    static convertList<T>(data: any): T[] {
      const response = data.map(item => item as T);
      return response;
    }
  
    /*
    Converte um object genérico ({key:value,..}) em parametro de busca para url (string)
    Exemplo:
      { a: 1, b: teste }
      Resultado: "?a=1&b=teste"
    */
    static toQueryString(queryOptions: object): any {
      if (queryOptions) {
        return '?' + Object
                .keys(queryOptions)
                .map(key => {
                  return `${encodeURIComponent(key)}=${encodeURIComponent(queryOptions[key])}`;
                })
                .join('&');
      }
      return '';
    }
  }
  