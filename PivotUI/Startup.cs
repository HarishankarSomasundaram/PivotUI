using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PivotUI.Startup))]
namespace PivotUI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
