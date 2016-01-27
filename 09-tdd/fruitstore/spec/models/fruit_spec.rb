# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  type       :string
#

require 'rails_helper'

RSpec.describe Fruit, type: :model do
  describe 'An apple' do
    before do
      @apple = Apple.create :name => 'Granny Smith'
    end

    it 'should not be squishy' do
      expect(@apple.squishy?).to eq false
      expect(@apple.squishy?).to be false
    end

    it 'should remember what class it is using Single Table Inheritance (STI)' do
      apple = Fruit.find @apple.id
      expect(apple).to_not be nil
      expect(apple.class).to eq Apple
      expect(apple).to eq @apple
      expect(apple.is_a?(Fruit)).to be true
      expect(apple.class.ancestors).to include Fruit
    end
  end

  describe 'A pear' do
    before do
      @pear = Pear.new
    end

    it 'should be squishy' do
      expect(@pear.squishy?).to eq true
      expect(@pear.squishy?).to be true
    end
  end
end
