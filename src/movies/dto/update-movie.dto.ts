import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto'

// validation check
// ?-> 필수사항이 아니라는 표시
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}