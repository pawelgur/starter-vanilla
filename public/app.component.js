const template = Handlebars.compile(`<h1>{{title}}</h1>`);

export function createAppComponent(element) {
    const appComponent = {
        title: "Hello world!",
        element
    };
    appComponent.render = function() {
        this.element.innerHTML = template(this);
    };
    return appComponent;
}
