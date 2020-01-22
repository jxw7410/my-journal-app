class CreateEntry < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :name, null: false
      t.integer :journal_id, null: false
      t.timestamps
    end

    add_index :entries, [:journal_id, :name], unique: true
    add_index :entries, :journal_id
  end
end
