import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messaages',
  templateUrl: './messaages.component.html',
  styleUrls: ['./messaages.component.css']
})
export class MessaagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
