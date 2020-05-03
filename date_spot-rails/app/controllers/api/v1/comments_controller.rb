# frozen_string_literal: true

class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all
    render json: @comments
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    render json: @comment
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit; end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: api_v1_comment_url(@comment)
    else
      render json: @comment.errors, status: :unprocessable_entity
     end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
     end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def comment_params
    params.require(:comment).permit(:body, :spot_id)
  end
end
