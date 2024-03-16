using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]

public class BowlersController : ControllerBase
{
    private IBowlersRepository _repository;
    
    public BowlersController(IBowlersRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IEnumerable<Bowlers> Get()
    {
        var bowlers = _repository.GetBowlersWithTeams();
        
        return bowlers;
    }
}