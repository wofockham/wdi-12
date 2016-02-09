# inputs = [1, 4, 25, 7, -12]

inputs = [-1, -1001, -17]

# puts inputs.max

def largest(a)
  largest = -Float::INFINITY # We could probably also use a[0]
  a.each do |n|
    largest = n if n > largest
  end
  largest
end

p largest(inputs)