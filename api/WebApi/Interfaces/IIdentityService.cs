using WebApi.Dto;

namespace WebApi.Interfaces;

public interface IIdentityService
{
    Task<ResponseDto> Register(RegisterUserDto registerUserDto);
}