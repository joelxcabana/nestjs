import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService : CarsService,
    private readonly brandService: BrandsService
  ){

  }

  runSeed() {
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandService.fillBransWithSeedData(BRANDS_SEED)
   
   return 'seed execute succefully'
  }
}
