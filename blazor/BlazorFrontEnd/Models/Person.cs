namespace BlazorFrontEnd.Models;

public record Person
{
    public Person()
    {

    }

    public Person(Person org)
    {
        FirstName = org.FirstName;
        Surname = org.Surname;
        DateOfBirth = org.DateOfBirth;
        Gender = org.Gender;
    }

    public string? FirstName { get; set; }
    public string? Surname { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string? Gender { get; set; }
}