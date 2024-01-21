import axiosClient from '../axiosClient';

export async function getAllData() {
    const response = await axiosClient.get(
     "https://sagrw1.pythonanywhere.com/api/readify/get_by_category",
    );
    return response.data;
}