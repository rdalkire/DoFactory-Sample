using DoFactory_Sample.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoFactory_Sample.Controllers
{
    public class HomeController : Controller
    {
        private dofactory_sampleEntities db = new dofactory_sampleEntities();

        public ActionResult Index()
        {
            return RedirectToAction( "Index", "OrderItems");
        }

        public ActionResult About()
        {
            ViewBag.Message = "My own self-training applicaton; first purpose is to try the <a href='https://github.com/reactjs/react-autocomplete'>react-autocomplete</a> component.  Scaffolded from <a href='https://www.dofactory.com/sql/sample-database'>sample from dofactory.com</a>.  <a href='https://github.com/rdalkire/DoFactory-Sample'>Here's the source code.</a>";

            return View();
        }

    }
}