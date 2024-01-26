const Todo = require('../modals/Todo.modal');

exports.getTodoById = async(req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found with given Id"
            });
        }
        else{
            res.status(200).json({
                success: true,
                data: todo,
                message: `Todo ${id} fetched successfully`,
            });
        }
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            error:err.message,
            message: "Facing Error while fetching significant todo data"
        });
    }
}