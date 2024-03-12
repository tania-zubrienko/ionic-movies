import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
private baseUrl = "https://image.tmdb.org/t/p/"
  transform(url: string): string {

    return `${this.baseUrl}/w500/${url}`;
  }

}
