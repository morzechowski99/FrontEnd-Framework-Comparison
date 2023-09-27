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
    [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$", ErrorMessage = "Password should have at least one lower case letter, one upper case letter, one number and one special character")]
    [MinLength(8)]
    public string? Password { get; set; }

    [Required(ErrorMessage = "Password is required")]
    [Compare(nameof(Password), ErrorMessage = "Passwords does not match.")]
    public string? PasswordConfirm { get; set; }
}