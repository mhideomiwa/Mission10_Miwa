// EFBowlersRepository.cs
using System.Collections.Generic;
using System.Linq;
using API.Data;

namespace API.Data
{
    public class EFBowlersRepository : IBowlersRepository
    {
        private readonly BowlersContext _context;

        public EFBowlersRepository(BowlersContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowlers> GetBowlersWithTeams()
        {
            var bowlersData = from bowler in _context.Bowlers
                join team in _context.Teams on bowler.TeamId equals team.TeamId
                where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                select new Bowlers
                {
                    BowlerId = bowler.BowlerId,
                    BowlerFirstName = bowler.BowlerFirstName,
                    BowlerLastName = bowler.BowlerLastName,
                    BowlerMiddleInit = bowler.BowlerMiddleInit,
                    BowlerAddress = bowler.BowlerAddress,
                    BowlerCity = bowler.BowlerCity,
                    BowlerState = bowler.BowlerState,
                    BowlerZip = bowler.BowlerZip,
                    BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                    TeamId = bowler.TeamId,
                    TeamName = team.TeamName // Assuming you have a navigation property for the team
                };

            return bowlersData.ToArray(); // Convert to a list before returning
        }
    }
}