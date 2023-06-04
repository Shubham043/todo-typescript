import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById,
} from '../controllers/notes';
import { authChecker } from '../middleware/authChecker';


const router = Router();

// Create a new note
router.post('/notes', createNote);


// Get all notes
router.get('/notes', authChecker, getAllNotes);


// Get a specific note by ID
router.get('/notes/:id', getNoteById);


// Update a note by ID
router.put('/notes/:id', updateNoteById);

// Delete a note by ID
router.delete('/notes/:id', deleteNoteById);


export default router;
