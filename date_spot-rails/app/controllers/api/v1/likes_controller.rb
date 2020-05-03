# frozen_string_literal: true

class Api::V1::LikesController < ApplicationController
  before_action :set_like, only: %i[show update destroy]

  # GET /likes
  # GET /likes.json
  def index
    @likes = Like.all
    render json: @likes
  end

  # GET /likes/1
  # GET /likes/1.json
  def show
    render json: @like
  end

  # GET /likes/new
  def new
    @like = Like.new
  end

  # GET /likes/1/edit
  def edit; end

  # POST /likes
  # POST /likes.json
  def create
    @like = Like.new(like_params)

    if @like.save
      render json: @like, status: :created, location: api_v1_like_url(@like)
    else
      render json: @like.errors, status: :unprocessable_entity
     end
  end

  # PATCH/PUT /likes/1
  # PATCH/PUT /likes/1.json
  def update
    if @like.update(like_params)
      render json: @like
    else
      render json: @like.errors, status: :unprocessable_entity
     end
  end

  # DELETE /likes/1
  # DELETE /likes/1.json
  def destroy
    @like.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_like
    @like = Like.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def like_params
    params.require(:like).permit(:spot_id)
  end
end
