import axios from "axios";
export const api = async (url: string, body = {}) => {
    const config: any = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW'
        },
    };

    try {
        const { data }: any = await axios.post(url, body, config);

        return data;
    } catch (error) {
        console.log(error);
    }
};