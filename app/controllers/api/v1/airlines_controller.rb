module Api
  module V1
    class Api::V1::AirlinesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        airlines = Airline.all

        render json: AirlineSerializer.new(airlines, options).serialized_json
      end

      def show
        airlines = Airline.find_by(slug: params[:slug])
        render json: AirlineSerializer.new(airlines, options).serialized_json
      end
      def create
        airlines = Airline.new(airline_params)
        if airlines.save
          render json: AirlineSerializer.new(airlines).serialized_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end
      def update
        airlines = Airline.find_by(slug: params[:slug])
        if airlines.update(airline_params)
          render json: AirlineSerializer.new(airlines).serialized_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end
      def destroy
        airlines = Airline.find_by(slug: params[:slug])
        if airlines.destroy
          head :no_content
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end

      private

      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end
      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
