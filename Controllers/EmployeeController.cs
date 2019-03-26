

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace hwas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> List()
        {
            // in real life - retrieve from database
            var Employees = new List<Employee>{
                new Employee {
                    ImageUrl ="https://cdn.iconscout.com/icon/free/png-256/avatar-376-456328.png",
                    Name = "Dor Micha",
                    WorkTitle = "Co-Founder" },
                new Employee {
                    ImageUrl ="https://cdn3.iconfinder.com/data/icons/avatars-collection/256/32-512.png",
                    Name = "Eran Zehavi",
                    WorkTitle = "Cto" },
                new Employee {
                    ImageUrl ="https://www.shareicon.net/data/128x128/2016/09/15/829460_user_512x512.png",
                    Name = "Reuven Atar",
                    WorkTitle = "Team leader" },
                new Employee {
                    ImageUrl ="http://www.rmf-freshstart.co.uk/wp-content/uploads/2018/09/login-avatar-1.png",
                    Name = "Giovani Ruso",
                    WorkTitle = "Fed Developer" },
                 new Employee {
                    ImageUrl ="http://www.rmf-freshstart.co.uk/wp-content/uploads/2018/09/login-avatar-1.png",
                    Name = "Fredi Dlumein",
                    WorkTitle = "Full Stack Developer" },

            }
            ;

            return Ok(Employees);
        }
    }

    public class Employee
    {
        public string ImageUrl { get; set; }
        public string Name { get; set; }
        public string WorkTitle { get; set; }
    }
}





