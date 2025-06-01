const { lugarCollection } = require("../firebase");

// Obtener todos los lugares
const getAll = async () => {
  const snapshot = await lugarCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener lugar
const getById = async (id) => {
  const doc = await lugarCollection.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

// Crear nuevo lugar
const create = async (Titulo, Descripcion, UrlImgList, categoria, address, phone, hours) => {
  const newLugar = { Titulo, Descripcion, UrlImgList, categoria, address, phone, hours };
  const docRef = await lugarCollection.add(newLugar);
  return { id: docRef.id, ...newLugar };
};

// Actualizar un lugar
const update = async (id, Titulo, Descripcion, UrlImgList, categoria, address, phone, hours) => {
  const lugarRef = lugarCollection.doc(id);
  await lugarRef.update({ Titulo, Descripcion, UrlImgList, categoria, address, phone, hours });
  const updated = await lugarRef.get();
  return { id, ...updated.data() };
};
//Remover un lugar
const remove = async (id) => {
  const lugarRef = lugarCollection.doc(id);
  await lugarRef.delete();
  return true;
};

module.exports = { getAll, getById, create, update, remove };