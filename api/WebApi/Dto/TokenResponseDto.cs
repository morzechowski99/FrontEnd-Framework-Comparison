namespace WebApi.Dto;

public class TokenResponseDto
{
    public string Token { get; }
    public DateTimeOffset Expiration { get; }

    public TokenResponseDto(DateTimeOffset expiration, string token)
    {
        Expiration = expiration;
        Token = token;
    }
}