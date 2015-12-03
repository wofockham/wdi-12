class MarxBrother
  # Creates getters and setters for @name, @instrument, @vice
  attr_accessor :name, :instrument, :vice

  def initialize(n=nil, i=nil, v=nil)
    @name = n
    @instrument = i
    @vice = v
  end

  def about
    puts "My name is #{ @name }. I play the #{ @instrument } and I enjoy #{ @vice }"
  end
end

g = MarxBrother.new
g.name = 'Groucho'
g.instrument = 'guitar'
g.vice = 'cigars'

h = MarxBrother.new 'Harpo', 'harp', 'hijinx'

c = MarxBrother.new 'Chico'

require 'pry'
binding.pry







