require 'yelp/fusion'

#Yelp.client.configure do |config|
#  config.consumer_key = ENV['yelp_consumer_key']
#  config.consumer_secret = ENV['yelp_consumer_secret']
#  config.token = ENV['yelp_token']
#  config.token_secret = ENV['yelp_token_secret']
#end

Yelp::Fusion.client.configure do |config|
	config.api_key = ENV['YELP_API_KEY']
end