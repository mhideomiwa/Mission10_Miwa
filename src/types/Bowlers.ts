export interface Bowlers {
    bowlerId: number;
    bowlerLastName: string;
    bowlerFirstName: string;
    bowlerMiddleInit?: string | null;
    bowlerAddress?: string | null;
    bowlerCity?: string | null;
    bowlerState?: string | null;
    bowlerZip?: string | null;
    bowlerPhoneNumber?: string | null;
    teamId: number;
    teamName: string;
}
