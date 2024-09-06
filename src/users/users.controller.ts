import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ReturnUserDto } from './dto/return-users.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    @UseGuards(AuthGuard())
    async createAdminUser(
        @Body(ValidationPipe) createUserDto: CreateUserDto,
    ): Promise<ReturnUserDto> {
        const user = await this.usersService.createAdminUser(createUserDto);
        return {
            user,
            message: 'Administrador cadastrado com sucesso',
        };
    }
}
