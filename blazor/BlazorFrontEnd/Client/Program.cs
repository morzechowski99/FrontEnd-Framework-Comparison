using BlazorFrontEnd.CarApi;
using BlazorFrontEnd.Services;
using BlazorFrontEnd.Services.Interfaces;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

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
        builder.Services
            .AddHttpClient("CarApi", client => client.BaseAddress = new Uri(carApiUrl));

        builder.Services.AddScoped(sp => new CarApiClient(carApiUrl, sp.GetRequiredService<IHttpClientFactory>().CreateClient("CarApi")));
        builder.Services.AddScoped<IJavaScriptService, JavaScriptService>();

        await builder.Build().RunAsync();
    }
}