module Api
  module V1

class ReviewsController < ApplicationController
  protect_from_forgery with: :null_session
  # before_action :set_review, only: [:show, :edit, :update, :destroy]

  
  # POST /reviews
  # POST /reviews.json
  def create
    review = stroller.reviews.new(review_params)
   

    if review.save
      render json: ReviewSerializer.new(review).serialized_json
    else
      render json: review.errors, status: :unprocessable_entity
    end
  end


  def update
    review = Review.find(params[:id])

    if review.update(review_params)
      render json: StrollerSerializer.new(review, options).serialized_json
    else
      render json: stroller.errors, status: :unprocessable_entity
    end
  end

  

  # DELETE /reviews/1
  # DELETE /reviews/1.json
  def destroy
    # review = current_user.reviews.find(params[:id])
    review = Review.find(params[:id])

    if review.destroy
      head :no_content
    else
      render json: errors(review), status: 422
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def stroller
      @stroller ||= Stroller.find(params[:stroller_id])
      end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:title, :description, :score, :stroller_id)
    end
end
end
end
