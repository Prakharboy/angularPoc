import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.css']
})
export class ComponeComponent implements OnInit {

  @Input('aliasmessagefromparent') messagefromparent: string;

  message: string = "..hello from child"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  changeComponent(){

    
  }


  constructor() { }

  ngOnInit() {
    console.log("comp2 loaded");
  }

}
