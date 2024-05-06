import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brand: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime()
    // }
  ]

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand:Brand = {
      id: uuid(),
      name: name,
      createdAt: new Date().getTime()
    }

    this.brand.push(brand);
    return brand;
  }

  findAll() {
    return this.brand;
  }

  findOne(id: string) {
    const brand = this.brand.find(item => item.id === id);
    
    if(!brand) throw new NotFoundException(`Brand with id ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    this.brand = this.brand.map(item => {
      if(item.id === id){
        brandDb.updatedAt = new Date().getTime();
        brandDb = {
          ...brandDb,
          ...updateBrandDto
        }
        return brandDb;
      }
      return item;
    });

    return this.brand;
  }

  remove(id: string) {
    this.brand = this.brand.filter(item => item.id !== id)
  }

  fillCarWithSeedData(brands: Brand[]){
    this.brand = brands
}
}
