namespace BlazorFrontEnd.Calculator;

internal class Calculator
{
    public int? Number1 { get; set; }
    public int? Number2 { get; set; }
    public bool CanAdd => Number1.HasValue && Number2.HasValue;

    public int? GetResult()
    {
        return CanAdd ? Number1 + Number2 : null;
    }

    public void Reset()
    {
        Number1 = null;
        Number2 = null;
    }

}