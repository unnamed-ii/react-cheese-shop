import React, {useEffect, useState} from "react";
import {database} from "../../firebase";
import ModalWrapper from "../../components/modal-wrapper";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {refreshPage} from "../../utils/refreshPage";
import {ReactComponent as CloseIcon} from "../../images/icons/close-moduls-btn.svg";

export const EditingInfoForm = ({toggleEditingForm}) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [form, setForm] = useState({
        name: userInfo.userData.name,
        phone: userInfo.userData.phone,
        email: userInfo.userData.email,
        address: userInfo.userData.address,
        id: userInfo.id
    })

    const onChangeField = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(async () => {
        try {
            const userRef = doc(database, 'users', userInfo.id);
            const userSnap = await getDoc(userRef);
            console.log('EditingInfoForm =>', userSnap.data());
        } catch (e) {
            console.log(e)
        }
    },[])

    const editForm = async (e) => {
        e.preventDefault();
        try {
            const userDataRef = doc(database, 'users', userInfo.id);
            await updateDoc(userDataRef, {
                name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address,
            })
            refreshPage();
        } catch (e) {
            console.log(e)
        }
        toggleEditingForm();
        setForm({
            name: '',
            phone: '',
            email: '',
            address: '',
            id: ''
        });
    }

    return (
        <ModalWrapper>
            <div className="editing-form">
                <h1>Редактирование</h1>
                <form onSubmit={editForm}>
                    <input type="text" value={form.name} onChange={onChangeField} name="name"/>
                    <input type="text" value={form.phone} onChange={onChangeField} name="phone"/>
                    <input type="email" value={form.email} onChange={onChangeField} name="email"/>
                    <input type="text" value={form.address} onChange={onChangeField} name="address"/>
                    <button>Submit</button>
                </form>
                <button className="editing-form__close" onClick={toggleEditingForm}><CloseIcon /></button>
            </div>
        </ModalWrapper>
    )
}