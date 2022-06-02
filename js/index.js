const config = {};


config.dev = { 
    passwordLength: 2,
    defaultLanguage: 'en',
    db: {
        user: 'root',
        password: 'admin',
        database: 'batai',
    },
}

config.prod = {
    passwordLength: 12,
    defaultLanguage: 'lt',
    db: {
        user: 'node_batai_user',
        password: '636363263626326326',
        database: 'batai-r5fe1d15',
    },
}

const nodeEnv = process.env.NODE_ENV;
const options = config.nodeEnv;

console.log('kur dirba kodas?');
console.log(process.env.NODE_ENV);