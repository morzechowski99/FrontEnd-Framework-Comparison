using Riok.Mapperly.Abstractions;
using WebApi.Database.DbModels;
using WebApi.Dto.Cars;

namespace WebApi.Mapper;

[Mapper]
public partial class CarMapper
{
    public partial CarItemDto MapToCarItemDto(Car car);
    public partial List<CarItemDto> MapToCarItemDto(List<Car> car);
    public partial Car MapCreateUpdateCarDtoToCar(CreateUpdateCarDto car);
    public partial void MapCreateUpdateCarDtoToCar(CreateUpdateCarDto carDto, Car car);

}