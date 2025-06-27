import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adding-offre',
  templateUrl: './adding-offre.component.html',
  styleUrl: './adding-offre.component.css'
})
export class AddingOffreComponent {
  // Titre du dialog, personnalisable depuis le parent
  @Input() title: string = 'Dialog';
  // Reçoit la visibilité depuis le parent
  @Input() visible: boolean = false;
  // Émet la nouvelle valeur de visibilité au parent
  @Output() visibleChange = new EventEmitter<boolean>();

  // Appelé quand le dialog change de visibilité (croix, overlay, etc)
  onVisibleChange(val: boolean) {
    this.visible = val;
    this.visibleChange.emit(val);
  }

  // Ferme le dialog et notifie le parent
  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
