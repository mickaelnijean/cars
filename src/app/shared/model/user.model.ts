import { Motor } from './car.model';

export interface User {
    name: string;
    preferences?: Preference;
}

export interface Preference {
    color?: string;
    motor?: Motor;
}

