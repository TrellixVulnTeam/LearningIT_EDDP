using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Learning_IT.Models
{
    public class Article
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column (TypeName = "nvarchar(48)")]
        public string Title { get; set; }  
        [Column (TypeName = "nvarchar(256)")]
        public string Description { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
