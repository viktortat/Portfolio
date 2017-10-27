import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { Technology } from '../../../shared/models/technology';
import {Employee } from '../../../shared/models/employee';
import { ProjectService } from '../project.service';
import { DataService } from '../../../core/data.service';

import {Message} from 'primeng/components/common/api';



@Component({
  selector: 'new-project',
  templateUrl: './new-project.component.html',
  styleUrls:  [
      './new-project.component.less'],
  animations: []
})
export class NewProjectComponent {

    @Input() model:Project=new Project();
    
    //initial employee list
    employees;
    initialEmployees:Array<Employee>=new Array<Employee>();
    //initial tech list
    technologies;
    initialTechnologies:Array<Technology>=new Array<Technology>();

    msgs: Message[] = [];
    dateValue:Date;

    private lines:Array<string>;
    private domains:Array<string>;
    
    constructor(private dataService:ProjectService,private service:DataService) {
        
    }

    ngOnInit(){

        this.dataService.getConstants().subscribe(res=>{
            this.lines=res.lines;
            this.domains=res.domains;

            
        },error=>{
            console.log(error);
        })

        this.service.getEmployees().subscribe(res=>{
            console.log((res[0]));
        })

        this.model.line='grey'; 
        this.technologies=this.dataService.technologies;
        this.initialTechnologies=this.technologies;
       

        
    }
    


      filterTechnologies(event){
          
        this.technologies=this.initialTechnologies;
        this.technologies=this.technologies.filter(item=>item.name.toLowerCase().indexOf(event.toLowerCase())!=-1);
      }

      selectTechnology(event){
          let tech=this.initialTechnologies.filter(item=>item.name===event)[0];
          tech.active=!tech.active;
      }


      createProject(){
        this.dataService.createProject(this.model);
      }

      setValue(value,prop){
          this.model[prop]=value;
          console.log(this.model)
      }


      changeLine(event){
          this.model.line=event;
      }

      back(){
          window.history.back();
      }


}