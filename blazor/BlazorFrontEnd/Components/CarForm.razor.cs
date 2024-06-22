using BlazorFrontEnd.CarApi;
using BlazorFrontEnd.Services.Interfaces;
using Microsoft.AspNetCore.Components;

namespace BlazorFrontEnd.Components;

public partial class CarForm : ComponentBase
{
    [SupplyParameterFromForm]
    public CreateUpdateCarDto? Model { get; set; }
    [Inject] public CarApiClient CarApiClient { get; set; } = null!;
    [Inject] public IRefreshingService RefreshingService { get; set; } = null!;
    [Inject] public IJavaScriptService Js { get; set; } = null!;

    protected override void OnInitialized() => Model ??= new CreateUpdateCarDto();


    private async Task Create()
    {
        await Js.ConsoleTime("create car");
        await CarApiClient.CarsPOSTAsync(Model);
        await Js.ConsoleTimeEnd("create car");
        await RefreshingService.CallRequestRefresh();
    }
}