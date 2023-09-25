using Microsoft.AspNetCore.Identity;
using System.Text;
using WebApi.Dto;
using WebApi.Interfaces;
using static WebApi.Database.Consts;

namespace WebApi.Identity;

public class IdentityService : IIdentityService
{
    private readonly UserManager<IdentityUser> _userManager;

    public IdentityService(UserManager<IdentityUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<ResponseDto> Register(RegisterUserDto registerUserDto, CancellationToken cancellationToken = default)
    {
        if (registerUserDto.Username is null || registerUserDto.Password is null)
            throw new ArgumentException("Username and Password are required", nameof(registerUserDto));

        var userExists = await _userManager.FindByNameAsync(registerUserDto.Username);
        if (userExists != null)
            return new ResponseDto { Message = "user name already taken", Status = ResponseStatus.BadRequest };

        IdentityUser user = new()
        {
            Email = registerUserDto.Email,
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = registerUserDto.Username
        };

        var result = await _userManager.CreateAsync(user, registerUserDto.Password);
        if (!result.Succeeded)
        {
            var message = new StringBuilder("");
            result.Errors.ToList().ForEach((e) =>
            {
                message.Append(e.Description);
            });
            return new ResponseDto { Status = ResponseStatus.InternalServerError, Message = message.ToString() };
        }

        await _userManager.AddToRoleAsync(user, UserRoles.User);

        return new ResponseDto { Status = ResponseStatus.Created, Message = "User created successfully!" };
    }
}