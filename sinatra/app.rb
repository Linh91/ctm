require 'sinatra'

get '/' do
  "Hello"
end

get '/secret' do
  "This is a secret route"
end

get '/dog' do
  "<div>
  <img src='https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg'>
  </div>"
end
