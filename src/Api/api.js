import * as axios from "axios";

const baseURL = 'https://v1.nocodeapi.com/nadai/google_sheets/FFlXEmkjbOMchCjz?tabId=sheet1&api_key=GHCmpNtnTEhcSbDjA';

const tgToken = "1277105148:AAFhnqIm9SKeNy6Ygv-_NlXxTmwhSQwTgJo"
const chatId = "-1001430648003"
const tgUrl = "https://api.telegram.org/bot" + tgToken + "/sendMessage"

export const googleApi = {
    saveDataToGoogleSheet(formData){
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;
        let job = formData.job;
        let url = formData.url;

        // @ts-ignore
        return axios.post(baseURL, JSON.stringify([[name, phone, email, job, url]]), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data);
    }
}

export const tgApi = {
    saveDataToTelegramBot(formData){
        let message = "<strong>Новая заявка!</strong>\n<strong>Лендинг:</strong> brand.profi-space.com / обычный\n<strong>Имя:</strong> " + formData.name +  "\n<strong>Телефон:</strong> " + formData.phone + "\n<strong>Email:</strong> " + formData.email + "\n<strong>Род деятельности:</strong> " + formData.job + "\n<strong>Почему решили пройти курс:</strong> " + formData.why;
        const data = {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }
        // @ts-ignore
        return axios.post(tgUrl, data)
        .then(response => response.data)
    }
}