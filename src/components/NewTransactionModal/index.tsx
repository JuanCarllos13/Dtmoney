import React, { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { useTransaction } from '../../Hooks/useTransaction';



interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const {createTransactions} = useTransaction()
  const [title, setTitle] = useState("")
  const [amount, SetAmount] = useState(0)
  const [category, setCategory] = useState("")
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransction(event : FormEvent){
    event.preventDefault()
     await createTransactions({
      title,
      amount,
      category,
      type
    })
    setTitle('')
    SetAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'

    >
      <button type='button' onClick={onRequestClose} className={'react-modal-close'}>
        <img src={closeImg} alt={'Fechar Modal'} />
      </button>

      <Container onSubmit={handleCreateNewTransction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(e=> SetAmount(Number(e.target.value)))}
        />
         <TransactionTypeContainer>
           <RadioBox
           type='button'
           onClick={() => {setType('deposit')}}
           isActive= {type === 'deposit'}
           activeColor='green'
           >
             <img src={incomeImg} alt='Entrada'/>
             <span>Entrada</span>
           </RadioBox>

           <RadioBox
           type='button'
           onClick={() => {setType('withdraw')}}
           isActive= {type === 'withdraw'}
           activeColor='red'
           >
             <img src={outcomeImg} alt='Saída'/>
             <span>Saída</span>
           </RadioBox>

         </TransactionTypeContainer>

        <input
          placeholder='Categorias'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type='submit'> Cadastrar</button>

      </Container>


    </Modal>
  )
}