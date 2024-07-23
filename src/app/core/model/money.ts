export class Money {
  constructor() {

  }
  "@odata.context": string
  value: Value[] = []
}
 export interface Value {
  cotacaoCompra: number
  cotacaoVenda: number
  dataHoraCotacao: string

}
