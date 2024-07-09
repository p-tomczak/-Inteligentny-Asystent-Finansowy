public class Product
{
    public int ProductId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal PriceNet { get; set; }
    public decimal PriceGross { get; set; }
    public int StoreId { get; set; }
    public Store Store { get; set; }
    public ICollection<Transaction> Transactions { get; set; }
}