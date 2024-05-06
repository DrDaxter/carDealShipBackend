// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {

    @MinLength(1)
    @IsString()
    name:string
}