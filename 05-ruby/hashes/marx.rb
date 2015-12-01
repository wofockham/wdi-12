bros = %w{ Groucho Harpo Chico Zeppo }

# One representation of 6 facts about the Marx brothers:
groucho = {
  :plays => 'guitar',
  :enjoys => 'cigars'
}

harpo = {
  :plays => 'harp',
  :enjoys => 'hijinx'
}

chico = {
  :plays => 'piano',
  :enjoys => 'infidelity'
}

# An "inverted" alternative representation of the same 6 facts about the Marx brothers:
enjoys = {
  :groucho => 'cigars',
  :harpo => 'hijinx',
  :chico => 'infidelity'
}

plays = {
  :groucho => 'guitar',
  :harpo => 'harp',
  :chico => 'piano'
}

require 'pry'
binding.pry

