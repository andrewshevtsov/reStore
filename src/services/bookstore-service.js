export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript. The Definitive Guide: Master the World`s Most-Used Programming Language 7th Edition',
            author: 'David Flanagan',
            price: 34.99,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback – December 4',
            author: 'Marijn Haverbeke',
            price: 25.49,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg'
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.80) {
                    reject(new Error('something wrong...'))
                } else {
                    resolve(this.data)
                }
            }, 700);
        })
    }
}