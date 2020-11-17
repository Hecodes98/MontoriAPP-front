import React from 'react'
import { createPortal } from 'react-dom'

import { Modalbck } from './styles'

const modalRoot = document.getElementById('modal')

export const Modal = ({children,open}) => (
    createPortal(
        <Modalbck open={open}>
            {children}
        </Modalbck>, 
        modalRoot
    )
)