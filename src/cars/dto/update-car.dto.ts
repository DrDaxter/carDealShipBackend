import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: 'brand most be a valid brand'})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    //@MinLength(3)
    readonly model?: string;
}