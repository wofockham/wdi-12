class SinglyLinkedList
  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

  attr_reader :head

  def initialize(start_value=nil)
    @head = Node.new(start_value) unless start_value.nil?
  end

  def first
    @head
  end

  def last
    last_node = @head
    while last_node && last_node.next
      last_node = last_node.next
    end
    last_node
  end

  def append(value)
    node = Node.new value

    last_node = self.last
    if last_node.nil?
      @head = node # No nodes present: make this the new head
    else
      last_node.next = node
    end
  end

  def prepend(value)
    # Your code here
  end

  def length # Also #count and #size (Ruby has a nice way to alias things)
    # Your code here
  end

  def find(needle)
    # Returns the node containing the needle as its value
  end

  def reverse
    # Returns a new SLL with the nodes in reverse order
  end

  def reverse!
    # Your code here
  end

  def each
    # Your tricky code goes here (psst "yield")
  end

  def map
    # This is trivial once #each is working
  end
end

# require 'pry'
# binding.pry

# bros = SinglyLinkedList.new 'Chico'
# bros.append('Groucho')
# bros.append('Harpo')

# new_node = Node.new 'Groucho'
# puts new_node.value # => 'Groucho'
# puts new_node.next # => nil