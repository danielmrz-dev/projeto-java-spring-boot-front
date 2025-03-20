export interface IUserEdited {
    name?: string;
    account?: IAccountEdited;
    card?: ICardEdited;
    features?: IFeatureEdited[];
    news?: INewsEdited[];
}

export interface IAccountEdited {
    number?: string;
    agency?: string;
    balance?: number;
    limit?: number;
}

export interface ICardEdited {
    number?: string;
    limit?: number;
}

export interface IFeatureEdited {
    icon?: string;
    description?: string;
}

export interface INewsEdited {
    icon?: string;
    description?: string;
}
