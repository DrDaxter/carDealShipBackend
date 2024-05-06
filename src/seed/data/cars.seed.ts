import { v4 as uuid } from "uuid";
import { Car } from "src/cars/interfaces/car.interface";

export const CAR_SEED: Car[] = [
    {
        id: uuid(),
        model: "Toyota",
        brand: "Corolla"
    },
    {
        id: uuid(),
        model: "Honda",
        brand: "Civic"
    },
    {
        id: uuid(),
        model: "Toyota",
        brand: "Hilux"
    }
]