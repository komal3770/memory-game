import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ImgObj } from './ImgObj';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'my-game';
  imgSrcArr : any[][];
  count:0;
  previousImg:ImgObj = { name:"", isDisabled:false, isHidden:false};
  score:number = 0;
  constructor(){

  }

  ngOnInit(){
    console.log("ngOninit");
    /*var imgArr = [[ {name:'img1.jpg', isHidden:true, isDisabled:false}, 'img1.jpg' ,'img2.png','img2.png'],['img3.jpg','img3.jpg','img4.jpg','img4.jpg'],
                  ['img5.jpg','img5.jpg','img6.png','img6.png'],['img7.png','img7.png','img8.jpg','img8.jpg']];
    */
   let imgArr = [
    [
      {name:'img1.jpg', isHidden:true, isDisabled:false}, {name:'img1.jpg', isHidden:true, isDisabled:false},{name:'img2.png', isHidden:true, isDisabled:false},{name:'img2.png', isHidden:true, isDisabled:false}
    ],
    [
      {name:'img3.jpg', isHidden:true, isDisabled:false}, {name:'img3.jpg', isHidden:true, isDisabled:false},{name:'img4.jpg', isHidden:true, isDisabled:false},{name:'img4.jpg', isHidden:true, isDisabled:false}
    ],
    [
      {name:'img6.png', isHidden:true, isDisabled:false}, {name:'img6.png', isHidden:true, isDisabled:false},{name:'img7.png', isHidden:true, isDisabled:false},{name:'img7.png', isHidden:true, isDisabled:false}
    ],
    [
      {name:'img8.jpg', isHidden:true, isDisabled:false}, {name:'img8.jpg', isHidden:true, isDisabled:false},{name:'img5.jpg', isHidden:true, isDisabled:false},{name:'img5.jpg', isHidden:true, isDisabled:false}
    ]
   ];
    this.fisherYates(imgArr);
    this.imgSrcArr = imgArr;
  }

  public fisherYates(myArray) : any {
    var k,j;
    for(var i = 0; i< myArray.length; i++) {
       k = myArray[i].length;
       while(k--){
            j = Math.floor(Math.random() * (myArray.length - 1));
            var tempk = myArray[i][k];
            var tempj = myArray[i][j];
            myArray[i][k] = tempj;
            myArray[i][j] = tempk;
       }
    }
  }

  clickDiv(img){
    img.isHidden = false;
    if(img.isDisabled){
      return;
    }
    if(this.previousImg!=null && this.previousImg.name == img.name){
      this.score=this.score+1;
      this.previousImg = null;
      this.imgSrcArr.filter(i => {
        i.filter(i2 =>{
          if(i2.name == img.name){
            i2.isDisabled = true;
            i2.isHidden = false;
          }
        });
      });
    }
    else{
      this.previousImg = img;
      setTimeout(() => {
        if(!img.isDisabled)
          img.isHidden = true;
      },2000);
    }
  }
  checkEnterAllowed(img){
    console.log("Mouse entered "+img.isDisabled+" -- "+img.isHidden);
    return img.isDisabled;
  }

}
