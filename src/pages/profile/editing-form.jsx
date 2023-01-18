import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ModalWrapper from "../../components/modal-wrapper";
import {database} from "../../firebase";
import {doc, updateDoc} from "firebase/firestore";

export const EditingInfoForm = ({name, phone, email, address, toggleEditingForm}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    console.log(user)
    const [form, setForm] = useState({
        name,
        phone,
        email,
        address
    })

    const onChangeField = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const editForm = async (e) => {
        e.preventDefault();

        try {
            const userDataRef = doc(database, 'users', user.id)
            await updateDoc(userDataRef, {
                name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address
            })

        } catch (e) {
            console.log(e)
        }

        toggleEditingForm();
        setForm({
            name: '',
            phone: '',
            email: '',
            address: ''
        })
    }

    return (
        <ModalWrapper>
            <form className="editing-form" onSubmit={editForm}>
                <input type="text" value={form.name} onChange={onChangeField} name="name"/>
                <input type="text" value={form.phone} onChange={onChangeField} name="phone"/>
                <input type="email" value={form.email} onChange={onChangeField} name="email"/>
                <input type="text" value={form.address} onChange={onChangeField} name="address"/>
                <button>Submit</button>
            </form>
            <button onClick={toggleEditingForm}>Close Form</button>
        </ModalWrapper>
    )
}