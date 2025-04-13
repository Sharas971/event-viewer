import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/App.tsx", [
        index("./routes/Dashboard.tsx"),
        route("/events", "./routes/Events.tsx"),
        route("/events/:id", "./routes/EventDetails.tsx")
    ])
] satisfies RouteConfig;
