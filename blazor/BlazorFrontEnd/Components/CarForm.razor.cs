using BlazorFrontEnd.CarApi;
using Microsoft.AspNetCore.Components;

namespace BlazorFrontEnd.Components;

public partial class CarForm : ComponentBase
{
    [SupplyParameterFromForm]
    public CreateUpdateCarDto? Model { get; set; }
    [Inject] public CarApiClient CarApiClient { get; set; } = null!;

    protected override void OnInitialized() => Model ??= new CreateUpdateCarDto();


    private async Task Create()
    {
        await CarApiClient.CarsPOSTAsync(Model);
    }
}