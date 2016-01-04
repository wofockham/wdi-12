class Bank
  attr_reader :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, starting_balance)
    @accounts[name] = starting_balance
  end

  def deposit(name, amount)
    @accounts[name] += amount if amount > 0
  end

  def withdraw(name, amount)
    @accounts[name] -= amount if @accounts[name] >= amount
  end

  def balance(name)
    @accounts[name]
  end
end