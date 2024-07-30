import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigAPI } from './services/config';

const config: SocketIoConfig = { url: ConfigAPI.WS, options: {path: "v1/api/ws", transports: ["websocket"]} };

@NgModule({
  declarations: [],
  imports: [CommonModule, SocketIoModule.forRoot(config)],
  providers: [],
})
export class AppModule {}
