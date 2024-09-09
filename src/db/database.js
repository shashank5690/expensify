import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const dbName = 'mySQLiteDB.db';

export const initializeDatabase = async () => {
  try {
    const db = await SQLite.openDatabase({ name: dbName, location: 'default' });


    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS Categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,

        type TEXT NOT NULL CHECK (type IN ('Expense', 'Income')),
        emoji TEXT NOT NULL
      );
    `);


    await db.executeSql(`
      CREATE TABLE IF NOT EXISTS Transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER,
        amount REAL NOT NULL,
        date INTEGER NOT NULL,
        description TEXT,
        type TEXT NOT NULL CHECK (type IN ('Expense', 'Income')),
        FOREIGN KEY (category_id) REFERENCES Categories (id)
      );
    `);


    const [result] = await db.executeSql('SELECT COUNT(*) as count FROM Categories');
    const count = result.rows.item(0).count;

    if (count === 0) {
      const categoriesData = [

        ['Utilities', 'Expense', '💡'],
        ['Electronics', 'Expense', '📱'],
        ['Food', 'Expense', '🍽️'],
        ['Rent', 'Expense', '🏠'],
        ['Household', 'Expense', '🧹'],
        ['Transportation', 'Expense', '🚗'],
        ['Medical', 'Expense', '💊'],
        ['Bonus', 'Income', '🎁'],
        ['Consulting', 'Income', '💼'],
        ['Part-time', 'Income', '🕒'],
        ['Sales', 'Income', '🛒'],
        ['Freelance', 'Income', '✍️'],
        ['Salary', 'Income', '💵'],
        ['Investments', 'Income', '📈']
      ];

      for (const [name, type, emoji] of categoriesData) {
        await db.executeSql(
          'INSERT INTO Categories (name, type, emoji) VALUES (?, ?, ?);',
          [name, type, emoji]
        );
      }

    }

    return db;
  } catch (error) {
    console.error('Failed to initialize the database:', error);
    throw error;
  }
};


export const getCategories = async (type) => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql('SELECT * FROM Categories WHERE type = ?;', [type]);
    const categories = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      categories.push(results[0].rows.item(i));
    }
    return categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};


export const getTransactions = async () => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql('SELECT * FROM Transactions ORDER BY date DESC;');
    const transactions = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      transactions.push(results[0].rows.item(i));
    }
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    throw error;
  }
};

export const getTransactionsByCategory = async (categoryId) => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql(
      'SELECT * FROM Transactions WHERE category_id = ? ORDER BY date DESC;',
      [categoryId]
    );
    const transactions = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      transactions.push(results[0].rows.item(i));
    }
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions by category:', error);
    throw error;
  }
};

export const getTransactionsByMonth = async () => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql(
      `SELECT * FROM Transactions 
       WHERE date >= strftime('%s', 'now', 'start of month') 
       ORDER BY date DESC;`
    );
    const transactions = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      transactions.push(results[0].rows.item(i));
    }
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions by month:', error);
    throw error;
  }
};

export const getTransactionsByWeek = async () => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql(
      `SELECT * FROM Transactions 
       WHERE date >= strftime('%s', 'now', 'weekday 0', '-7 days') 
       ORDER BY date DESC;`
    );
    const transactions = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      transactions.push(results[0].rows.item(i));
    }
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions by week:', error);
    throw error;
  }
};

export const getTransactionsByDay = async () => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  try {
    const results = await db.executeSql(
      `SELECT * FROM Transactions 
       WHERE date >= strftime('%s', 'now', 'start of day') 
       ORDER BY date DESC;`
    );
    const transactions = [];
    for (let i = 0; i < results[0].rows.length; i++) {
      transactions.push(results[0].rows.item(i));
    }
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions by day:', error);
    throw error;
  }
};


export const addTransaction = async (categoryId, amount, date, description, type) => {
  const db = await SQLite.openDatabase({ name: dbName, location: 'default' });
  
  try {
    await db.executeSql(
      `INSERT INTO Transactions (category_id, amount, date, description, type) 
       VALUES (?, ?, ?, ?, ?);`,
      [categoryId, amount, date, description, type]
    );
    console.log('Transaction added successfully');
  } catch (error) {
    console.error('Failed to add transaction:', error);
    throw error;
  }
};
