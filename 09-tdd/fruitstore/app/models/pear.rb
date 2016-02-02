# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  type       :string
#  shelf_id   :integer
#

class Pear < Fruit
  def squishy?
    true
  end
end
