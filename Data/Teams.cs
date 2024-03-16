using System.ComponentModel.DataAnnotations;

namespace API.Data;

public class Teams
{
    [Key]
    public int TeamId { get; set; }
    public string TeamName { get; set; }
}