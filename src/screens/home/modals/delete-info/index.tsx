import React from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";

import useDeleteInfo from "./index.hook";
import {IDeleteModal} from "../../../../interface";

import './styles.scss'

const DeleteInfo: React.FC<IDeleteModal> = (props) => {
    const {isDark = false, data} = props
    const {chartTitle} = data

    const {
        close,
        deleteAction
    } = useDeleteInfo(props)

    return <Modal
        open={!!data}
        onClose={close}
        className={isDark ? 'is-dark' : ''}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box className={'form-container-delete'}>
            <IconButton onClick={close} className={'float-button'}>
                <i className="fa-solid fa-circle-xmark"/>
            </IconButton>
            <h4>{'Delete Chart'}</h4>
            <br/>
            <p>{`Are you sure you want to delete ${chartTitle} chart?`}</p>
            <br/>
            <div className={'form-button-section'}>
                <Button variant="contained" size="small" onClick={deleteAction}>{'Delete'}</Button>
                <Button variant="outlined" size="small" onClick={close}>{'Cancel'}</Button>
            </div>
        </Box>
    </Modal>
}

export default DeleteInfo
