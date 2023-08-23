import { SocketEventsHost } from './interfaces/socket-events-host.interface';
export declare class SocketEventsHostFactory {
    static create<T = any>(server: T): SocketEventsHost<T>;
}
