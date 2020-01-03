class CreateJournal < ActiveRecord::Migration[6.0]
  def change
    create_table :journals do |t|
      t.string :name, null: false, default: ""
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :journals, [:user_id, :name], unique: true
    add_index :journals, :user_id
  end
end
