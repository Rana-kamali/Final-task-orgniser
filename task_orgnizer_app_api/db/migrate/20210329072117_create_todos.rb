class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :name
      t.string :date
      t.string :status
      t.string :comment
    end
  end
end
