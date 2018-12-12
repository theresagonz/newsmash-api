class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users.to_json(only: [:id, :name, :created_at, :updated_at])
  end
end
