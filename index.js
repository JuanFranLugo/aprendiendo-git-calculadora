import Model from './model.js';
import View from './view.js'

document.addEventListener('DOMContentLoaded', () => {
    const view = new View();
    const model = new Model();

    view.setModel(model);
    view.createButons();
});
