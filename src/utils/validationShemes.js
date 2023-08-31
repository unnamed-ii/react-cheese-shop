import * as yup from "yup";

export const authorizationFormSchema = yup.object({
    email: yup
        .string()
        .email("Неправильный формат")
        .required("Это поле обязательно*"),
    password: yup
        .string()
        .min(8, "Пароль должен состоять минимум из 8 символов")
        .max(16, "Пароль не должен содержать более 16 символов"),
});

export const registrationFormSchema = yup.object({
    fullName: yup
        .string()
        .required("Это поле обязательно*"),
    email: yup
        .string()
        .email("Неправильный формат")
        .required("Это поле обязательно*"),
    password: yup
        .string()
        .min(8, "Пароль должен состоять минимум из 8 символов")
        .max(16, "Пароль не должен содержать более 16 символов"),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должный совпадать")
        .required("Это поле обязательно*"),
});