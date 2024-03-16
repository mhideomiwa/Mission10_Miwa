// IBowlersRepository.cs
using System.Collections.Generic;
using API.Data;

namespace API.Data
{
    public interface IBowlersRepository
    {
        IEnumerable<Bowlers> GetBowlersWithTeams();
    }
}