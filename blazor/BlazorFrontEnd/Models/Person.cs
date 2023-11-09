namespace BlazorFrontEnd.Models;

public class Person
{
    public string? FirstName { get; set; }
    public string? Surname { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string? Gender { get; set; }
}