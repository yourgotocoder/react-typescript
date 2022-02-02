export default class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.id = new Date().toISOString() + Math.random() * 10000;
        this.text = todoText;
    }
}
