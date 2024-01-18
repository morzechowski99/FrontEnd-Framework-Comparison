namespace BlazorFrontEnd.Services.Interfaces;

public interface IRefreshingService
{
    public void SetRefreshRequested(Func<Task> refreshRequested);
    public Task CallRequestRefresh();
}