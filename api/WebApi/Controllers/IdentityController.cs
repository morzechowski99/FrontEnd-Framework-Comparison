using Microsoft.AspNetCore.Mvc;
using WebApi.Dto;
using WebApi.Interfaces;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdentityController : ControllerBase
{
    private readonly IIdentityService _identityService;

    public IdentityController(IIdentityService identityService)
    {
        _identityService = identityService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterUserDto registerUserDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var res = await _identityService.Register(registerUserDto);
        return res.Status.GetActionResult(res.Response);
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        var res = await _identityService.Login(loginDto);
        return res.Status.GetActionResult(res.Response);
    }
}