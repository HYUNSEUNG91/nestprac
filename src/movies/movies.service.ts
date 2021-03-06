import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        console.log('id :', id)
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`); //NEST에서 제공하는 ERROR
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id);
        return true;
    }

    // CreateMovieDto -> validation check
    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length +1,
            ...movieData, // ...은 뭐지..
        });
    }

    update(id:number, updateData: UpdateMovieDto){
        const movie = this.getOne(id)
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData })
    }
}
