import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.entity';
import { TeamsRepository } from './teams.repository';

@Injectable()
export class TeamsService {
    constructor(
        @InjectRepository(TeamsRepository)
        private teamsRepository: TeamsRepository,
    ) { }

    async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
        return this.teamsRepository.createTeam(createTeamDto);
    }

}
