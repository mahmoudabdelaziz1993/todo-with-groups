export interface ILoginRes {
    data: Data;
}

export interface Data {
    token: string;
    employee: Employee;
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
