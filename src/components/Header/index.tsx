import React, { useState } from "react";
import LogoImg from '../../assets/logo.svg'
import Modal from 'react-modal'
import { Container, Content } from './styles'

interface HeaderProps {
  OnOpenNewTransactionModal: () => void
}

export function Header({OnOpenNewTransactionModal} : HeaderProps) {
 

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='dt Money' />
        <button type="button" onClick={OnOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}