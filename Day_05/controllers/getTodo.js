const Todo = require('../modals/Todo.modal');

exports.getTodo = async(req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: "Todo fetched successfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            error:err.message,
            message: "Facing Error while fetching todos data"
        });
    }
}