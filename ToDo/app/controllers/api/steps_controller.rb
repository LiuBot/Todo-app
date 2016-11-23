class Api::StepsController < ApplicationController
	 def index
  	render json: Step.all
  end 

  def show
  	@step = Step.find(params[:todo_id])
  	render json: @step
  end 

  def create
  	@step = Step.new(step_params)

  	if @step.save
  		render json: @step
  	else
  		render json: @step.errors.full_messages, status:422
    end 
  end

  def destroy
  	@step = Step.find(params[:id])
  	@step.destroy
  	render json: @step
  end 
  
  def update
    @step = Step.find(params[:todo_id])
    @step.update(step_params)
    render json: @step
  end



private 

	def step_params
		params.require(:step).permit(:title, :todo_id, :done)
	end 
end
