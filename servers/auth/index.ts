import axios from "axios";

export async function signUpHandler(data: any) {
    const response = await axios.post(
        "https://sagrw1.pythonanywhere.com/api/auth/sign_up",
        data
    );
    return response.data;
}

export async function loginHandler(data: any) {
    const response = await axios.post(
        "https://sagrw1.pythonanywhere.com/api/auth/login",
        data
    );
    return response.data;
}

export async function confirmHandler({ data, emailFromUrl }: any) {
    const response = await axios.post(
        "https://sagrw1.pythonanywhere.com/api/auth/verification_email",
        {
            email: emailFromUrl,
            code: data.code
        }
    );
    return response.data;
}