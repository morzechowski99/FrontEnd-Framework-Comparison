using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApi.Dto;
using WebApi.Interfaces;
using static WebApi.Database.Constsants;

namespace WebApi.Identity;

public class IdentityService : IIdentityService
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly IConfiguration _configuration;

    public IdentityService(UserManager<IdentityUser> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    public async Task<ResponseDto<RegisterUserResponseDto>> Register(RegisterUserDto registerUserDto, CancellationToken cancellationToken = default)
    {
        if (registerUserDto.Username is null || registerUserDto.Password is null)
            throw new ArgumentException("Username and Password are required", nameof(registerUserDto));

        var userExists = await _userManager.FindByNameAsync(registerUserDto.Username);
        if (userExists != null)
            return new ResponseDto<RegisterUserResponseDto> { Error = "user name already taken", Status = ResponseStatus.BadRequest };

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
            return new ResponseDto<RegisterUserResponseDto> { Status = ResponseStatus.InternalServerError, Error = message.ToString() };
        }

        await _userManager.AddToRoleAsync(user, UserRoles.User);

        return new ResponseDto<RegisterUserResponseDto> { Status = ResponseStatus.Created, Response = new RegisterUserResponseDto(user.Id) };
    }

    public async Task<ResponseDto<TokenResponseDto>> Login(LoginDto loginDto, CancellationToken cancellationToken = default)
    {
        if (loginDto.Username is null || loginDto.Password is null)
            throw new ArgumentException("Login and password are required", nameof(loginDto));
        var user = await _userManager.FindByNameAsync(loginDto.Username);
        if (user is null)
            return new ResponseDto<TokenResponseDto>
            { Status = ResponseStatus.NotFound, Error = "User with given username does not exists" };
        if (!await _userManager.CheckPasswordAsync(user, loginDto.Password))
            return new ResponseDto<TokenResponseDto> { Status = ResponseStatus.BadRequest, Error = "Invalid password" };
        var roles = await _userManager.GetRolesAsync(user);

        var claims = new List<Claim>
        {
            new (ClaimTypes.Name, user.UserName!),
            new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        claims.AddRange(roles.Select(userRole => new Claim(ClaimTypes.Role, userRole)));

        var token = GetToken(claims);
        return new ResponseDto<TokenResponseDto>
        {
            Status = ResponseStatus.Ok,
            Response = new TokenResponseDto(new JwtSecurityTokenHandler().WriteToken(token), new DateTimeOffset(token.ValidTo))
        };
    }

    private JwtSecurityToken GetToken(IEnumerable<Claim> authClaims)
    {
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"] ?? string.Empty));

        var token = new JwtSecurityToken(
            expires: DateTime.Now.AddHours(3),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        );

        return token;
    }
}