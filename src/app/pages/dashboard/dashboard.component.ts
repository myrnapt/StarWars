import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'pages-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Inicia la animación cuando el componente se inicializa
    this.startAnimation();
  }

  private startAnimation() {
    // Obtén la referencia al elemento principal con la clase .main
    const mainElement = this.el.nativeElement.querySelector('.main');

    // Agrega la clase de animación para iniciar la animación zoom
    mainElement.classList.add('animate');

    // Espera un breve período antes de agregar la clase a star-wars para sincronizar las animaciones
    setTimeout(() => {
      const starWarsSection = this.el.nativeElement.querySelector('.star-wars');
      starWarsSection.classList.add('animate');
    }, 500);
  }
}
