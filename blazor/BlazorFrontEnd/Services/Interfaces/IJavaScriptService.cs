﻿namespace BlazorFrontEnd.Services.Interfaces;

public interface IJavaScriptService
{
    Task Alert(string message);
    Task<bool> Confirm(string message);
}