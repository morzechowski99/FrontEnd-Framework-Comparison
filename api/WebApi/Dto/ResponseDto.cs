using Ardalis.SmartEnum;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Dto;

public class ResponseDto
{
    public object? Response { get; set; }
    public required ResponseStatus Status { get; init; }
}

public sealed class ResponseStatus : SmartEnum<ResponseStatus>
{
    public static readonly ResponseStatus Ok = new("OK", 200);
    public static readonly ResponseStatus Created = new("Created", 201);
    public static readonly ResponseStatus NotFound = new("Not Found", 404);
    public static readonly ResponseStatus BadRequest = new("Bad Request", 400);
    public static readonly ResponseStatus InternalServerError = new("Internal Server Error", 500);
    private ResponseStatus(string name, int value) : base(name, value)
    {

    }

    public IActionResult GetActionResult(object? response = null) => this switch
    {
        var e when e.Equals(Ok) => new OkObjectResult(response),
        var e when e.Equals(Created) => new CreatedResult("", response),
        var e when e.Equals(NotFound) => new NotFoundObjectResult(response),
        var e when e.Equals(BadRequest) => new BadRequestObjectResult(response),
        var e when e.Equals(InternalServerError) => response != null ?
                                                    new ObjectResult(response) { StatusCode = StatusCodes.Status500InternalServerError } :
                                                    new StatusCodeResult(StatusCodes.Status500InternalServerError),
        _ => new StatusCodeResult(StatusCodes.Status501NotImplemented),
    };
}