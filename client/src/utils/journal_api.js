import axios from 'axios';

export const createJournal = data => axios.post('/api/journals', data);

export const editJournal = data => axios.put(`/api/journals/${data.id}`, data);

export const getJournals = () => axios.get(`/api/journals`);

export const deleteJournal = id => axios.delete(`/api/journals/${id}`);
