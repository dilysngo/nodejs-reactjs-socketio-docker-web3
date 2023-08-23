import { PipeTransform, Type } from '@nestjs/common';
export declare function MessageBody(): ParameterDecorator;
export declare function MessageBody(...pipes: (Type<PipeTransform> | PipeTransform)[]): ParameterDecorator;
