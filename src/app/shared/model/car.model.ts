
export interface Car {
    brand: string;
    name: string;
    color: string;
    motor ?: Motor;
}

export enum Motor {
    ELECTRIC = 'ELECTRIC',
    DIESEL = 'DIESEL',
    PETROL = 'PETROL',
}
