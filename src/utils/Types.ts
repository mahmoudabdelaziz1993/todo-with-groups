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

export interface Igroup {
    createdAt: Date;
    name: string;
    description: string;
    id: string;
}

export interface Itask {
    createdAt?: Date;
    title: string;
    status: string;
    description?: string;
    group_id: number;
    id: string;
}
