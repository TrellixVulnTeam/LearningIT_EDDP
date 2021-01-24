using Learning_IT.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Learning_IT.Services.CertificatService;

namespace Learning_IT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificatController : ControllerBase
    {
        private readonly MyContext _context;
        public CertificatController(MyContext context)
        {
            _context = context;
        }

        [HttpPost]
        public ActionResult PostArticle(int id)
        {
            string firstName = "";
            string lastName = "";
            foreach(var item in _context.Users)
            {
                if(item.Id == id)
                {
                    firstName = item.FirstName;
                    lastName = item.LastName;
                }
            }
            SchemaOferta schemaOferta = new SchemaOferta();
            byte[] abytes = schemaOferta.PrepareReport(firstName, lastName);

            //return File(abytes, "application/pdf");
            return Ok();
        }

    }
}
