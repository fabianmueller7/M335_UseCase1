import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}

  async getNickname(text: string) {
    const alert = await this.alertController.create({
      header: 'Change ' + text,
      message: 'Please input you new ' + text,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'New ' + text
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Ok',
          role: 'ok',
        }
      ]
    });

    await alert.present();

    const response = await alert.onDidDismiss();
    if(response.role === 'ok') {
       console.log(text + ' changed to ' + response.data.values.name);
    }
  }

}
