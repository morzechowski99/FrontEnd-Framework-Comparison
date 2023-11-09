using WebApi.Dto;

namespace WebApi.Interfaces;

public interface IIdentityService
{
    Task<ResponseDto> Register(RegisterUserDto registerUserDto, CancellationToken cancellationToken = default);
    Task<ResponseDto> Login(LoginDto loginDto, CancellationToken cancellationToken = default);
}