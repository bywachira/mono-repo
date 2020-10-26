interface IInitialState {
    isLoading: boolean;
    user: IUser;
    token: string;
}

interface IUser {
    _id: string;
    name: string;
    email: string;
    uid: string;
    photo_url: string;
}

interface IAction {
    type: string,
    payload?: any
}