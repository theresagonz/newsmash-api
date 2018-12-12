class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json(only: [:id, :name, :created_at, :updated_at])
  end

  def create
    @user = User.new(user_params)
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :email, :password)
  end
end
