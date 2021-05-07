class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def user_params
    params.required(:user).permit(:name, :password, :email)
  end
#http://localhost:3000/api/users
  def create   
    user = User.create(name: params[:name], email: params[:email], password: params[:password])
    if user.valid?
      render json: {message: 'Successfully created user'}, status: 200
    else
      render json: {message: 'Unable to create user'}, status: 400
    end
  end

  def show
    render json: User.find(params[:id])
  end
def update
    render json: User.find(params[:id]).update(user_params)
end

def destroy
    User.destroy(params[:id])
  
  end
end
