import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { ProjectService } from '../project.service';
import { LIST_ANIMATION } from './project-list.animation';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls:  [
      './project-list.component.less'],
  animations:LIST_ANIMATION
})

export class ProjectListComponent {

    @Input() projects:Array<Project>=new Array<Project>();
    @Input() sortOrder:boolean=true;

    filteredProjects:Array<Project>=new Array<Project>();

    tooltipVisible:boolean=false;
    complete:Array<string>=new Array<string>();

    constructor(private dataService:ProjectService) {
        this.projects=this.dataService.generateProjects();
        this.complete=Array.from(new Set(this.projects.map(item=>item.name)));
    }

    ngAfterViewInit(){
        setTimeout(()=> {
            this.filteredProjects=this.projects;
        }, 0); 
    }

    onFilterAction(event){
        // switch(event){
        //     case 'sort':
        //     let sorted$ = this.projects.sort(this.sortByName);
        //     break;
        // }
        // for(let pr of this.projects){
        //     console.log(Object.keys(pr));
        // }
        this.projects.sort(this.propComparator(event));
        this.tooltipVisible=false;
        console.log(this.tooltipVisible)
    }

    propComparator(prop) {
        return function(a, b) {
            //console.log(a[prop],b[prop],prop,a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1)
            return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1;
        }
    }

    sortByName(a,b) {
       
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;

        
      }

      filterProjects(event){
          let filters=event.split(',');
          

        //   this.projects=[];

        //   for(let item of filters){
        //     let filtered=this.filteredProjects.filter(pr=>pr.name===item);
        //     this.projects.concat(filtered);
        //     console.log(this.filteredProjects)
        //     console.log(filtered)
        //   }
          console.log(this.projects);
      }
}