import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';
import { Connection } from './Connection/connection';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConnectionService]
})
export class AppComponent {
  private connection: Connection;
  private showOverlay: boolean;

  constructor(
   private connectionService: ConnectionService
) {}

  public onDisplayConnection(to: string) {
    this.connectionService.getConnections(to).subscribe(con => {
      this.connection = con;
      console.log(this.connection);
      this.showOverlay = true;
      setTimeout(() => {this.showOverlay = false; }, 4000);
    });
  }
}
