Genre.destroy_all

g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Nangy Vibes'
g3 = Genre.create :name => 'Chamber Pop'

Song.destroy_all
s1 = Song.create :name => 'Expect Delays'
s2 = Song.create :name => 'Have A Safe Trip, Dear'
s3 = Song.create :name => 'Black Sea'

Album.destroy_all
a1 = Album.create :name => 'Systems/Layers'
a2 = Album.create :name => 'Black Sea'
a3 = Album.create :name => 'Engine Takes To The Water'

Artist.destroy_all
r1 = Artist.create :name => 'Rachels'
r2 = Artist.create :name => 'Fennesz'
r3 = Artist.create :name => 'June of 44'

User.destroy_all
u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :name => 'Linda', :email => 'linda@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'

Mixtape.destroy_all
m1 = Mixtape.create :name => 'Code Jams'
m2 = Mixtape.create :name => 'Driving'
m3 = Mixtape.create :name => 'After Dark'

r1.songs << s1
r2.songs << s3
r3.songs << s2

a1.songs << s1
a2.songs << s3
a3.songs << s2

g1.songs << s2
g2.songs << s1
g3.songs << s3

m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s3

u1.mixtapes << m1
u2.mixtapes << m2
u3.mixtapes << m3


