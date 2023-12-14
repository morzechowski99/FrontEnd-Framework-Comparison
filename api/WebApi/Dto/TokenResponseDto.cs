using System.Diagnostics.CodeAnalysis;

namespace WebApi.Dto;

public class TokenResponseDto
{
    [SetsRequiredMembers]
    public TokenResponseDto(string token, DateTimeOffset expiration)
    {
        Token = token;
        Expiration = expiration;
    }

    public required string Token { get; init; }
    public DateTimeOffset Expiration { get; }

}