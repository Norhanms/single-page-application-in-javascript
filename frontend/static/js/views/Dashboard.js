import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');

    }

    async getHtml() {
        return `
            <h1>This is the home page</h1>
            <a href='/posts'>view posts</a>
        `;
    }
}