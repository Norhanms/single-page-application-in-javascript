import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return {};
}
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
const router = async () => {
    console.log(pathToRegex('/posts/:id'))
    const routes = [
        {
            path: '/',
            view: Dashboard
        },
        {
            path: '/posts',
            view: Posts
        },
        {
            path: '/settings',
            view: Settings
        }
    ];

    //test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            //isMatch: location.pathname === route.path,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    // let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);
    //console.log(potentialMatches)
    let match = potentialMatches.find(potentialMatche => potentialMatche.result != null);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view(getParams(match));
    console.log(view)
    document.querySelector("#app").innerHTML = await view.getHtml();

};








/*======================================================*/

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})













