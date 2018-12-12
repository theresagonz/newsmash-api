class CloudsController < ApplicationController
  def index
    @clouds = Cloud.all
    render json: @clouds
  end

  def create
    @cloud = Cloud.new(cloud_params)
    if @cloud.save
      render json: @cloud.to_json
    else 
      render json: @cloud.errors
    end
  end

  private

  def cloud_params
    params.require(:cloud).permit(:id, :user_id, :label, :words)
  end
end
