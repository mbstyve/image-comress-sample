import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.scss']
})
export class ImageCompressComponent implements OnInit {

  constructor(private imageCompress: NgxImageCompressService) { }
  file: any;
  imageDataEvent: any;
  localUrl: any;
  localCompressedURl:any;
  isFlip: boolean = false;
  sizeOfOriginalImage: number = 0;
  sizeOFCompressedImage: number = 0;



  public selectFile(event: any) {
    console.log(event.target.files);
    
    
    if (event.target.files && event.target.files[0]) {
      var  fileName : any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    const orgFileSize = this.file['size']/(1024*1024);
    console.log("orgFileSize :",orgFileSize);
    console.log("uploaded file:", this.file);
    
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        if(orgFileSize > 10) {
          this.compressFile(this.localUrl,fileName)
        } else {
          this.uploadFile(this.localUrl);
        }        
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    
  }


  imgResultBeforeCompress:string = '';
  imgResultAfterCompress:string = '';

  public compressFile(image: string,fileName: any) {
    var orientation = -1;
    this.sizeOfOriginalImage = this.imageCompress.byteCount(image)/(1024*1024);
      console.warn('Size in bytes is now:',  this.sizeOfOriginalImage);
      
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;
          this.localCompressedURl = result;
          this.sizeOFCompressedImage = this.imageCompress.byteCount(result)/(1024*1024)
          console.warn('Size in bytes after compression:',  this.sizeOFCompressedImage);
          this.uploadFile(result);
        }
      );
    
  }

uploadFile(image: any) {
  // service call to upload image
  console.log(image);
}


  ngOnInit() {
  }

}
