export interface IUser {
    name: string;
    account: IAccount;
    card: ICard;
    features: IFeature[];
    news: INews[];
}

export interface IAccount {
    number: string;
    agency: string;
    balance: number;
    limit: number;
}

export interface ICard {
    number: string;
    limit: number;
}

export interface IFeature {
    icon: string;
    description: string;
}

export interface INews {
    icon: string;
    description: string;
}
