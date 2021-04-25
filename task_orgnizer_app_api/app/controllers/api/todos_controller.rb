class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  # http://localhost:3000/api/todos
  def create
    todoList = Todo.create(name: params[:name], date: params[:date], status: params[:status], comment: params[:comment])
    todoList_valid = todoList.valid?
    if todoList_valid
      render json: { message: 'you have created todo list' }
    else
      render json: { message: 'todo post has been failed' }
    end
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(name: params[:name], date: params[:date], status: params[:status], comment: params[:comment])
    render json: { message: 'todo has been updated' }
  end

  def destroy
    Todo.delete(params[:id])
    render json: { message: 'list has been deleted' }
  end
end
