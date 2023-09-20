using Microsoft.AspNetCore.Mvc;
using WebApi.Dto;

namespace WebApi.Controllers;

public class ControllerBase : Microsoft.AspNetCore.Mvc.ControllerBase
{
    protected IActionResult GetActionResult(ResponseStatus status, object? response = null, string createdUri = "")
    {
        return status switch
        {
            ResponseStatus.Ok => Ok(response),
            ResponseStatus.NotFound => NotFound(response),
            ResponseStatus.BadRequest => BadRequest(response),
            ResponseStatus.Created => Created(createdUri, response),
            ResponseStatus.InternalServerError => StatusCode(StatusCodes.Status500InternalServerError, response),
            _ => StatusCode(StatusCodes.Status501NotImplemented)
        };
    }
}