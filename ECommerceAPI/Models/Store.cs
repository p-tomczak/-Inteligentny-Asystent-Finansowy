public class Store
{
    public int StoreId { get; set; }
    public string Name { get; set; }
    public ICollection<Product> Products { get; set; }
    public ICollection<Transaction> Transactions { get; set; }
}