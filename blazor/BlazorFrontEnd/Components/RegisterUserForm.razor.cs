using BlazorFrontEnd.CarApi;
using BlazorFrontEnd.Services.Interfaces;
using Microsoft.AspNetCore.Components;

namespace BlazorFrontEnd.Components;

public partial class RegisterUserForm : ComponentBase
{
    [SupplyParameterFromForm]
    public RegisterUserDto? Model { get; set; }
    [Inject] public CarApiClient CarApiClient { get; set; } = null!;
    [Inject] public NavigationManager NavigationManager { get; set; } = null!;
    [Inject] public IJavaScriptService JavaScriptService { get; set; } = null!;

    protected override void OnInitialized() => Model ??= new RegisterUserDto();

    private async Task Register()
    {
        try
        {
            var res = await CarApiClient.RegisterAsync(Model);
            if (string.IsNullOrEmpty(res?.Error))
                NavigationManager.NavigateTo("/log-in");
            else
                await JavaScriptService.Alert(res.Error);
        }
        catch (ApiException e)
        {
            await JavaScriptService.Alert(e.Message);
            await JavaScriptService.Alert(e.Response);
        }
    }
}