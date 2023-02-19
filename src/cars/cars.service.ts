import { Injectable } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Fiat',
      model: 'Cronos',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    //if(updateCarDto.id && updateCarDto.id !== id){
    // throw new BadRequestException()
    //}
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return carDB;
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.findOneById(id);

    if (!carDB) {
      console.log('no existe');
    }

    this.cars = this.cars.filter((car) => car.id !== id);
    return;
  }
}
