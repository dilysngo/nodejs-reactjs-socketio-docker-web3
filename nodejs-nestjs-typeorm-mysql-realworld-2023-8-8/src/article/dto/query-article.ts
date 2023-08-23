import { ApiProperty } from "@nestjs/swagger";

export class QueryArticle {
    @ApiProperty({
        required: true,
        default: 1,
    })
    readonly offset: number;

    @ApiProperty({
        required: true,
        default: 10,
    })
    readonly limit: number;

    @ApiProperty({
        required: false,
    })
    readonly author: string;

    @ApiProperty({
        required: false,
    })
    readonly favorited: string;

    @ApiProperty({
        required: false,
    })
    readonly tag: string;
}
