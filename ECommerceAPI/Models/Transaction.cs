using System;

namespace ECommerceAPI.Models
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public string Store { get; set; }
        public Product Product { get; set; }

        public Transaction()
        {
            Product = new Product();
        }
    }
}