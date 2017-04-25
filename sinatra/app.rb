require 'sinatra'

get '/' do
  "Hello"
end

get '/secret' do
  "This is a secret route"
end

get '/random-dog' do
  @name = ["Amigo", "Oscar", "Viking"].sample
  erb(:index)
end

get '/named-dog' do
  p @name = params[:name]
  erb(:index)
end
