public class Transaction
{
    public int TransactionId { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPriceNet { get; set; }
    public decimal UnitPriceGross { get; set; }
    public decimal TotalPriceNet => Quantity * UnitPriceNet;
    public decimal TotalPriceGross => Quantity * UnitPriceGross;
    public DateTime Date { get; set; }
    public TransactionType Type { get; set; } // Purchase or Return
    public int StoreId { get; set; }
    public Store Store { get; set; }
}

public enum TransactionType
{
    Purchase,
    Return
}