using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dto.Cars;
using WebApi.Interfaces;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
[Produces("application/json")]
public class CarsController : ControllerBase
{
    private readonly ICarService _carService;

    public CarsController(ICarService carService)
    {
        _carService = carService;
    }

    /// <summary>
    /// Get cars
    /// </summary>
    /// <returns>List of cars</returns>
    /// <response code="200">List of cars</response>
    /// <response code="400">Invalid request</response>
    /// <response code="401">Unauthorized</response>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<CarItemDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(Dictionary<string, string[]>), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<IActionResult> Get() => Ok(await _carService.Get());

    /// <summary>
    /// Get car by id
    /// </summary>
    /// <param name="id">car id</param>
    /// <returns>car with id</returns>
    /// <response code="200">Car with given id</response>
    /// <response code="400">Invalid request</response>
    /// <response code="401">Unauthorized</response>
    /// <response code="404">Car with given id does not exists</response>
    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(CarItemDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(Dictionary<string, string[]>), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetById(Guid? id)
    {
        if (id is null)
            return BadRequest();

        var car = await _carService.Get(id.Value);

        if (car is null)
            return NotFound($"Car with if {id} does not exists");
        return Ok(car);
    }

    /// <summary>
    /// Create a car
    /// </summary>
    /// <param name="carDto">new car data</param>
    /// <returns></returns>
    /// <response code="201">Car created</response>
    /// <response code="400">Invalid request</response>
    /// <response code="401">Unauthorized</response>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(Dictionary<string, string[]>), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public async Task<IActionResult> Create(CreateUpdateCarDto carDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var id = await _carService.Create(carDto);

        return CreatedAtAction(nameof(GetById), new { id = id }, null);
    }

    /// <summary>
    /// Update a car
    /// </summary>
    /// <param name="carDto">car data</param>
    /// <param name="id">car id</param>
    /// <returns>updated car</returns>
    /// <response code="200">Car updated</response>
    /// <response code="400">Invalid request</response>
    /// <response code="401">Unauthorized</response>
    /// <response code="404">Car with given id does not exists</response>
    [HttpPut("{id:guid}")]
    [ProducesResponseType(typeof(CarItemDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(Dictionary<string, string[]>), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update(CreateUpdateCarDto carDto, Guid? id)
    {
        if (id is null)
            return BadRequest();
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var car = await _carService.Update(carDto, id.Value);
        if (car is null)
            return NotFound($"Car with if {id} does not exists");
        return Ok(car);
    }

    /// <summary>
    /// Delete a car
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    /// <response code="200">Car deleted</response>
    /// <response code="400">Invalid request</response>
    /// <response code="401">Unauthorized</response>
    /// <response code="404">Car with given id does not exists</response>
    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(Dictionary<string, string[]>), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid? id)
    {
        if (id is null)
            return BadRequest();

        if (await _carService.Delete(id.Value))
            return Ok();
        return NotFound($"Car with if {id} does not exists");
    }
}