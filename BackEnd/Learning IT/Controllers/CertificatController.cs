using Learning_IT.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wkhtmltopdf.NetCore;

namespace Learning_IT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificatController : ControllerBase
    {
        private IGeneratePdf _generatePdf;
        private MyContext _context;

        public CertificatController(IGeneratePdf generatePdf, MyContext context)
        {
            _generatePdf = generatePdf;
            _context = context;
        }

        [HttpGet("{numeUser}/{id}")]
        public IActionResult Get(string numeUser, int id)
        {
            string title = "";
            string image = "";
            foreach(var item in _context.Badges)
            {
                if(item.Id == id)
                {
                    title = item.Title;
                    image = item.ImageURL;
                }
            }
            var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "Photo", "cooltext375106303841615.png");
           
            var html = new StringBuilder();
            html.Append("<html><body background='https://st3.depositphotos.com/4041239/12552/v/950/depositphotos_125524694-stock-illustration-decorative-border-and-golden-background.jpg' style='background-size:cover; background-repeat:none;'>");
            html.AppendLine("<h1 style='font-size: 50px; padding-left: 250px; padding-top: 250px;'><b><i>Certificate of Training</i></b></h1>");
            html.AppendFormat("<img style='padding-left: 325px;' src='{0}'/>", imagePath);
            html.AppendLine("<h1 style='font-size: 20px; padding-left: 380px; padding-top: 50px;'><b><i>This is to certify that</i></b></h1>");
            html.AppendLine("<h1 style='font-size: 60px; padding-left: 300px; padding-top: 50px;'><i>"+ numeUser +"</i></h1>");
            html.AppendLine("<h1 style='font-size: 20px; padding-left: 320px; padding-top: 50px;'><b><i>has successfully completed training in</i></b></h1>");
            html.AppendLine("<h1 style='font-size: 35px; padding-left: 325px; padding-top: 50px;'><b><i>"+ title +" Course</i></b></h1>");
            html.Append("<img style='padding-left: 420px; padding-top: 50px; width: 100px; height: 100px;' src='" + image +"'/>");

            html.Append("</body></html>");
            var pdf = _generatePdf.GetPDF(html.ToString());
            var pdfStreamResult = new MemoryStream();
            pdfStreamResult.Write(pdf, 0, pdf.Length);
            pdfStreamResult.Position = 0;

            return new FileStreamResult(pdfStreamResult, "application/pdf");
        }
    }
}
