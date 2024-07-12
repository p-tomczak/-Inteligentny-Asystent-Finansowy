namespace ECommerceAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public List<Product> Products { get; set; }
    }
}