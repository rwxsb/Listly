using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Listly.Database;

public class ListlyDbContext(DbContextOptions<ListlyDbContext> options) : DbContext(options)
{

    private static readonly Func<ListlyDbContext, IAsyncEnumerable<ListItem>> s_getListItems =
        EF.CompileAsyncQuery((ListlyDbContext context) =>
            context.ListItems.AsNoTracking());
    
    public Task<List<ListItem>> GetListItemsCompiledAsync()
    {
        return ToListAsync(s_getListItems(this));
    }

    public Task AddListItem(ListItem item)
    {
        this.ListItems.AddAsync(item, default);
        return SaveChangesAsync();
    }
    
    private static async Task<List<T>> ToListAsync<T>(IAsyncEnumerable<T> asyncEnumerable)
    {
        var results = new List<T>();
        await foreach (var value in asyncEnumerable)
        {
            results.Add(value);
        }

        return results;
    }
    
    public DbSet<ListItem> ListItems => Set<ListItem>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        DefineListItem(builder.Entity<ListItem>());
    }

    private static void DefineListItem(EntityTypeBuilder<ListItem> builder)
    {
        builder.ToTable("ListItem");

        builder.HasKey(li => li.Id);
        
        builder.Property(li => li.Id)
            .IsRequired();

        builder.Property(li => li.Content)
            .IsRequired();
        
        builder.Property(li => li.Quantity)
            .IsRequired();
        
        builder.Property(li => li.Unit)
            .IsRequired();
        
        builder.Property(li => li.Frequency)
            .IsRequired();
        
        builder.Property(li => li.LastPurchased)
            .IsRequired();

    }

}
public class ListItem
{
    public int Id { get; set; }
    public required string Content { get; set; }
    
    public decimal Quantity { get; set; }
    
    public string Unit { get; set; }
    
    public string Frequency { get; set; }
    
    public DateTime LastPurchased { get; set; }
}
