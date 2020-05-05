# frozen_string_literal: true

class Api::V1::SpotsController < ApplicationController
  # before_action :authenticate_user
  before_action :set_spot, only: %i[show update destroy]

  # GET /spots
  # GET /spots.json
  def index
    @spots = Spot.all
    render json: @spots
  end

  # GET /spots/1
  # GET /spots/1.json
  def show
    render json: @spot
  end

  # GET /spots/new
  # def new
  #   @spot = Spot.new
  # end

  # GET /spots/1/edit
  # def edit
  # end

  # POST /spots
  # POST /spots.json
  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render json: @spot, status: :created, location: api_v1_spot_url(@spot)
    else
      render json: @spot.errors, status: :unprocessable_entity
     end
  end

  # PATCH/PUT /spots/1
  # PATCH/PUT /spots/1.json
  def update
    if @spot.update(spot_params)
      render json: @spot
    else
      render json: @spot.errors, status: :unprocessable_entity
     end
  end

  # DELETE /spots/1
  # DELETE /spots/1.json
  def destroy
    @spot.destroy
  end

  def tagged_spot
    tagId = params[:tagid]
    tagged_spots = TagAssociation.where(tag_id: tagId)
    spot_ids = []
    tagged_spots.each do |tagged_spot|
      spot_ids.push(tagged_spot.spot_id)
    end
    spots = Spot.where(id: spot_ids)
    render json: spots
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_spot
    @spot = Spot.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def spot_params
    params.require(:spot).permit(:title, :description, :location, :url, :avg_cost)
    params.require(:spot).permit(tags_ids: [])
  end
end
