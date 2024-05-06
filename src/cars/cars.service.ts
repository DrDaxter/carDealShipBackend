import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto,UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id:uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id:uuid(),
        //     brand: 'Honda',
        //     model: 'Civic'
        // },
        // {
        //     id:uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee'
        // },
    ]

    findAll(){
        return this.cars;
    }

    findCarById(id:string){
        const car = this.cars.find(item => item.id === id);
        
        if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
    }

    create(createCarDto: CreateCarDto){
        const newCar:Car = {
            id: uuid(),
            ...createCarDto
        };
        this.cars.push(newCar);

        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto){

        let carDb = this.findCarById(id);

        this.cars = this.cars.map(item => {
            if(item.id === id){
                carDb = {
                    ...carDb,
                    ...updateCarDto,
                    id
                }
                return carDb
            }
        });

        return carDb;
    }

    delete(id:string){
        const cardDb = this.findCarById(id);

        this.cars = this.cars.filter(item => item.id !== id);

        return {
            message: "Car deleted successfuly"
        }
    }

    fillCarWithSeedData(cars: Car[]){
        this.cars = cars
    }
}
