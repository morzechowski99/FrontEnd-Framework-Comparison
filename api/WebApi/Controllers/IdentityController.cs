using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using WebApi.Dto;
using WebApi.Interfaces;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class IdentityController : ControllerBase
{
    private readonly IIdentityService _identityService;

    public IdentityController(IIdentityService identityService)
    {
        _identityService = identityService;
    }

    /// <summary>
    /// Register new user
    /// </summary>
    /// <param name="registerUserDto">user data</param>
    /// <returns>user Id</returns>
    /// <response code="201">User created</response>
    /// <response code="400">Invalid request</response>
    [HttpPost("register")]
    [ProducesResponseType(typeof(ResponseDto<RegisterUserDto>), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(SerializableError), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Register(RegisterUserDto registerUserDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var res = await _identityService.Register(registerUserDto);
        return res.Status.GetActionResult(res.Response);
    }

    /// <summary>
    /// Login user
    /// </summary>
    /// <param name="loginDto">user login data</param>
    /// <returns>token</returns>
    /// <response code="200">User logged in</response>
    /// <response code="400">Invalid request</response>
    [HttpPost("login")]
    [ProducesResponseType(typeof(TokenResponseDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(SerializableError), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var res = await _identityService.Login(loginDto);
        return res.Status.GetActionResult(res.Response);
    }
}