class CloudsController < ApplicationController
  def index
    @clouds = Cloud.all
    render json: @clouds
  end
end
