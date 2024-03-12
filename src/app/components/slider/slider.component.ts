import { Component, Input} from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent{
  swiperModules = [IonicSlides];
  @Input()
  movies: Movie[] = []

  @Input()
  numSlides : number = 4
}


