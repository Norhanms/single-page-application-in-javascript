import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');

    }

    async getHtml() {
        return `
           <h1>This is the settings page</h1>
            <p>user settings</p>
        `;
    }
}