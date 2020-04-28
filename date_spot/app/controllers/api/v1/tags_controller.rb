class Api::V1::TagsController < ApplicationController
  before_action :set_tag, only: [:show, :update, :destroy]

  # GET /tags
  # GET /tags.json
  def index
    @tags = Tag.all
    render json: @tags
  end

  # GET /tags/1
  # GET /tags/1.json
  def show
    render json: @tag
  end

  # GET /tags/new
  # def new
  #   @tag = Tag.new
  # end

  # GET /tags/1/edit
  # def edit
  # end

  # POST /tags
  # POST /tags.json
  def create
    @tag = Tag.new(tag_params)

    if @article.save
      render json: @tag, status: :created, location:        api_v1_article_url(@tag)
     else
      render json: @tag.errors, status: :unprocessable_entity
     end
  end

  # PATCH/PUT /tags/1
  # PATCH/PUT /tags/1.json
  def update
    if @tag.update(tag_params)
      render json: @tag
     else
      render json: @tag.errors, status: :unprocessable_entity
     end
  end

  # DELETE /tags/1
  # DELETE /tags/1.json
  def destroy
    @tag.destroy
   
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tag
      @tag = Tag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tag_params
      params.require(:tag).permit(:tag)
    end
end
