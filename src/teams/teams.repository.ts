import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTeamDto } from "./dto/create-team.dto";
import { Team } from "./teams.entity";

@EntityRepository(Team)
export class TeamsRepository extends Repository<Team> {

    async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
        const { name } = createTeamDto;
        const team = new Team();

        team.name = name;

        try {
            await team.save();
            return team;
        } catch (error) {
            if (error.code.toString() === '23505') {
                throw new ConflictException('Um time com o nome informado ja existe');
            } else {
                throw new InternalServerErrorException(
                    'Erro ao salvar o usuário no banco de dados',
                );
            }
        }

    }
}