using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto.Cars;

public class CreateUpdateCarDto
{
    [StringLength(30)]
    [Required]
    public required string Brand { get; set; }

    [StringLength(30)]
    [Required]
    public required string Model { get; set; }

    public DateOnly? ManufacturedDate { get; set; }

    [Range(1, 2000)]
    public int? Power { get; set; }

    [Range(0.0, 10)]
    public decimal? LeapCapacity { get; set; }
}