def weekend?
  now = Time.now
  now.saturday? or now.sunday?
end

def weekday?
  not weekend?
end

def business_hours?
  now = Time.now
  now.hour >= 9 and now.hour < 17
end

def sign
  if business_hours? and weekday?
    "Open"
  else
    "Closed"
  end
end



# def sign
#   now = Time.now

#   if (now.monday? || now.tuesday? || now.wednesday? || now.thursday? || now.friday?) && (now.hour >= 9) && (now.hour <= 15)
#     puts "Open"
#   else
#     puts "Closed"
#   end

# end

# sign()
