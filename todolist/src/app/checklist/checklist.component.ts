import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  todos:Array<any> = [
    {
      title : '1: List my TODOs',
      description : 'As a user I would like to list my current todos',
      creationDate: '',
      isChecked: true
    },{
      title : '2: Change a TODO state',
      description : 'As a user I would like to change a todo state by checking a "box"',
      creationDate: '',
      isChecked: false
    },{
      title : '3: Detail a TODO',
      description : 'As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).',
      creationDate: '',
      isChecked: false
    },{
      title : '4: Add a new TODO',
      description : 'As a user I would like to add a new todo in my list',
      creationDate: '',
      isChecked: false
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
