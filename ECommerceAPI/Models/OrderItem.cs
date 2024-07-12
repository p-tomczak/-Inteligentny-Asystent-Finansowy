using ECommerceAPI.Models;

    public class OrderItem
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice => UnitPrice * Quantity; 
        public OrderItem()
        {
            ProductName = "";
        }

        
        public OrderItem(string productName, decimal unitPrice, int quantity)
        {
            ProductName = productName;
            UnitPrice = unitPrice;
            Quantity = quantity;
        }
    }