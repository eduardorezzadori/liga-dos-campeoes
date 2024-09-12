import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';
import { ReturnTeamDto } from './dto/return-teams.dto';

@Controller('teams')
export class TeamsController {

    constructor(private readonly teamsService: TeamsService) { }

    @Post()
    async createTeam(@Body(ValidationPipe) team: CreateTeamDto): Promise<ReturnTeamDto> {
        const returnedTeam = await this.teamsService.createTeam(team);
        return {
            returnedTeam,
            message: "Time cadastrado com sucesso"
        };
    }

}
