import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTeamDto {
    @IsString({
        message: 'O nome deve ser uma string',
    })
    @IsNotEmpty({
        message: 'O nome é obrigatório',
    })
    @MaxLength(
        255,
        {
            message: 'O nome deve ter menos de 255 caracteres',
        }
    )
    name: string;
}