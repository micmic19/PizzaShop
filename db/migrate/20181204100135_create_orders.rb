class CreateOrders < ActiveRecord::Migration[5.2]
  def change
  	create_table :orders do |t|
  		t.string :orders_input
  		t.string :name
  		t.string :phone
  		t.string :address
		t.timestamps
	end
  end
end
