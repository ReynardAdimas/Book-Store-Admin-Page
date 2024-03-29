import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields : title, author, publish year",
      });
    }
    const newbook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newbook);
    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
// Route for Get All books from database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Route for Get one book from database by id
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const book = await Book.findById(id) 
        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})
// Route for Update a Book
router.put('/:id', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: 'send all required fields',
            })
        } 
        const {id} = req.params 
        const result = await Book.findByIdAndUpdate(id, req.body) 
        if(!result){
            return res.status(404).send({message : 'book not found'})
        } 
        return res.status(200).send({message : 'book updated succesfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})
// Route for Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const result = await Book.findByIdAndDelete(id) 
        if(!result){
            return res.status(404).send({message : 'book not found'})
        }
        return res.status(200).send({message : 'book deleted succesfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})
export default router;
