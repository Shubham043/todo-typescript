import { Request, Response } from 'express';
import NoteModel from '../models/notes'; // Import the Note model

// Controller for creating a new note
export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, text } = req.body;

    // Create a new note using the Note model
    const newNote = await NoteModel.create({
      title,
      text,
    });

    res.status(201).json(newNote); // Return the newly created note
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller for fetching all notes
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    // Retrieve all notes from the Note model
    const notes = await NoteModel.find();

    res.json(notes); // Return the fetched notes
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller for fetching a specific note by ID
export const getNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find a note by ID using the Note model
    const note = await NoteModel.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note); // Return the found note
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller for updating a note by ID
export const updateNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;

    // Find and update a note by ID using the Note model
    const updatedNote = await NoteModel.findByIdAndUpdate(
      id,
      { title, text },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(updatedNote); // Return the updated note
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller for deleting a note by ID
export const deleteNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find and delete a note by ID using the Note model
    const deletedNote = await NoteModel.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
