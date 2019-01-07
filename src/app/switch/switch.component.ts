import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Input() on = false
  constructor() { }

  ngOnInit() {
  }

  click(){
    console.log('click')
  }
}
