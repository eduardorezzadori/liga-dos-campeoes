import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.entity';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

    constructor(private readonly teamsService: TeamsService) { }

    @Post()
    async createTeam(@Body(ValidationPipe) team: CreateTeamDto): Promise<Team> {
        const result = await this.teamsService.createTeam(team);
        return (result);
    }

}
