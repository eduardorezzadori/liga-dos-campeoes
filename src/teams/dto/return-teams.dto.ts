import { User } from "src/users/user.entity";
import { Team } from "../teams.entity";

export class ReturnTeamDto {
    returnedTeam: Team;
    message: string;
}