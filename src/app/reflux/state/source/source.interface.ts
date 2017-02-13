export interface ISource {
    id: string;
    type: string;
    customer: string;
}

export interface ISourceRedux {
    byId: { [key: string]: ISource };
    allIds: Array<string>;
}

export interface ICard extends ISource {
    brand: string;
    cvcCheck: string;
    last4: string;
    funding: string;
    expirationMonth: number;
    expirationYear: number;
}