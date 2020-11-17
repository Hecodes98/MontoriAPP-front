import React from 'react'

import {Modal, AvatarWrapper, Image, Close} from './styles'

export const ChangePhoto = ({close, image}) => (
    <Modal>
        <Close onClick={close}>X</Close>

        <AvatarWrapper>
            <Image src={image} alt="Profile Photo"/>
        </AvatarWrapper>

        <form>
            <label for="img">Select image:</label>
            <input placeholder="Archivo" type="file" id="img" name="img" accept="image/*" />
            <input type="submit" />
        </form>
    </Modal>
)