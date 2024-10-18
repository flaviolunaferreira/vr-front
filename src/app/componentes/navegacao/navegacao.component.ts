import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navegacao.component.html',
  styleUrl: './navegacao.component.scss'
})
export class NavegacaoComponent {

  breadcrumbs: string[] = ["Home", "Produtos", "Detalhes"];

  // Codigo deveria ler a rota mas infelismente temos apenas essa por hora.

  // constructor(private router: Router) {
  //   // Subscribe to router events to track navigation changes
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.buildBreadcrumb();
  //   });
  // }

  // buildBreadcrumb() {
  //   const url = this.router.url;
  //   this.breadcrumbs = url.split('/').filter(crumb => crumb);  // Remove entradas vazias
  // }
}
