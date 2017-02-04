class StaticPagesController < ApplicationController
  def about
    render component: 'About'
  end
  
  def search
    puts "should search for #{params[:location]}"
    temp_params = { term: 'dog park' }
    response = Yelp.client.search('Albany, CA', temp_params)
    puts "response: #{response.total}"
    render json: {:search_result => response.total, status: :success}
  end

  private
    def search_params
      params.require(:location)
    end
end