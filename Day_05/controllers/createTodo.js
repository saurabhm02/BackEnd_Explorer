const Todo = require('../modals/Todo.modal');


exports.createTodo = async(req, res) => {
    try{
        const { title, description } = req.body;
        const response = await Todo.create({  // create todo obj and insert in DB
            title,
            description
        });
        res.status(200).json({
            success: true,
            data: response,
            message: "Todo created successfully"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        });
    }
}