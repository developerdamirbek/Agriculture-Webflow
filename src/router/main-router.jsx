import { About } from "../pages/about";
import { Home } from "../pages/home";
import { News } from "../pages/news";
import { Pages } from "../pages/pages";
import { Projects } from "../pages/projects";
import { Shop } from "../pages/shop";

export const pages = [
    {
        component: <Home/>,
    },
    {
        component: <About/>,
        path: "/about",
    },
    {
        component: <Pages/>,
        path: "/pages",
    },
    {
        component: <Shop/>,
        path: '/shop',
    },
    {
        component: <Projects/>,
        path: '/projects',
    },
    {
        component: <News/>,
        path: '/news',
    },
]