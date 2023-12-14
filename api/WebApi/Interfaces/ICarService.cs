using WebApi.Dto.Cars;

namespace WebApi.Interfaces;

public interface ICarService
{
    Task<IReadOnlyCollection<CarItemDto>> Get();
    Task<CarItemDto?> Get(Guid id);
    Task<CarItemDto?> Update(CreateUpdateCarDto car, Guid carId);
    Task<Guid> Create(CreateUpdateCarDto car);
    Task<bool> Delete(Guid id);
}