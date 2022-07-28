import { ILoginBody } from "./Types"

export const login = async (data: ILoginBody) => {
    if (data.email === "user@test.com" && data.password === "password") {
        return {
            "token": "18|KshizrhxUWeTFkmmKK5B7N6pvzxnUaAIrqTCauPH",
            "employee": {
                "id": 2,
                "name": "Maxine Kuphal",
                "email": "user@test.com"
            }
        }
    } else {
        return {
            "message": " email or passwored incorrect !"
        }
    }
}

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //     "email": "user@test.com",
    //     "password": "password"
    // });



    // fetch("https://todo-api.jbz.la/api/login", {
    //     mode: 'no-cors',
    //     method: 'POST',
    //     headers: {
    //         "Access-Control-Allow-Origin": "https://localhost:3000",
    //         "Access-Control-Allow-Headers": 'Content-Type',
    //         "Content-Type": "application/json",
    //         "Content-Length": "0",
    //         "Access-Control-Allow-Methods": "*",
    //         "X-Requested-With": 'XMLHttpRequest',
    //         "Accept": "/",
    //     },
    //     body: raw,

    // })
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
