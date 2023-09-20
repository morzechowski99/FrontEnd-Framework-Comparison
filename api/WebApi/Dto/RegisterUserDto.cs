using System.ComponentModel.DataAnnotations;

namespace WebApi.Dto;

public class RegisterUserDto
{
    [Required(ErrorMessage = "User Name is required")]
    public string? Username { get; set; }

    [EmailAddress]
    [Required(ErrorMessage = "Email is required")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "Password is required")]
    //TODO: add password validation regex
    public string? Password { get; set; }

    [Required(ErrorMessage = "Password is required")]
    [Compare(nameof(Password), ErrorMessage = "Passwords does not match.")]
    public string? PasswordConfirm { get; set; }
}