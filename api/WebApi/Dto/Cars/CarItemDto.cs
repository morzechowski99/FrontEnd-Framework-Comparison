namespace WebApi.Dto.Cars;

public class CarItemDto
{
    public Guid Id { get; set; }
    public string? Brand { get; set; }
    public string? Model { get; set; }
    public DateOnly? ManufacturedDate { get; set; }
    public int? Power { get; set; }
    public decimal? LeapCapacity { get; set; }
}