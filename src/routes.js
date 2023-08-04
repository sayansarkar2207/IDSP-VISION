/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/** 
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Disease_Outbreaks from "layouts/disease_outbreaks";
import Geographic_Distribution from "layouts/geographic_distribution";
import Disease_Statistics from "layouts/disease_statistics";
import Real_Time_Alerts from "layouts/real_time_alerts";
import Demographic_Analysis from "layouts/demographic_analysis";
import Data_Quality from "layouts/data_quality";
import Source_of_Reporting from "layouts/source_of_reporting";
import Disease_Forms from "layouts/disease_forms";
import Trend_Analysis from "layouts/trend_analysis";
import Syndromic_Surveillance from "layouts/syndromic_surveillance";
import Heatmaps from "layouts/heatmaps";
import Comparative_Analysis from "layouts/comparative_analysis";
import Resource_Allocation from "layouts/resource_allocation";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Vision UI Dashboard React icons
import { IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

import { IoAlertCircle } from "react-icons/io5";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoTriangleSharp } from "react-icons/io5";
import { IoPulseSharp } from "react-icons/io5";
import { IoFlameSharp } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { MdLocalHospital } from "react-icons/md";
import { GiWorld } from "react-icons/gi";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Disease Outbreaks",
    key: "disease_outbreaks",
    route: "/disease_outbreaks",
    icon: <MdLocalHospital size="15px" color="inherit" />,
    component: Disease_Outbreaks,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Geographic Distribution",
    key: "geographic_distribution",
    route: "/geographic_distribution",
    icon: <GiWorld size="15px" color="inherit" />,
    component: Geographic_Distribution,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Disease Statistics",
    key: "disease_statistics",
    route: "/disease_statistics",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Disease_Statistics,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Real-time Alerts",
    key: "real_time_alerts",
    route: "/real_time_alerts",
    icon: <IoAlertCircle size="15px" color="inherit" />,
    component: Real_Time_Alerts,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Demographic Analysis",
    key: "demographic_analysis",
    route: "/demographic_analysis",
    icon: <IoPeopleCircleSharp size="15px" color="inherit" />,
    component: Demographic_Analysis,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Data Quality",
    key: "data_quality",
    route: "/data_quality",
    icon: <IoCheckmarkDoneCircleSharp size="15px" color="inherit" />,
    component: Data_Quality,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Source of Reporting",
    key: "source_of_reporting",
    route: "/source_of_reporting",
    icon: <IoDocumentTextSharp size="15px" color="inherit" />,
    component: Source_of_Reporting,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Disease Forms",
    key: "disease_forms",
    route: "/disease_forms",
    icon: <IoNewspaperSharp size="15px" color="inherit" />,
    component: Disease_Forms,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Trend Analysis",
    key: "trend_analysis",
    route: "/trend_analysis",
    icon: <IoTriangleSharp size="15px" color="inherit" />,
    component: Trend_Analysis,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Syndromic Surveillance",
    key: "syndromic_surveillance",
    route: "/syndromic_surveillance",
    icon: <IoPulseSharp size="15px" color="inherit" />,
    component: Syndromic_Surveillance,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Heatmaps",
    key: "heatmaps",
    route: "/heatmaps",
    icon: <IoFlameSharp size="15px" color="inherit" />,
    component: Heatmaps,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Comparative Analysis",
    key: "comparative_analysis",
    route: "/comparative_analysis",
    icon: <IoBarChartSharp size="15px" color="inherit" />,
    component: Comparative_Analysis,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Resource Allocation",
    key: "resource_allocation",
    route: "/resource_allocation",
    icon: <IoAnalytics size="15px" color="inherit" />,
    component: Resource_Allocation,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <IoRocketSharp size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <IoIosDocument size="15px" color="inherit" />,
    component: SignUp,
    noCollapse: true,
  },
];

export default routes;
