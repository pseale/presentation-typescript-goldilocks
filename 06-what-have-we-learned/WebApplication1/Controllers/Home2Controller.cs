using System.Collections.Generic;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class Home2Controller : Controller
    {
        public ActionResult Index()
        {
            return View(new HomeIndexViewModel()
            {
                
            });
        }

        public class HomeIndexViewModel
        {
            public IEnumerable<Register> Registers
            {
                get { throw new System.NotImplementedException(); }
                set { throw new System.NotImplementedException(); }
            }
        }

        public class Register
        {
            public string Name { get; set; }
            public int Value { get; set; }
        }
    }
}