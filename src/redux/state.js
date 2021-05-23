

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?Hi, how are you?11', like: 25},
            {id: 2, post: 'Its my first post!', like: 15},
            {id: 3, post: 'Fucking crazy22', like: 55}
        ],

    },
    friends: [
        {name: "Kirill", img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330'},
        {name: "Anna", img: 'https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2019/12/29/2744071-56703430-2560-1440.jpg'},
        {name: "Maria", img: 'https://resizer.mail.ru/p/4231913b-0e4d-517c-a9d7-bf10b0fab1be/AAACKoBF9B95Ym1LNyDD7Ba-aAYbqaPaquwjGncAQ1QqyilD6yNG4ULETJU8rr0CHeb5a0EvGnAO4BrnLvAP-gnW92E.jpg'},
        {name: "Spanch Bob", img: 'https://deti-online.com/img/spanchbob-color.jpg'},
    ],
    dialogsPage: {
        messages: [ {id: 1,message: 'How are you?!'},
            {id: 2,message: 'Hi!'},
            {id: 3,message: 'Speak english!Speak english!1111'}],
        dialogs: [
            {id: 1,name: 'Dima'},
            {id: 2,name: 'Andrey'},
            {id: 3,name: 'Nina'},
            {id: 4,name: 'Alex'},
            {id: 5,name: 'Valera'},
            {id: 6,name: 'Sonya'},
            {id: 7,name: 'Maria'}
        ],
    },
}

export default state;