using Microsoft.AspNetCore.Mvc;

namespace WebApi.Dto;

public class ResponseDto
{
    public ResponseStatus Status { get; init; }
    public string? Message { get; init; }
}

public enum ResponseStatus : byte
{
    Ok,
    Created,
    NotFound,
    BadRequest,
    InternalServerError
}