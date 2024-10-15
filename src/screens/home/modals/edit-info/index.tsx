import React from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import useEditInfo from "./index.hook";
import {IEditModal} from "../../../../interface";

import './styles.scss'

const EditInfo: React.FC<IEditModal> = (props) => {
    const {open, isDark = false, editChartId = null} = props
    const isEdit = editChartId !== null
    const {
        INPUT_LIST,
        handleSubmit,
        onSubmit,
        register,
        errors,
        closeHandler
    } = useEditInfo(props)

    return <Modal
        open={open}
        onClose={closeHandler}
        className={isDark ? 'is-dark' : ''}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box className={'form-container'}>

            <IconButton onClick={closeHandler} className={'float-button'}>
                <i className="fa-solid fa-circle-xmark"/>
            </IconButton>
            <h4>{isEdit ? 'Edit Chart' : 'Add Chart'}</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                {INPUT_LIST.map(item => {
                    const {label, placeHolder = '', required, name, isTextArea} = item
                    return <div className={'form-input'}>
                        <span>{label}{required && ' *'}</span>
                        {isTextArea ?
                            <textarea placeholder={placeHolder} {...register(name, {required})}/> :
                            <input placeholder={placeHolder} {...register(name, {required})}/>}
                        {!!errors && (
                            <InputError
                                label={label}
                                name={name}
                                errors={errors}
                            />
                        )}
                    </div>
                })}

                <div className={'form-button-section'}>
                    <Button variant="contained" size="small" type={'submit'}>{isEdit ? 'Save' : 'Add'}</Button>
                </div>
            </form>
        </Box>
    </Modal>
}

export default EditInfo


export const InputError = ({errors, label, name}: { errors: any, label: string, name: string }) => {
    return <div className={'input-error'}>
        {errors[name]?.type === 'required' && <div style={{color: 'red'}}>
            {`${label} is required.`}
        </div>}
    </div>
}
