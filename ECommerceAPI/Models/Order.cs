using System.Collections.Generic;

namespace ECommerceAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}