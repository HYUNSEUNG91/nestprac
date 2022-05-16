import { IsNumber, IsOptional, IsString } from "class-validator";

// validation check
export class CreateMovieDto{
    @IsString()
    readonly title : string;

    @IsNumber()
    readonly year : number;

    @IsOptional()
    @IsString({each: true})
    readonly genres : string[];
}