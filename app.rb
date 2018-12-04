#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end
class Order < ActiveRecord::Base
end


def parse_order_line orders_line
	
	s1 = orders_line.split(/,/)
	arr = []
	s1.each do |x|
		s2 = x.split(/\=/)
		s3 = s2[0].split(/_/)
		id = s3[1]
		cnt = s2[1]
		
		arr2 = [id, cnt]
		arr.push arr2
	end
	return arr
end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	@orders_input = params[:orders]
	@items = parse_order_line(@orders_input)

	@items.each do |item|
		item[0] = Product.find(item[0])
	end

	erb :cart
end

post '/place_order' do
	@success = false
	@o = Order.new params[:order]
	if @o.save
		@success = true
	else
		@error = @o.errors.full_messages.first
	end
	erb :place_order
end

get '/orders' do
	@orders = Order.order('id DESC')
	erb :orders
end