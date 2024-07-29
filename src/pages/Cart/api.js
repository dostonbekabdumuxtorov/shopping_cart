import { useEffect, useState, useCallback } from "react";
import { openDB } from "idb";

const useIndexedDB = (dbName, storeName, defaultData = []) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const db = await openDB(dbName, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(storeName)) {
            const store = db.createObjectStore(storeName, {
              keyPath: "id",
              autoIncrement: true,
            });
            defaultData.forEach(item => store.add(item));
          }
        },
      });
      setDb(db);
    };
    initDB();
  }, [dbName, storeName, defaultData]);

  

  const getData = useCallback(
    async () => {
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const data = await store.getAll();
      await tx.done;
      return data;
    },
    [db]
  );
  const deleteData = useCallback(
    async (id) => {
      if (!db) {
        console.error("Database is not initialized");
        return;
      }
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      await store.delete(id);
      await tx.done;
    },
    [db]
  );
  const updateData = useCallback(
    async (id, updatedItem) => {
      if (!db) {
        console.error('Database is not initialized');
        return;
      }
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const itemToUpdate = { ...updatedItem, id };
      await store.put(itemToUpdate);
      await tx.done;
    },
    [db, storeName]
  );

  return {  getData,deleteData,updateData, dbInitialized: db !== null };
};

export default useIndexedDB;
