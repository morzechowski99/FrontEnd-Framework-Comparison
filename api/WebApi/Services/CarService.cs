using Microsoft.EntityFrameworkCore;
using WebApi.Database;
using WebApi.Dto.Cars;
using WebApi.Interfaces;
using WebApi.Mapper;

namespace WebApi.Services;

public class CarService : ICarService
{
    private readonly ApplicationDbContext _context;
    private readonly CarMapper _mapper;

    public CarService(ApplicationDbContext context, CarMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IReadOnlyCollection<CarItemDto>> Get() => _mapper.MapToCarItemDto(await _context.Cars.ToListAsync());


    public async Task<CarItemDto?> Get(Guid id)
    {
        var car = await _context.Cars.FirstOrDefaultAsync(x => x.Id == id);
        return car == null ? null : _mapper.MapToCarItemDto(car);
    }

    public async Task<CarItemDto?> Update(CreateUpdateCarDto car, Guid carId)
    {
        var carDb = await _context.Cars.FirstOrDefaultAsync(x => x.Id == carId);
        if (carDb is null)
            return null;
        _mapper.MapCreateUpdateCarDtoToCar(car, carDb);
        _context.Update(carDb);
        await _context.SaveChangesAsync();

        return _mapper.MapToCarItemDto(carDb);
    }


    public async Task<Guid> Create(CreateUpdateCarDto car)
    {
        var carDb = _mapper.MapCreateUpdateCarDtoToCar(car);
        _context.Cars.Add(carDb);
        await _context.SaveChangesAsync();
        return carDb.Id;
    }

    public async Task<bool> Delete(Guid id)
    {
        var carDb = await _context.Cars.FindAsync(id);
        if (carDb is null)
            return false;

        _context.Cars.Remove(carDb);
        await _context.SaveChangesAsync();
        return true;
    }
}