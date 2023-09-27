using Microsoft.AspNetCore.Identity;
using static WebApi.Database.Consts;

namespace WebApi.DbInitializer;

public static class DbInitializer
{
    public static async Task InitDb(RoleManager<IdentityRole>? roleManager)
    {
        if (roleManager is null)
            throw new ArgumentNullException(nameof(roleManager));
        if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
            await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
        if (!await roleManager.RoleExistsAsync(UserRoles.User))
            await roleManager.CreateAsync(new IdentityRole(UserRoles.User));
    }
}