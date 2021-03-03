import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts');

    }

    async getHtml() {
        return `
           <h1>This is the posts</h1>
           <p>Posts number1</p>
            <a href='/posts'>view posts</a>
        `;
    }
}