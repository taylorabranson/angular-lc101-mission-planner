import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    this.equipment.push(item);
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(item: string, updatedItem: string) {
    let index = this.equipment.indexOf(item);
    this.equipment[index] = updatedItem;
  }

}
