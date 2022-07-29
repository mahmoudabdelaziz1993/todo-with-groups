import { ILoginBody, Itask } from "./Types"

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

export const logOut = () => {
    localStorage.removeItem("UserDTA");
    localStorage.removeItem("UserTkn")
    window.location.reload()

}

export const getAllGroups = async () => {
    const res = await fetch("https://62df172a9c47ff309e8159dc.mockapi.io/group")
    const data = await res.json()
    return data
}

export const getAllTasks = async () => {
    const res = await fetch("https://62df172a9c47ff309e8159dc.mockapi.io/tasks")
    const data = await res.json()
    return data
}


export const addNewGroup = async (name: string) => {
    const res = await fetch("https://62df172a9c47ff309e8159dc.mockapi.io/group", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    })
    const data = await res.json()
    return data

}

export const addNewTask = async (params: Itask) => {
    const res = await fetch("https://62df172a9c47ff309e8159dc.mockapi.io/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
    const data = res.json()
    return data
}

export const editTaskStatus = async (status: string, id: string) => {
    const res = await fetch(`https://62df172a9c47ff309e8159dc.mockapi.io/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: status })
    })
    const data = res.json()
    return data
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
