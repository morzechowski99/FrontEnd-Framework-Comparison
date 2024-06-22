using BlazorFrontEnd.Services.Interfaces;
using Microsoft.JSInterop;

namespace BlazorFrontEnd.Services;

public class JavaScriptService : IJavaScriptService
{
    private readonly IJSRuntime _jsRuntime;

    public JavaScriptService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task Alert(string message)
    {
        await _jsRuntime.InvokeVoidAsync("alert", message);
    }

    public async Task<bool> Confirm(string message)
    {
        return await _jsRuntime.InvokeAsync<bool>("confirm", message);
    }

    public async Task ConsoleTime(string label)
    {
        await _jsRuntime.InvokeVoidAsync("console.time", label);
    }

    public async Task ConsoleTimeEnd(string label)
    {
        await _jsRuntime.InvokeVoidAsync("console.timeEnd", label);
    }
}