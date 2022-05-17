import GraphGenerator from "views/GraphGenerator.js";
import TableGraphList from "views/TableGraphList.js";
import Algorithms from "views/Algorithms.js";
import Help from "views/Help.js";

const dashboardRoutes = [{
        path: "/graph-generator",
        name: "Graph Generator",
        icon: "nc-icon nc-atom",
        component: GraphGenerator,
        layout: "/admin",
    },
    {
        path: "/graph-list",
        name: "Table Graph List",
        icon: "nc-icon nc-notes",
        component: TableGraphList,
        layout: "/admin",
    },
    {
        path: "/algorithms",
        name: "Algorithms",
        icon: "nc-icon nc-vector",
        component: Algorithms,
        layout: "/admin",
    },
    {
        path: "/help",
        name: "Help",
        icon: "nc-icon nc-app",
        component: Help,
        layout: "/admin",
    },
];

export default dashboardRoutes;