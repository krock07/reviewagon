class CreateStrollers < ActiveRecord::Migration[6.0]
  def change
    create_table :strollers do |t|
      t.string :name
      t.string :slug
      t.string :image_url

      t.timestamps
    end
  end
end
