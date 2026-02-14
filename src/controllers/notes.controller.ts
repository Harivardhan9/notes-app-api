import { Request, Response, NextFunction } from 'express';
import * as notesService from '../services/notes.service';

export const getNotes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const notes = await notesService.getAllNotes();
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const note = await notesService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};
