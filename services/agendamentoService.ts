import axios from 'axios'
import type Agendamento from '../interfaces/Agendamento'

//// URL base da API — não altere este valor
const API_URL = 'http://localhost:3000'

const http = axios.create({
  baseURL: API_URL
})

//// TODO [CRITÉRIO 8]:
// Implemente a função "listarAgendamentos".
// Ela deve fazer uma requisição GET à API (/agendamentos) e retornar a lista de agendamentos.
export async function listarAgendamentos() {
  const response = await http.get<Agendamento[]>('/agendamentos')
  return response.data
}

//// TODO [CRITÉRIO 9]:
// Implemente a função "buscarAgendamentoPorId".
// Ela recebe um "id" do tipo number e deve fazer uma requisição GET à API (/agendamentos/id)
// e deve retornar um único agendamento.
export async function buscarAgendamentoPorId(id: number) {
  const response = await http.get<Agendamento>(`/agendamentos/${id}`)
  return response.data
}

//// TODO [CRITÉRIO 10]:
// Implemente a função "criarAgendamento".
// Ela recebe os dados do novo agendamento (sem o id, pois a API gera automaticamente)
// e deve fazer uma requisição POST à API (/agendamentos).
// O tipo "Omit<Agendamento, 'id'>" significa: todos os campos de Agendamento, exceto o "id".
export async function criarAgendamento(dados: Omit<Agendamento, 'id'>) {
  const response = await http.post<Agendamento>('/agendamentos', dados)
  return response.data
}