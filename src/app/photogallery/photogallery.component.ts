import { Component } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent {

  galleryImages:string[] = ["../../assets/images/pexels-abie-zerosix-1748863.jpg",
  "../../assets/images/pexels-abie-zerosix-1748865.jpg",
  "../../assets/images/pexels-caleb-oquendo-3038129.jpg",
  "../../assets/images/pexels-kshkt-kttk-887853.jpg",
  "../../assets/images/cakepop.jpg",
  "../../assets/images/cupcake-2749204_1280.jpg",
  "../../assets/images/customCakeStock.jpg",
  "../../assets/images/weddingCakeStock.jpg",]


}
