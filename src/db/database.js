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
        type TEXT NOT NULL CHECK (type IN ('Expense', 'Income'))
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

    const categoriesData = [
      ['Utilities', 'Expense'],
      ['Electronics', 'Expense'],
      ['Dining Out', 'Expense'],
      ['Breakfast Supplies', 'Expense'],
      ['Household Items', 'Expense'],
      ['Bonus', 'Income'],
      ['Consulting Work', 'Income'],
      ['Part-time Job', 'Income'],
      ['Online Sales', 'Income'],
      ['Freelance Writing', 'Income'],
    ];

    for (const [name, type] of categoriesData) {
      await db.executeSql(
        'INSERT INTO Categories (name, type) VALUES (?, ?);',
        [name, type]
      );
    }

    console.log('Database initialized successfully.');
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
