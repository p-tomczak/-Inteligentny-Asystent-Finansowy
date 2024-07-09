public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Store> Stores { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<Product>()
            .HasOne(p => p.Store)
            .WithMany(s => s.Products)
            .HasForeignKey(p => p.StoreId);

        modelBuilder.Entity<Transaction>()
            .HasOne(t => t.Product)
            .WithMany(p => p.Transactions)
            .HasForeignKey(t => t.ProductId);
        
        modelBuilder.Entity<Transaction>()
            .HasOne(t => t.Store)
            .WithMany(s => s.Transactions)
            .HasForeignKey(t => t.StoreId);

        modelBuilder.Entity<Store>()
            .HasOne<User>()
            .WithMany(u => u.Stores)
            .HasForeignKey(s => s.UserId);
    }
}