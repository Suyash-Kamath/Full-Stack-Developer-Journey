import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // await Todo.create
    // also can do this
    const todo = new Todo({
      title,
      description,
    });
    todo.save();

    return res.status(201).json({
      success: true,
      message: "Todo created ...",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find();

    return res.status(200).json({
      success: true,
      todo: todo.length === 0 ? [] : todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title } = req.body;
    // const todo = await Todo.findById(todoId);
    // todo.title = title

    // alternate way
    const todo = await Todo.findByIdAndUpdate(todoId, { title }, { new: true }); // new:true means latest and updated data dikhe
    // await todo.save(); no need to save
    return res.status(200).json({
      success: true,
      todo,
      message: "Todo updated ...",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async(req,res)=>{
    try {
        const { todoId } = req.params;
        await Todo.findByIdAndDelete(todoId);

        return res.status(200).json({
            success:true,
            message:"Todo Deleted Successfully"
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const getById = async(req,res)=>{
   try {
     const {todoId} = req.params;
     const todo = await Todo.findById(todoId)
     return res.status(200).json({
        success:true,
        todo,
        message:"Fetched todo by id"
     })
   } catch (error) {
    console.log(error);
    
   }

}
