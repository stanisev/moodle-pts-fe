import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-uploader-component',
  templateUrl: './uploader-component.component.html',
  styleUrls: ['./uploader-component.component.css']
})
export class UploaderComponentComponent implements OnInit {

  public data: [][];
  public averageMarkOnButton = 0;

  private averageMark = 0;
  private arrayLength = 0;
  private arrayLengthOneDimension = 0;

  public totalSix = 0;
  public totalFive = 0;
  public totalFourth = 0;
  public totalThree = 0;
  public totalTwo = 0;

  public time = '2/03/21, 14:12';
  public eventContext = 'Course: Semantic Web';
  public component = 'System';
  public eventName = 'Course viewed';
  public description = 'The user with id 8429 viewed the course with id 130.'

  afuConfig = {
      multiple: false,
      formatsAllowed: ".xlsx, .rar, .zip, .7z",
      maxSize: "5",
      uploadAPI:  {
            url:"http://localhost:8080/upload",
            method:"POST",
            headers: {
                 "Content-Type" : "multipart/form-data",
                 "Access-Control-Allow-Origin" : "*",
                  },
            responseType: 'blob',
          },
      theme: "dragNDrop",
      hideProgressBar: false,
      hideResetBtn: false,
      hideSelectBtn: true,
      fileNameIndex: true,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag and Drop your files here',
        attachPinBtn: 'Attach Files...',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
  };

  constructor() {
  }

  ngOnInit() {

  }

   onFileChange(evt: any) {
      const target : DataTransfer =  <DataTransfer>(evt.target);

      if (target.files.length !== 1) throw new Error('Cannot use multiple files');

      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const bstr: string = e.target.result;

        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        const wsname : string = wb.SheetNames[0];

        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

        for(let i = 0; i < this.data.length; i++) {
          for(let j = 1; j < this.data[i].length; j++) {

           this.arrayLength += Number(this.data[1][j]);
            console.log(this.data[1][j]);
           if(Number(this.data[1][j]==6)) {
           this.totalSix++;
           }
           if(Number(this.data[1][j]==5)) {
           this.totalFive++;
           }
           if(Number(this.data[1][j]==4)) {
           this.totalFourth++;
           }
           if(Number(this.data[1][j]==3)) {
           this.totalThree++;
           }
           if(Number(this.data[1][j]==2)) {
            this.totalTwo++;
            }
          }
        }

        this.arrayLengthOneDimension = this.data.length;
        this.averageMark = this.arrayLength/this.arrayLengthOneDimension;


        let x = this.data.slice(1);

      };

      reader.readAsBinaryString(target.files[0]);

    }


   public calculateAverage() {
   this.averageMarkOnButton = this.averageMark;
   }
}
