import { createAppComponent } from "./app.component.js";

const rootEl = document.querySelector("#root");
const appComponent = createAppComponent(rootEl);
appComponent.render();