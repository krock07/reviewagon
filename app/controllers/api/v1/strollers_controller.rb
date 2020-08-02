module Api
  module V1

  class StrollersController < ApplicationController
    protect_from_forgery with: :null_session
    # GET /strollers
    # GET /strollers.json
    def index
      strollers = Stroller.all
      render json: StrollerSerializer.new(strollers, options).serialized_json
    end

    # GET /strollers/1
    # GET /strollers/1.json
    def show
      stroller = Stroller.find_by(slug: params[:slug])
      render json: StrollerSerializer.new(stroller, options).serialized_json
    end

    # POST /strollers
    # POST /strollers.json
    def create
              
      stroller = Stroller.new(stroller_params)
    #   render plain: params[:stroller].inspect

      if stroller.save
      
        render json: StrollerSerializer.new(stroller).serialized_json
        #  render json:@stroller, status: :created, location: @stroller

      else
        render json: stroller.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /strollers/1
    # PATCH/PUT /strollers/1.json
    def update
      stroller = Stroller.find_by(slug: params[:slug])

      if stroller.update(stroller_params)
        render json: StrollerSerializer.new(stroller, options).serialized_json
      else
        render json: stroller.errors, status: :unprocessable_entity
      end
    end
    # DELETE /strollers/1
    # DELETE /strollers/1.json
    def destroy
      stroller = Stroller.find_by(slug: params[:slug])

      if stroller.destroy
        head :no_content
      else
        render json: { errors: stroller.errors }, status: 422
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def options
        @options ||= { include: %i[reviews] }
      end

      # Only allow a list of trusted parameters through.
      def stroller_params
        params.require(:stroller).permit(:name, :image_url)
      end
    end
  end
end
