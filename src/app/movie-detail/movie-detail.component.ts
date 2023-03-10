import { Component , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
 @Input() movie : Movie | undefined;

 constructor(
  private movieService:MovieService,
  private route:ActivatedRoute){
  }

  ngOnInit(){
    this.getMovie();
  }

  getMovie():void{
    const id =Number(this.route.snapshot.paramMap.get('id')) ;
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie );
  }

}
