using Blazored.LocalStorage;
using BlazorFrontEnd.Authentication;
using BlazorFrontEnd.CarApi;
using BlazorFrontEnd.Services;
using BlazorFrontEnd.Services.Interfaces;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http.Headers;

namespace BlazorFrontEnd.Client;

public class Program
{
    protected Program() { }

    public static async Task Main(string[] args)
    {
        var builder = WebAssemblyHostBuilder.CreateDefault(args);
        builder.RootComponents.Add<App>("#app");
        builder.RootComponents.Add<HeadOutlet>("head::after");

        var configuration = builder.Configuration;
        var carApiUrl = configuration.GetRequiredSection("CarApiSettings")["Url"] ??
                        throw new InvalidOperationException();
        builder.Services.AddBlazoredLocalStorage();
        builder.Services
            .AddHttpClient("CarApi", (sp, client) =>
            {
                client.BaseAddress = new Uri(carApiUrl);
                var scope = sp.CreateScope();
                var localStorageService = scope.ServiceProvider.GetRequiredService<ISyncLocalStorageService>();
                var token = localStorageService.GetItemAsString(AuthenticationConstants.TOKEN_KEY);
                client.DefaultRequestHeaders.Authorization = null;
                if (!string.IsNullOrEmpty(token))
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                }
            });

        builder.Services.AddTransient(sp => new CarApiClient(carApiUrl, sp.GetRequiredService<IHttpClientFactory>().CreateClient("CarApi")));
        builder.Services.AddScoped<IJavaScriptService, JavaScriptService>();
        builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthStateProvider>();
        builder.Services.AddScoped<IRefreshingService, RefreshingService>();
        builder.Services.AddAuthorizationCore();

        await builder.Build().RunAsync();
    }
}