using Blazored.LocalStorage;
using BlazorFrontEnd.Authentication;
using BlazorFrontEnd.CarApi;
using BlazorFrontEnd.Services.Interfaces;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;

namespace BlazorFrontEnd.Components;

public partial class LoginUserForm : ComponentBase
{
    [SupplyParameterFromForm]
    public LoginDto? Model { get; set; }
    [Inject] public CarApiClient CarApiClient { get; set; } = null!;
    [Inject] public NavigationManager NavigationManager { get; set; } = null!;
    [Inject] public ILocalStorageService LocalStorageService { get; set; } = null!;
    [Inject] public AuthenticationStateProvider AuthenticationStateProvider { get; set; } = null!;
    [Inject] public IJavaScriptService JavaScriptService { get; set; } = null!;

    protected override void OnInitialized() => Model ??= new LoginDto();

    private async Task Login()
    {
        try
        {
            var res = await CarApiClient.LoginAsync(Model);
            if (res is not null)
            {
                var token = res.Token;
                await LocalStorageService.SetItemAsStringAsync(AuthenticationConstants.TOKEN_KEY, token);

                NavigationManager.NavigateTo("/");
                await AuthenticationStateProvider.GetAuthenticationStateAsync();
            }
        }
        catch (ApiException e)
        {
            await JavaScriptService.Alert(e.Response);
        }
    }
}