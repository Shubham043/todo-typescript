import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
  deleteNoteById,
} from '../controllers/notes';
import { authChecker } from '../middleware/authChecker';
// import { swaggerRouter } from 'swagger-express-ts';

const router = Router();

// Create a new note
router.post('/notes', createNote);
/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags:
 *       - Notes
 *     requestBody:
 *       description: Note data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       201:
 *         description: Successfully created a new note
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Server error
 */

// Get all notes
router.get('/notes', authChecker, getAllNotes);
/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes
 *     tags:
 *       - Notes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched all notes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Server error
 */

// Get a specific note by ID
router.get('/notes/:id', getNoteById);
/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Get a specific note by ID
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Note ID
 *     responses:
 *       200:
 *         description: Successfully fetched the note
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */

// Update a note by ID
router.put('/notes/:id', updateNoteById);
/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note by ID
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Note ID
 *     requestBody:
 *       description: Note data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Successfully updated the note
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */

// Delete a note by ID
router.delete('/notes/:id', deleteNoteById);
/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Note ID
 *     responses:
 *       200:
 *         description: Successfully deleted the note
 *       404:
 *         description: Note not found
 *       500:
 *         description: Server error
 */

export default router;
