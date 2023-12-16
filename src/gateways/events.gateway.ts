// tu-servicio.gateway.ts
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { Paciente } from 'src/entities/pacientes/paciente.entity';

@WebSocketGateway()
@Injectable()
export class ServiceGateway {
    @WebSocketServer()
    private server: Server;

    handleItemAgregado(item: Paciente): void {
        this.server.emit('tu-servicio-item-agregado', item);
      }
      
      handleItemQuitado(id: number): void {
        this.server.emit('tu-servicio-item-quitado', id);
      }
    @SubscribeMessage('prueba-desde-cliente')
    handlePruebaDesdeCliente(@MessageBody() data: string): void {
        console.log('Evento recibido desde el cliente:', data);
    }


    // Otros métodos del gateway
}
