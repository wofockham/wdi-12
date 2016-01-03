require_relative '../bank'

describe Bank do
  describe '.new' do
    it "creates a new bank object" do
      bank = Bank.new('TDD Bank')
      expect(bank).to_not eq nil
    end

    it "has a name" do
      bank = Bank.new('TDD Bank')
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it "creates a new account for a user with a given starting balance" do
      bank = Bank.new('TDD Bank')
      bank.create_account('Bob', 200)
      expect(bank.accounts['Bob']).to eq 200
    end
  end

end

