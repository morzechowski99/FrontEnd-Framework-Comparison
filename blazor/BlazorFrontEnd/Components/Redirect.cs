using Microsoft.AspNetCore.Components;

namespace BlazorFrontEnd.Components;

public class Redirect : ComponentBase
{
    [Parameter, EditorRequired]
    public string? RedirectUrl { get; set; }

    [Inject]
    public NavigationManager NavigationManager { get; set; } = null!;

    protected override void OnInitialized()
    {
        if (RedirectUrl is not null)
        {
            NavigationManager.NavigateTo(RedirectUrl);
        }
    }
}