class Calculator
  def initialize
    @inputs = []
  end

  def <<(n)
    @inputs.push n
  end

  def add
    @inputs.inject :+
  end

  def subtract
    @inputs.inject :-
  end
end
