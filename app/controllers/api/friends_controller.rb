class Api::FriendsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Friend.all
  end

  def show
    render json: Friend.find(params[:id])
  end
end
