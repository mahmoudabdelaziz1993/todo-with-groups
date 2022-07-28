export interface ILoginRes {
    data: IData;
}

export interface IData {
    token: string;
    employee: Employee;
    message?: string | undefined,
}

export interface Employee {
    id: number;
    name: string;
    email: string;
}
export interface ILoginBody {
    email: string;
    password: string;
}
export interface Ierror {
    message: string | undefined,
    token?: string;
    employee?: Employee;
}