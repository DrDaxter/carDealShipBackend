import { IsString, MinLength } from "class-validator";

export class CreateCarDto{

    @IsString({message: 'brand most be a valid brand'})
    readonly brand: string;

    @IsString()
    //@MinLength(3)
    readonly model: string;
}