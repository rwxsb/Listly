using Listly.Database;
using Listly.Service.API.Abstractions.Managers;
using Microsoft.AspNetCore.Mvc;

namespace Listly.Service.API.Controllers;

[ApiController]
[Route("/[controller]")]
public class ShoppingListController : ControllerBase
{
    private readonly IShoppingListManager _shoppingListManager;

    public ShoppingListController(IShoppingListManager shoppingListManager)
    {
        _shoppingListManager = shoppingListManager;
    }

    [HttpGet("ListItems")]
    public async Task<List<ListItem>> GetListItems()
    {
        return await _shoppingListManager.GetListItems();
    }

    [HttpPost("ListItem")]
    public Task AddListItem(ListItem item)
    {
        return _shoppingListManager.AddListItem(item);
    }
    
}