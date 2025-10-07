import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { QrCodeService } from '../../services/api';
import { addIcons } from 'ionicons';
import { syncOutline } from 'ionicons/icons';


@Component({
  selector: 'app-card-ver',
  templateUrl: './card-ver.page.html',
  styleUrls: ['./card-ver.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, RouterLink, CommonModule, FormsModule]
})
export class CardVerPage implements OnInit {

  qrCodeImg: string = '';
  instagramBtnText: string = 'Instagram';
  githubBtnText: string = 'GitHub';
  cardActive: boolean = false;

  constructor(private qrCodeService: QrCodeService) {
    addIcons({ syncOutline });
  }

  ngOnInit() { }

  gerarQRCodeInstagram() {
    this.instagramBtnText = 'Gerando...';
    this.qrCodeImg = this.qrCodeService.gerarQRCodeUrl('instagram');

    setTimeout(() => {
      this.cardActive = true;
      this.instagramBtnText = 'QR Gerado!';

      setTimeout(() => {
        this.cardActive = false;
        this.instagramBtnText = 'Instagram';
      }, 2000);
    }, 300);
  }

  gerarQRCodeGithub() {
    this.githubBtnText = 'Gerando...';
    this.qrCodeImg = this.qrCodeService.gerarQRCodeUrl('github');

    setTimeout(() => {
      this.cardActive = true;
      this.githubBtnText = 'QR Gerado!';

      setTimeout(() => {
        this.cardActive = false;
        this.githubBtnText = 'GitHub';
      }, 2000);
    }, 300);
  }
}