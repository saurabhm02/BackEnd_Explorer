const Todo = require('../modals/Todo.modal');

exports.deleteTodo = async(req, res) => {
    try{
        const { id }  = req.params;
        const todo = await Todo.findByIdAndDelete(id);   
        res.json({
            success: true,
            data: todo,
            message: "Todo deleted successfully"
        })     
    }
    catch(err){
        res.status(500).json({
            success: false,
            error:err.message,
            message: "Facing Error while deleting todo data"
        });
    }
}