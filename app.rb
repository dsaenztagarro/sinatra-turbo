require 'sinatra'

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/entry/:id/edit' do
  send_file 'public/edit.html'
end
