using BlazorFrontEnd.Services.Interfaces;

namespace BlazorFrontEnd.Services;

public class RefreshingService : IRefreshingService
{
    private Func<Task>? _refreshRequested;
    public void SetRefreshRequested(Func<Task> refreshRequested)
    {
        _refreshRequested = refreshRequested;
    }

    public Task CallRequestRefresh()
    {
        return _refreshRequested is not null ? _refreshRequested() : Task.CompletedTask;
    }
}