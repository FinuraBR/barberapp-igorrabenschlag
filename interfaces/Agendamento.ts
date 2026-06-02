//// TODO [CRITÉRIO 2]:
// Defina aqui a interface "Agendamento" com todos os campos da entidade.
// Use os tipos corretos para cada campo.
// Lembre-se: o campo "status" só pode ter três valores possíveis:
// 'confirmado', 'pendente' ou 'cancelado'.
// Consulte o README para ver todos os campos e seus tipos.

export default interface Agendamento {
  id: number
  clienteNome: string
  servico: string
  data: string
  hora: string
  barbeiro: string
  status: 'confirmado' | 'pendente' | 'cancelado'
}