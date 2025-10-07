import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  // Suas funcionalidades existentes aqui...
}

// ADICIONE ESSE SERVICE ABAIXO
@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  private links = {
    instagram: "https://www.instagram.com/em321r/",
    github: "https://github.com/ProgramadoRyan"
  };

  constructor() { }

  gerarQRCodeUrl(tipo: 'instagram' | 'github'): string {
    const url = this.links[tipo];

    if (!url) {
      console.error('Link não encontrado para:', tipo);
      return '';
    }

    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}`;
  }
}