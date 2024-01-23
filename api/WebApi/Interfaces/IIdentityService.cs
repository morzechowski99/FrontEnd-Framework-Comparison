using WebApi.Dto;

namespace WebApi.Interfaces;

public interface IIdentityService
{
    Task<ResponseDto<RegisterUserResponseDto>> Register(RegisterUserDto registerUserDto, CancellationToken cancellationToken = default);
    Task<ResponseDto<TokenResponseDto>> Login(LoginDto loginDto, CancellationToken cancellationToken = default);
}