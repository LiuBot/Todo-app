class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def show
  	@todo = Todo.find(params[:id])
  	render json: @todo
  end 

  def index
  	render json: Todo.all
  end 


  def create
  	@todo = Todo.new(todo_params)

  	if @todo.save!
  		render json: @todo
  	else 
  		render json: @todo.errors.full_messages, status: 422
  end

  def update
  	@todo = Todo.find(params[:id])
  	@todo.update(todo_params)
  	 render json: @todo
  end

  def destroy
  	@todo = Todo.find(params[:id])
  	@todo.destroy
  	render json: @todo
  end 
end


private 

	def todo_params
		params.require(:todo).permit(:title, :body, :done)
	end 
end
