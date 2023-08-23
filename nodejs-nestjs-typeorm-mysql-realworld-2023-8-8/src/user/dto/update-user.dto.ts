import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserDto {
  @ApiProperty()
  readonly username: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly bio: string;
  @ApiProperty()
  readonly image: string;
}