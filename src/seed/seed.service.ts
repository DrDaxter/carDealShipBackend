import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CAR_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandsService: BrandsService
  ){}
  populateDb(){
    this.carsService.fillCarWithSeedData(CAR_SEED);
    this.brandsService.fillCarWithSeedData(BRAND_SEED);
    return "SEED executed";
  }
}
