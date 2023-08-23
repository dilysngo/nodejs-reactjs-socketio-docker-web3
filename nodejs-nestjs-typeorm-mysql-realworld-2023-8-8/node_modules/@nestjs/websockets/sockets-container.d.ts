import { SocketEventsHost } from './interfaces';
export declare class SocketsContainer {
    private readonly socketEventHosts;
    getAllSocketEventHosts(): Map<string | RegExp, SocketEventsHost>;
    getSocketEventsHostByPort(port: number): SocketEventsHost;
    addSocketEventsHost(namespace: string | RegExp, port: number, host: SocketEventsHost): void;
    clear(): void;
}
