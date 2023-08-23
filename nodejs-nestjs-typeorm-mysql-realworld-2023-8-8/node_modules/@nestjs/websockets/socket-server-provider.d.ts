import { ApplicationConfig } from '@nestjs/core/application-config';
import { GatewayMetadata } from './interfaces/gateway-metadata.interface';
import { SocketEventsHost } from './interfaces/socket-events-host.interface';
import { SocketsContainer } from './sockets-container';
export declare class SocketServerProvider {
    private readonly socketsContainer;
    private readonly applicationConfig;
    constructor(socketsContainer: SocketsContainer, applicationConfig: ApplicationConfig);
    scanForSocketServer<T extends GatewayMetadata>(options: T, port: number): SocketEventsHost;
    private createSocketServer;
    private createWithNamespace;
    private getServerOfNamespace;
    private validateNamespace;
}
