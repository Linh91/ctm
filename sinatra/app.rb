require 'sinatra'

get '/' do
  "Hello"
end

get '/secret' do
  "This is a secret route"
end

get '/dog' do
  erb(:index)
end
