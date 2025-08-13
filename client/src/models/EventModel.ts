
export class EventModel {
    id: number;
    title: string;
    date: Date;
    icon: string;

    constructor(id: number, title: string, date: Date, icon: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.icon = icon;
    }
}