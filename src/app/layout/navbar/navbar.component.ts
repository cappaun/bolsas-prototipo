import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Usuario } from '@core/interfaces/usuario.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;

  @Input() logo: {
    path: string;
    name: string;
  };
  // @Input() user: Usuario;
  @Output() logout: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  public toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public doLogout(): void {
    this.logout.emit();
  }
}
