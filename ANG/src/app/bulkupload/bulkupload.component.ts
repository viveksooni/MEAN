import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkupload',
  templateUrl: './bulkupload.component.html',
  styleUrls: ['./bulkupload.component.css']
})
export class BulkuploadComponent implements OnInit {

  constructor(private http:HttpClient) { }

  
  selectfile:any;

  onFileChange(event:any) {
  
    console.log(event)
 
   this.selectfile= event.target.files[0]
    
  }

  bulkUpload()
  {
    const formData = new FormData();
    
    formData.append('file', this.selectfile)
  
    this.http.post("http://localhost:3000/api/product/bulk-add",formData).subscribe(()=>{
      console.log("Bulk upload succesfully");     
    })  
  }
  ngOnInit(): void {
  }
  
}
