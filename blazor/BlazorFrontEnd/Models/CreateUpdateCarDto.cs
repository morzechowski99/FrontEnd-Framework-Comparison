namespace BlazorFrontEnd.CarApi;

public partial class CreateUpdateCarDto
{
    public string? LeapCapacityString
    {
        get => LeapCapacity.ToString();
        set
        {
            if (double.TryParse(value, out var leapCapacity))
            {
                LeapCapacity = leapCapacity;
            }
        }
    }
}