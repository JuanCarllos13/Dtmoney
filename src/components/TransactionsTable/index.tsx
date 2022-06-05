import { useContext } from "react";
import { useTransaction } from "../../Hooks/useTransaction";

import { Container } from "./styles";

export function TransactionsTable() {
  const {transactions} = useTransaction()
  // console.log('transactions', transactions)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transacation => (
            <tr key={transacation.id}>
              <td>{transacation.title}</td>
              <td className={transacation.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transacation.amount)}
                </td>
              <td>{transacation.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transacation.createdAt))}
                </td>
            </tr>

          ))}
        </tbody>

      </table>
    </Container>
  )
}