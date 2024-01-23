using System.ComponentModel.DataAnnotations;

namespace WebApi.Database.DbModels;

public class Car
{
    public Guid Id { get; set; }

    [StringLength(30)]
    [Required]
    public required string Brand { get; set; }

    [StringLength(30)]
    [Required]
    public required string Model { get; set; }

    public DateOnly? ManufacturedDate { get; set; }

    public int? Power { get; set; }

    public decimal? LeapCapacity { get; set; }
}